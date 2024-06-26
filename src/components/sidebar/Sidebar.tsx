import { Suspense } from "solid-js";
import Trending, { TrendingSkeleton } from "./Trending";
import FollowSuggestions, {
  FollowSuggestionsSkeleton,
} from "./FollowSuggestions";
import Search from "./Search";
import type { User } from "~/types";

export default function Sidebar() {
  return (
    <div class="flex flex-col gap-4 sticky top-0 border-l border-ui">
      <Search />
      <Suspense fallback={<FollowSuggestionsSkeleton />}>
        <FollowSuggestions />
      </Suspense>
      <Suspense fallback={<TrendingSkeleton />}>
        <Trending />
      </Suspense>
    </div>
  );
}
