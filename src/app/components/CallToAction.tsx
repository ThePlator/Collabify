'use client';

export default function CallToAction() {
  return (
    <section className="py-20 px-4 bg-[#3F1D9B]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Ready to take the next step in your career?
        </h2>
        <p className="text-xl text-[#F4F0FF] mb-8">
          Join thousands of users building their future with Collabify.
        </p>
        <button className="px-8 py-4 bg-white text-[#3F1D9B] rounded-md font-semibold text-lg transition-all duration-200 hover:bg-[#F4F0FF] hover:scale-105 shadow-lg border border-[#D6D6E7]">
          Get Started for Free
        </button>
      </div>
    </section>
  );
}
