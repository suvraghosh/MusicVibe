import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.1] md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="red"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-slate-500">
          Master the art of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-50 max-w-lg mx-auto">
          Dive into out comprehensive music courses and transform and transform
          your musical journey today. Whether you're a beginner or looking to
          refine your skills, join us to unloack your true potential.
        </p>
        <div className="mt-4">
            <Link href={"/courses"}>
                <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-600">Explore Courses</Button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
