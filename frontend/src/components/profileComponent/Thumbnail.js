import Image from "next/image";
import ReactDOMServer from "react-dom/server";

export const createThumbnailMarker = (text, imgSrc) => {
  const thumbnail = <Thumbnail text={text} imgSrc={imgSrc} />;
  return ReactDOMServer.renderToString(thumbnail);
};

const Thumbnail = ({ text, imgSrc }) => {
  return (
    <div className="rounded-full w-20 h-20 bg-slate-950 relative overflow-hidden">
      <Image
        src={imgSrc}
        alt="profile"
        fill
        className="rounded-full object-cover"
      />
      <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 bg-black/60 p-1 w-full text-center rounded-full">
        <p className="text-sm font-semibold text-gray-100">{text}</p>
      </div>
    </div>
  );
};

export default Thumbnail;
