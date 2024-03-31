import { type Ripple } from "~/types";
import Reactions from "./Reactions";

export default function Ripple(props: { post: Ripple }) {
  const post = props.post;
  // if (!post) {
  //   return <div></div>;
  // }
  const {
    id,
    authorName,
    authorHandle,
    pfp,
    createdAt,
    updatedAt,
    content,
    likes,
    hasLiked,
    reposts,
    comments,
  } = post;

  return (
    <article class="px-4 flex flex-col w-full border-solid border-b border-ui">
      {/* retweeted by.. */}
      <div class="pt-3 pb-2">
        {/* <div class="flex gap-3 align-center">
            <div class=" basis-10 flex justify-end ">
              <div class="bg-gray-300 rounded-sm h-4 w-4"></div>
            </div>
            <div class="flex align-center">
              <span class="font-bold text-faint text-[13px] leading-4 ">
                User reposted
              </span>
            </div>
          </div> */}
      </div>
      {/* content */}
      <div class="flex gap-3 w-full">
        <div class="basis-10">
          <div class="h-10 w-10 bg-gray-300 rounded-full"></div>
        </div>
        <div class="flex text-md flex-col w-full">
          {/* Post Meta */}
          <div class="flex flex-row">
            <div class="mr-1">
              <span class="font-bold text-foreground">{authorName}</span>
            </div>
            <div class="flex text-faint">
              <div>
                <span>{`@${authorHandle}`}</span>
              </div>
              <div class="px-1">
                <span>⋅</span>
              </div>
              <div>
                <span>{createdAt.toUTCString()}</span>
              </div>
            </div>
          </div>
          {/* Post Content */}
          <div>{content}</div>
          {/* Post Reactions */}
          <div class="mb-3 w-full my-3">
            <Reactions post={post} />
          </div>
        </div>
      </div>
    </article>
  );
}
