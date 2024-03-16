import Image from "next/image";

const Thumbnail = ({ text, imgSrc }) => {
  return (
    <div className="rounded-2xl w-14 h-14 bg-slate-950 relative overflow-hidden">
      <Image
        src={imgSrc}
        alt="profile"
        fill
        className="rounded-2xl object-cover"
      />
    </div>
  );
};

export default Thumbnail;
