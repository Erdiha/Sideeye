import Image from "next/image";

const Thumbnail = ({ text, imgSrc, type, user = "" }) => {
  return (
    <div
      className={` bg-slate-950 relative border rounded-full ${
        type === "chat" ? " w-8 h-8" : " w-14 h-14"
      }`}
    >
      {type !== "chat" && user === "current" && (
        <span
          className={`${
            user !== "current" ? "bg-white" : "bg-green-500"
          } bg-green-500 w-4 h-4 shadow-2xl absolute z-[99] rounded-full right-0 `}
        ></span>
      )}
      <Image
        src={imgSrc}
        alt="profile"
        fill
        className="object-cover rounded-full"
      />
    </div>
  );
};

export default Thumbnail;
