import { createMiddleware } from "@solidjs/start/middleware";
import { getCookie, setCookie, getHeader } from "vinxi/http";
import { Session, User, verifyRequestOrigin } from "lucia";
import { lucia } from "./lib/auth";

export default createMiddleware({
  onRequest: async (event) => {
    if (event.nativeEvent.node.req.method !== "GET") {
      const originHeader = getHeader(event.nativeEvent, "Origin") ?? null;
      const hostHeader = getHeader(event.nativeEvent, "Host") ?? null;
      if (
        !originHeader ||
        !hostHeader ||
        !verifyRequestOrigin(originHeader, [hostHeader])
      ) {
        event.nativeEvent.node.res.writeHead(403).end();
        return;
      }
    }

    const cookie =
      getCookie(event.nativeEvent, lucia.sessionCookieName) ?? null;
    const sessionId = cookie ? lucia.readSessionCookie(cookie) : null;
    if (!sessionId) {
      event.nativeEvent.context.session = null;
      event.nativeEvent.context.user = null;
      return;
    }
    const { session, user } = await lucia.validateSession(sessionId);
    if (session && session.fresh) {
      setCookie(
        event.nativeEvent,
        lucia.sessionCookieName,
        lucia.createSessionCookie(session.id).serialize()
      );
    }
    if (!session) {
      setCookie(
        event.nativeEvent,
        lucia.sessionCookieName,
        lucia.createBlankSessionCookie().serialize()
      );
    }

    event.nativeEvent.context.session = session;
    event.nativeEvent.context.user = user;
  },
});

declare module "vinxi/server" {
  interface H3EventContext {
    user: User | null;
    session: Session | null;
  }
}
