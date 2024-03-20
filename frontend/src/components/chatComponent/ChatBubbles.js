import Thumbnail from "../userComponent/profile/Thumbnail";

export function ChatBubbleCurrentUser({ text, imgSrc }) {
  return (
    <>
      <div className="chatBubbleUser w-fit max-w-[70%] h-fit p-2 flex justify-start bg-[--dark-teal] ml-auto relative border-2 border-[--vintage-teal-50] rounded-l-md pr-5">
        <p className="text-white z-50  text-sm flex justify-start items-start">
          {text}
        </p>
      </div>
      <Thumbnail type="chat" imgSrc={imgSrc} />
    </>
  );
}

export function ChatBubbleFriend({ text, imgSrc }) {
  return (
    <>
      <Thumbnail type="chat" imgSrc={imgSrc} />
      <div className="chatBubbleFriend  max-w-[70%] h-fit w-fit p-2 flex justify-end  bg-[--primary-dark-50]  mr-auto relative z-50 border-2 border-[--primary-dark-25] rounded-r-md min-w-28 min-h-10 pl-6">
        <text className="text-white z-50   text-sm  w-full h-full flex justify-start items-start">
          {text}
        </text>
      </div>
    </>
  );
}
