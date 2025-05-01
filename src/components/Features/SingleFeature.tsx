import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div
        className="wow fadeInUp group relative mb-12 rounded-lg bg-white/[0.05] p-8 hover:bg-white/[0.1]"
        data-wow-delay=".15s"
      >
        <div className="mb-8 flex items-center">
          <div className="mr-5 flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-white/[0.1] text-primary backdrop-blur-[5px] transition-all duration-300 group-hover:bg-primary group-hover:text-white">
            {icon}
          </div>
          <h3 className="text-xl font-normal text-white/80">{title}</h3>
        </div>
        <p className="text-base leading-relaxed text-gray-400/80">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
