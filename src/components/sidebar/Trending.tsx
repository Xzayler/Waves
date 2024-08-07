import { For } from 'solid-js';
import { createResource } from 'solid-js';
import { getTrending } from '~/lib/server';
import { A } from '@solidjs/router';

type Tag = {
  name: string;
  count: number;
};

function TrendEntry(props: { tag: Tag; index: number }) {
  return (
    <A href={`/search?searchType=hashtag&q=${props.tag.name}`}>
      <div class="px-4 py-3 hover:bg-highlightextra ">
        <div class="flex flex-col">
          <div class=" text-faint text-sm  ">{`${props.index} · Trending`}</div>
          <div class=" text-foreground text-md font-bold mt-[1px]">{`#${props.tag.name}`}</div>
          <div class="text-faint text-sm mt-1">{`${props.tag.count} posts`}</div>
        </div>
      </div>
    </A>
  );
}

export default function Trending() {
  const [tags] = createResource(() => {
    return getTrending() as Promise<Tag[]>;
  });
  return (
    <div class="rounded-2xl bg-highlight overflow-hidden text-start ">
      <h2 class=" px-4 py-3 text-foreground text-xl text-center font-extrabold ">
        Trending
      </h2>
      <For
        each={tags()}
        fallback={<div class="px-4 py-3 text-sm">No hashtags found</div>}
      >
        {(tag, i) => {
          return <TrendEntry tag={tag} index={i() + 1} />;
        }}
      </For>
    </div>
  );
}

export function TrendingSkeleton() {
  return (
    <div class="rounded-2xl bg-highlight ">
      <h2 class=" px-4 py-3 text-foreground text-xl font-extrabold ">
        Trending
      </h2>
      <TrendEntrySkeleton />
      <TrendEntrySkeleton />
      <TrendEntrySkeleton />
    </div>
  );
}

function TrendEntrySkeleton() {
  return (
    <div class="px-4 py-3 hover:bg-highlightextra ">
      <div class="flex flex-col">
        <div class=" text-faint text-sm  ">1 · Trending</div>
        <div class=" text-foreground text-md font-bold mt-[1px]">#webdev</div>
        <div class="text-faint text-sm mt-1">12.1K posts</div>
      </div>
    </div>
  );
}
