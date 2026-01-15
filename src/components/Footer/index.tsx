import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#0B1120] py-8">
      {/* Gradient Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] animate-[pulse_10s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-primary/5 to-purple-500/5 blur-3xl"></div>
      </div>

      <div className="container px-4">
        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <p className="animate-fade-in-up text-sm text-gray-400">
            © {new Date().getFullYear()} ATOMIC IMPACT. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <Link
              href="https://www.facebook.com/profile.php?id=61585386824239"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-in-up text-gray-400 transition-all duration-300 [animation-delay:200ms] hover:scale-110 hover:text-[#1877F2]"
              aria-label="Facebook"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/atomic_impact_tech/#"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-in-up text-gray-400 transition-all duration-300 [animation-delay:400ms] hover:scale-110 hover:text-[#E4405F]"
              aria-label="Instagram"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A107611402&keywords=atomic%20impact&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=655d5faf-82f8-470f-820b-2fd31503a795&sid=YeP&spellCorrectionEnabled=true"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-in-up text-gray-400 transition-all duration-300 [animation-delay:600ms] hover:scale-110 hover:text-[#0077B5]"
              aria-label="LinkedIn"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
