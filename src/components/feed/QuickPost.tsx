import { openPostModal } from "../shared/PostModal";

export default function QuickPost() {
  return (
    <div onclick={openPostModal} class="px-4 py-3 flex cursor-pointer">
      <div class="h-10 w-10">
        <div class="bg-gray-400 rounded-full h-full w-full"></div>
      </div>
      <div class="flex w-full gap-3 items-center justify-normal">
        <div class="flex py-2 px-3 ml-3 grow shrink border-ui border rounded-full">
          <span class="text-faint">What is happening!?</span>
        </div>
        {/* svg placeholders */}
        <div class="h-6 w-6 bg-ui rounded-md "></div>
        <div class="h-6 w-6 bg-ui rounded-md "></div>
        <div class="h-6 w-6 bg-ui rounded-md "></div>
      </div>
    </div>
  );
}
