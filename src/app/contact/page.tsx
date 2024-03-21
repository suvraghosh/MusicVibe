"use client";

import { Meteors } from "@/components/ui/meteors";

function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl md:text-6xl font-bold text-center mt-20">Contact Us</h2>
      <p className="text-base text-wrap md:max-w-[50%] text-center my-5">
        We are here to help with any questions about our courses,programs,or
        events. Reach out and let us know how we can assist you in your musical
        journey.
      </p>
      <input className="md:w-[45%] p-3 mt-2 bg-[#070F2B]" type="text" placeholder="Your email address"/>
      <textarea className="resize-none p-3 md:w-[45%] my-4 bg-[#070F2B]" name="" cols={20} rows={7} placeholder="Your message"/>
      <button className="bg-gradient-to-r from-[#124A73] to-[#EE66C2] hover:from-[#0D8876] hover:to-[#9999F7] p-3 rounded-lg" type="submit">Send Message</button>
      <Meteors number={50} />
    </div>
  );
}

export default page;
