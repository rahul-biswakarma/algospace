import Link from "next/link";
import Image from "next/image";

export default function NavButtons() {
  return (
    <div
      id="nav-button-container"
      className="absolute w-full bottom-0 flex flex-col p-[0.4rem] bg-bg-1"
    >
      <Link href="https://github.com/rahul-biswakarma/algospace" passHref>
        <a target="_blank">
          <div className="w-full flex justify-center items-center uppercase font-space gap-2 text-green bg-bg-2 border-2 border-border-1 py-[15px] hover:cursor-pointer">
            <Image
              src="/assets/github.svg"
              alt="github svg icon"
              width="20"
              height="20"
            />
            GITHUB
          </div>
        </a>
      </Link>
    </div>
  );
}
