"use client";
import { AnimatedGradientTextDemo } from "./animatedtext";
import './hero.css'

export const Hero = () => {
  return (
    <div className="hero flex flex-col items-center justify-center bg-black h-full text-white bg-[linear-gradient(to_bottom,#000,#1a420d_34%,#158900_65%,#87df72_82%)] py-[72px] sm:py-24 relative overflow-clip">
      {/* <div className="absolute h-[500px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#158900] bg-[radial-gradient(closest-side,#000_82%,#158900)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div> */}
      <div className="container relative py-30">
        <div className="flex justify-center gap-5 mt-10 py-10 ">
          <div className="inline-flex relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tightner text-center inline-flex">
              Empowering Global Trade<br />
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-xl text-center mt-10 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus non facilis vero iure repellat debitis reiciendis suscipit dicta officiis optio voluptas,
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
};
