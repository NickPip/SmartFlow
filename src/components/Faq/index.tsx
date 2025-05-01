import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-[#0B1120] pb-8 pt-20 lg:pb-[50px] lg:pt-[120px]">
      {/* Gradient Effects */}
      <div className="absolute left-0 top-0 -z-0 h-full w-full">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r from-primary/5 to-purple-500/5 blur-3xl"></div>
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-l from-primary/5 to-purple-500/5 blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="mx-auto max-w-[570px] text-center">
          <h2 className="mb-3 text-3xl font-bold text-[#4B6BFB] sm:text-4xl md:text-[40px]">
            Development FAQ
          </h2>
          <p className="text-base text-gray-200 md:text-lg">
            Common questions about our development process, technologies, and
            solutions.
          </p>
        </div>

        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="What technologies do you use for development?"
              answer="We primarily use Next.js, React, and TypeScript for frontend development, along with Tailwind CSS for styling. Our backend solutions utilize Node.js and various cloud services depending on project requirements."
            />
            <SingleFaq
              question="How do you ensure code quality?"
              answer="We maintain high code quality through automated testing, continuous integration, code reviews, and following best practices. We use ESLint for code linting, Jest for testing, and maintain comprehensive documentation."
            />
            <SingleFaq
              question="What's your development process?"
              answer="We follow an agile development methodology with iterative sprints. Each project starts with thorough planning and architecture design, followed by development sprints with regular client feedback and continuous deployment."
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              question="How do you handle project deployment?"
              answer="We use modern CI/CD pipelines with automated testing and deployment. Our projects are typically deployed on cloud platforms like Vercel, AWS, or Google Cloud, ensuring high availability and scalability."
            />
            <SingleFaq
              question="Can you integrate with existing systems?"
              answer="Yes, we specialize in system integration. We can work with your existing APIs, databases, and third-party services, ensuring seamless communication between different components of your infrastructure."
            />
            <SingleFaq
              question="What about security and performance?"
              answer="Security and performance are top priorities. We implement best practices for web security, use HTTPS, follow OWASP guidelines, and regularly audit our code. Performance is optimized through code splitting, caching, and modern optimization techniques."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
