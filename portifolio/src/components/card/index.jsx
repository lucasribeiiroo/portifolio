const Card = ({ item }) => {
  const { title, icon, description } = item;
  return (
    <div
      className={
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20"
      }
    >
      <div className="relative z-50">
        <div className="p-4">
          <div
            className={
              "flex  place-items-center text-zinc-100 font-bold tracking-wide mt-4 text-xl"
            }
          >
            <h4>{title}</h4>
            <span className="ml-3">{icon}</span>
          </div>
          <p
            className={
              "mt-8 justify-center place-items-center text-zinc-400 tracking-wide leading-relaxed text-sm"
            }
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
