import { A } from '@solidjs/router';
import { JSX } from 'solid-js';

export default function MenuItem({
  text,
  href,
  children,
}: {
  text: string;
  href: string;
  children: JSX.Element;
}) {
  return (
    <A
      href={href}
      class="p-3 rounded-full hover:bg-highlight transiton @[259px]/nav:block "
      activeClass=" fill-foreground"
    >
      <div class="flex h-8 w-auto">
        <div class="shrink-0 w-8 h-full">{children}</div>
        <div class="ml-5 mr-4 items-center justify-center hidden @[259px]/nav:block ">
          <span class="block text-xl font-semibold">{text}</span>
        </div>
      </div>
    </A>
  );
}
