import MenuItem from "./MenuItem";
import PostButton from "~/components/shared/PostButton";
import UserProfile from "./UserProfile";

import HomeIcon from "~/components/shared/icons/HomeIcon";
import MessageIcon from "~/components/shared/icons/MessageIcon";
import BookmarkIcon from "~/components/shared/icons/BookmarkIcon";
import ProfileIcon from "~/components/shared/icons/ProfileIcon";
import WavesIcon from "~/components/shared/icons/WavesIcon";

import { createResource } from "solid-js";
import { getCurrentUser } from "~/lib/auth";

export default function Navbar() {
  const [user] = createResource(async () => {
    return await getCurrentUser();
  });
  // width 275px large
  return (
    <header class="w-[275px] h-screen flex flex-col justify-between">
      <div class="pt-6 px-2">
        <div class="ml-3 h-8 w-8">
          <WavesIcon />
        </div>
        <nav class="pb-3 flex flex-col items-start my-1">
          <MenuItem href={"/home"} text="Home">
            <HomeIcon />
          </MenuItem>
          <MenuItem href={"/messages"} text="Messages">
            <MessageIcon />
          </MenuItem>
          <MenuItem href={"/bookmarks"} text="Bookmarks">
            <BookmarkIcon
              fill="var(--color-background)"
              stroke={"var(--color-foreground)"}
            />
          </MenuItem>
          <MenuItem href={"/profile"} text="Profile">
            <ProfileIcon />
          </MenuItem>
        </nav>
        <div class="my-1 w-[90%] ">
          <PostButton></PostButton>
        </div>
      </div>
      <div class="mt-3 mb-3">
        <UserProfile user={user()}></UserProfile>
      </div>
    </header>
  );
}
