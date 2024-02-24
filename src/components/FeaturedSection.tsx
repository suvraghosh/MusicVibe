"use client";

import Link from "next/link";
import coursedata from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedSection() {
  const featuredCourses = coursedata.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gradient-to-r from-[#191919] to-[#070F2B]">
      <div>
        <div className="text-center">
          <h2 className="text-2xl text-[#E9F6FF]">FEATURUED COURSES</h2>
          <p className="text-sm mt-2">Learn With the Best</p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="dark:bg-zinc-900 bg-white flex flex-col rounded-[22px] overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 p-3">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`} className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-1 text-white">Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="bg-gradient-to-r from-[#2B2A4C] to-blue-500 hover:from-[#332941] hover:to-yellow-500 p-3 rounded-lg"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedSection;
