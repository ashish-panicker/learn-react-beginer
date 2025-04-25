import React from 'react';

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder & CEO',
    image: 'https://dummyimage.com/150',
    bio: 'Rajesh brings 10+ years of tech and education experience.',
  },
  {
    name: 'Gokul Raj',
    role: 'Head of Infrastructure',
    image: 'https://dummyimage.com/150',
    bio: 'Gokul leads cloud and security initiatives.',
  },
  {
    name: 'Priya Singh',
    role: 'Product Designer',
    image: 'https://dummyimage.com/150',
    bio: 'Priya crafts user-centric designs for delightful experiences.',
  },
];

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800 px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          We are a team of passionate technologists, designers, and educators committed to empowering learning through technology.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To make quality tech education accessible and practical, bridging the gap between academia and industry through real-world projects and mentorship.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            We envision a future where every learner is equipped with the skills and confidence to thrive in the digital world.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">Innovation</h3>
            <p>We believe in creating impactful solutions through creativity and experimentation.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">Integrity</h3>
            <p>We uphold honesty and transparency in everything we do, building trust with our community.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">Empowerment</h3>
            <p>We empower learners and teams to take charge of their growth and development.</p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white border rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition duration-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
