import { Button } from "./ui/button";
import { LottieAnimation } from "./LottieAnimation";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Be Independent
            </span>{" "}
            And Stay ahead
          </h1>{" "}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          We help you to build your professional career and become an independent Freelancer. 
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a href="#courses">
            <Button className="w-full md:w-1/3">Explore Courses</Button>
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <LottieAnimation />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};