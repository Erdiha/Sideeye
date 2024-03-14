function StatsCard({ stats }) {
  const { height, weight, bust, waist, hip, shoe, hair } = stats;
  return (
    <div className="w-full h-full flex bg-slate-950 justify-center items-center px-2 rounded-lg">
      <p className="text-[--primary-text]">{`${height}, ${weight}, ${bust},${waist}, ${hip}`}</p>
    </div>
  );
}

export default StatsCard;
