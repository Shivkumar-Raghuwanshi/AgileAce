import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});
const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-green-100 text-green-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          Number one task managment
        </div>
        <h1 className="text-2xl md:text-4xl text-center text-neutral-800 mb-6">
          AgileAce jointly manage all things
        </h1>
        <div className="text-3xl md:text-5xl bg-gradient-to-r from-green-600 to-slate-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
        Carry on with work
        </div>
      </div>
      <div
        className={cn(
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
          textFont.className
        )}
      >
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is unique -
        accomplish it all with AgileAce.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get AgileAce for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
