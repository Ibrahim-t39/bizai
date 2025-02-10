/* eslint-disable react/no-unescaped-entities, @next/next/no-img-element */

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main className="flex-1 bg-gradient-to-b from-gray-950 via-slate-950 to-gray-950 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500">
            About Us
          </h1>
          <p className="text-xl text-gray-300">
            Empowering businesses with AI-driven tools to streamline operations, enhance customer experience, and boost growth.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-400">
            Our goal is to make advanced technology accessible to every business. We leverage AI and automation to simplify workflows,
            improve customer engagement, and drive success.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-100 mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-100 mb-6">Join Us</h2>
        <p className="text-xl text-gray-400 mb-8">
          Ready to embrace the future of business automation? Let's make it happen together.
        </p>
        <Button
          asChild
          size="lg"
          className="px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white rounded-full text-lg transition-all duration-300 hover:scale-105"
        >
          <a href="/contact">Get in Touch</a>
        </Button>
      </section>
    </main>
  );
}

/* Team Data */
const teamMembers: TeamMemberProps[] = [
  {
    name: "Daniel Lambo",
    role: "Founder",
    image: "/images/daniel.jpg",
  },
  {
    name: "Thabo Ibrahim Traore",
    role: "Founder",
    image: "/images/thabo.jpg",
  },
  {
    name: "Asia Harris",
    role: "Founder",
    image: "/images/asia.png",
  },
];

/* Team Card Component */
interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

function TeamCard({ name, role, image }: TeamMemberProps) {
  return (
    <div className="text-center bg-gray-900 rounded-lg p-6 hover:shadow-lg hover:scale-105 transform transition duration-300">
      {/* Profile Image */}
      <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-400">
        <Image src={image} alt={name} width={200} height={200} className="object-cover" />
      </div>

      {/* Name & Role */}
      <h3 className="text-xl font-semibold text-white mt-4">{name}</h3>
      <p className="text-gray-400">{role}</p>
    </div>
  );
}
