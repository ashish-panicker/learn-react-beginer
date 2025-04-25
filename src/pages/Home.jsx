import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-50  px-6 py-12 text-gray-800">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Welcome to EasySkillUp</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Empowering learners and professionals with practical, hands-on tech
          education and mentorship.
        </p>
        <a
          href="/about"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-300"
        >
          Learn More About Us
        </a>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Project-Based Learning</h3>
          <p>
            Learn by building real-world applications with industry-focused
            mentors.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Tech Community</h3>
          <p>
            Join a growing network of tech professionals and collaborate
            globally.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Mentorship & Guidance</h3>
          <p>
            Get personalized feedback, interview prep, and career advice from
            experts.
          </p>
        </div>
      </section>
    </div>
  );
}
