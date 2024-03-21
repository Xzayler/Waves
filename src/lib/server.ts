"use server";
import { cache } from "@solidjs/router";
import { register as rg, login as li, logout as lo } from "./auth";
import { getRequestEvent } from "solid-js/web";
import { redirect } from "@solidjs/router";
import { User } from "lucia";
import { submitPost as sp } from "./interactions";
import { getFeed as gf } from "./database";

// session / auth
export const register = rg;
export const login = li;
export const logout = lo;

export const getCurrentUser = cache((): User => {
  const event = getRequestEvent();
  if (!event || !event.locals.session || !event.locals.user) {
    throw redirect("/login");
  }
  return event.locals.user;
}, "curruser");

// Interactions
export const submitPost = sp;
export const getFeed = gf;