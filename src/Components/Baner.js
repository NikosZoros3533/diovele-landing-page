export default function Banner() {
  return (
    <>
      <header
        className="flex  items-center flex-col sticky top-0 opacity-0  p-7 animate-fadeInTop h-min w-full"
        style={{ animationDelay: "2s" }}
      >
        <p className="text-bordo drop-shadow-lg text-6xl font-bold">DIO VELE</p>
        <p className="text-bordo/90 drop-shadow-lg text-2xl font-bold">
          Photographer
        </p>
      </header>
    </>
  );
}
