import { Ripple } from '~/types';
import Reactions from './Reactions';
import ParentChain from './ParentChain';
import WriteComment from './WriteComment';
import UserWrapper from '../user/UserWrapper';
import PostContent from './PostContent';
import UserPfp from '../user/UserPfp';

export default function MainRipple(props: {
  post: Ripple | undefined | null;
  addComment: (comment: string, id: string) => void;
}) {
  return (
    <div class="px-4 border-b border-ui">
      <div class="pt-3 pb-2"></div>
      {props.post
        ? props.post.ancestors && (
            <ParentChain ancestors={props.post.ancestors} />
          )
        : null}
      <article class="flex flex-col w-full">
        <div class=" w-full flex-col gap-3">
          <div class="flex gap-2 items-center text-md">
            <div class="w-10 aspect-square rounded-full">
              <UserPfp pfp={props.post?.pfp} />
            </div>
            <div class="flex flex-col">
              <div class="mr-1">
                <UserWrapper handle={props.post ? props.post.authorHandle : ''}>
                  <span class="font-bold text-foreground">
                    {props.post ? props.post.authorName : ''}
                  </span>
                </UserWrapper>
              </div>
              <div class="flex text-faint">
                <UserWrapper handle={props.post ? props.post.authorHandle : ''}>
                  <span>{`@${props.post ? props.post.authorHandle : ''}`}</span>
                </UserWrapper>
              </div>
            </div>
          </div>
          <div class="flex text-md flex-col w-full">
            <p class="mt-2">
              {props.post ? <PostContent content={props.post.content} /> : null}
            </p>
          </div>
        </div>
        <div class="my-4">
          <span class="text-faint ">
            {props.post
              ? props.post.createdAt.toLocaleTimeString('default', {
                  hour: 'numeric',
                  minute: '2-digit',
                })
              : ''}{' '}
            <span>⋅</span>{' '}
            {`${
              props.post
                ? props.post.createdAt.toLocaleString('default', {
                    month: 'short',
                  })
                : ''
            } ${props.post ? props.post.createdAt.getDate() : ''}, ${
              props.post ? props.post.createdAt.getFullYear() : ''
            }`}
          </span>
        </div>
      </article>
      <div class="border-b border-ui" />
      <div class="my-4 w-full">
        <Reactions post={props.post} />
      </div>
      <div class="border-b border-ui" />
      <WriteComment
        parentid={props.post ? props.post.id : ''}
        replyTo={props.post ? props.post.authorHandle : ''}
        addComment={props.addComment}
      />
    </div>
  );
}
