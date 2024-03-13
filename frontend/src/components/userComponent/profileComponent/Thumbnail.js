import Image from "next/image";
import ReactDOMServer from "react-dom/server";

export const createThumbnailMarker = (text, imgSrc) => {
  const thumbnail = <Thumbnail text={text} imgSrc={imgSrc} />;
  return ReactDOMServer.renderToString(thumbnail);
};

const Thumbnail = ({ text, imgSrc }) => {
  return (
    <div className="rounded-full w-14 h-14 bg-slate-950 relative overflow-hidden">
      <Image
        src={imgSrc}
        alt="profile"
        fill
        className="rounded-full object-cover"
      />
      <div
        className={`absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 p-1 w-full text-center ${
          text === "Erdi"
            ? "border-2 border-green-300 bg-green-600"
            : " bg-black/60"
        }`}
      >
        <p className="text-[10px] font-semibold text-gray-100">{text}</p>
      </div>
    </div>
  );
};

export default Thumbnail;
