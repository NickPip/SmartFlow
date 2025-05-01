import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20 lg:py-[120px]">
      <div className="container relative z-10">
        <div className="-mx-4 flex flex-wrap">
          <div
            className="mx-auto w-full px-4 text-center"
            style={{ maxWidth: "635px" }}
          >
            <h2 className="mb-4 text-3xl font-normal text-white/80 sm:text-4xl md:text-[40px] md:leading-[1.2]">
              What We Do
            </h2>
            <p className="text-base leading-relaxed text-gray-400/80 sm:leading-relaxed">
              We provide comprehensive digital solutions to help businesses grow
              and succeed in the digital age.
            </p>
          </div>
        </div>

        <div className="-mx-4 mt-16 flex flex-wrap justify-center">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>

      {/* Gradient Effects */}
      <div className="absolute left-0 top-0 -z-0 h-full w-full">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl"></div>
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-l from-primary/20 to-purple-500/20 blur-3xl"></div>
      </div>

      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </section>
  );
};

export default Features;
