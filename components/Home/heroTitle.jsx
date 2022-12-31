import Link from "next/link";

export default function HeroTitle() {
  return (
    <div className="absolute w-full h-full">
      <div className="flex flex-col items-center py-7 gap-5 md:gap-[1.5rem] h-full justify-center pb-[5rem]">
        <div
          id="algospace-version"
          className="algospace-version text-text-2 font-space text-[1rem] transition-all ease-in-out text-center"
        >
          v3.2.0
        </div>
        <div className="font-unica text-text-1 text-[5rem] md:text-[7.5rem] leading-[3.5rem]">
          <Link href="/">
            <span>AlgoSpace</span>
          </Link>
        </div>
        <div className="text-[#b9b9b9] font-space text-[1rem] text-center md:text-left">
          Algorithm Visualizer
        </div>
      </div>
    </div>
  );
}
