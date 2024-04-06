import ImageUI from "@/ui/ImageUI";
function StatsCard({ data }) {
  const { stats, photos } = data;
  const [first] = photos;
  const { height, weight, bust, waist, hips } = stats;
  const dimentions = [100, 100];
  return (
    <div className="w-40 h-40 flex justify-center items-center  relative overflow-hidden bg-black">
      <ImageUI
        alt="image"
        text={data.id}
        source={first.url}
        dimentions={dimentions}
      />
      <div className="absolute w-full h-full bottom-0 bg-gradient-to-t from-[--primary-dark] to-transparent flex flex-col justify-end items-start p-2">
        <span className="text-white  text-sm w-full flex gap-2">
          <article className="text-[13px] aspect-square border text-center rounded-full flex items-center justify-center p-1">
            {data.id}
          </article>
        </span>
      </div>
    </div>
  );
}

export default StatsCard;
