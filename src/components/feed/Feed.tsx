import Ripple from "./Ripple";
import { type Ripple as RippleType } from "~/types";
import { A } from "@solidjs/router";
import { createResource, For } from "solid-js";
import { getFeed } from "~/lib/server";

export default function Feed() {
  const [posts] = createResource(async () => {
    return (await getFeed()) as RippleType[];
  });

  return (
    <div class="">
      <For each={posts()}>
        {(item) => {
          return (
            <A href={`/post/${item.id}`} class="w-full cursor-pointer">
              <Ripple post={item} />
            </A>
          );
        }}
      </For>
    </div>
  );
}
