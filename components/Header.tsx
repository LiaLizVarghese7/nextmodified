import { FunctionComponent } from "react";
import Link from "next/link";

const Header: FunctionComponent = () => {
    return (
      <div className="">
        <div className="bg-violet-500 h-[100px] flex flex-col  items-center justify-evenly text-black font-mono font-black ">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold">
            EXPENSE TRACKER
          </h1>
          <div className="flex flex-row gap-x-4 xl:gap-x-8 sm:gap-x-6">
            <button className="bg-slate-100 rounded-xl border-none xl:w-[100px] sm:w-[80px] w-[60px]">
              <Link
                href="/"
                className="no-underline text-black font-mono font-semibold"
              >
                <span className="text-sm sm:text-lg xl:text-2xl">HOME</span>
              </Link>
            </button>
            {/* <button className="bg-slate-100 rounded-xl border-none xl:w-[100px] sm:w-[80px] w-[60px]">
              <Link
                href="/all"
                className="no-underline text-black font-mono font-semibold"
              >
                <span className="text-sm sm:text-lg xl:text-2xl">ALL EXPENSES</span>
              </Link>
            </button> */}
            <button className="bg-slate-100 rounded-xl border-none xl:w-[100px] sm:w-[80px] w-[60px]">
              <Link
                href="/create"
                className="no-underline text-black font-mono font-semibold"
              >
                <span className="text-sm sm:text-lg xl:text-2xl">CREATE</span>
              </Link>
            </button>
            {/* <button className="bg-slate-100 rounded-xl border-none xl:w-[100px] sm:w-[80px] w-[60px]">
              <Link
                href="/"
                className="no-underline text-black font-mono font-semibold"
              >
                <span className="text-sm sm:text-lg xl:text-2xl">FILTER</span>
              </Link>
            </button> */}
          </div>
        </div>
      </div>
    );
  };
  
  export default Header;