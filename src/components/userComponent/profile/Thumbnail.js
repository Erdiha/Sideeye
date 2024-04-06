import Image from "next/image";

const Thumbnail = ({ imgSrc, type = "", user = "" }) => {
  const customStyle = () => {
    if (type === "chatlist") {
      return "w-10 h-10";
    } else if (type === "chat") {
      return "w-8 h-8";
    } else {
      return "w-14 h-14";
    }
  };
  return (
    <div
      className={`bg-slate-950 relative border rounded-full ${customStyle()}`}
    >
      {type !== "" && user === "current" && (
        <span className="bg-green-500 w-4 h-4 shadow-2xl absolute z-[99] rounded-full right-0"></span>
      )}
      <Image
        src={imgSrc}
        alt="profile"
        layout="fill"
        className="object-cover rounded-full"
      />
    </div>
  );
};

export default Thumbnail;
