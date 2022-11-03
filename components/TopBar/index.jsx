export default function TopBar() {
  return (
    <div className="relative w-full h-[5px] bg-border-1">
      <div className="absolute h-full bg-green-bg-2 w-[0.5rem]"></div>
      <div className="absolute h-full bg-green-bg-2 w-[8vw] left-[2vw]"></div>
      <div className="absolute h-full bg-green-bg-2 w-[0.5rem] left-[10.4vw]"></div>
      <div className="absolute h-full bg-green-bg-2 w-[0.5rem] right-[21vw]"></div>
      <div className="absolute h-full bg-green-bg-2 w-[20vw] right-0"></div>
    </div>
  );
}
