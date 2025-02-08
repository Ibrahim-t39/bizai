import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <main className="flex-1 bg-gradient-to-b from-gray-950 via-slate-950 to-gray-950 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-400">
            We'd love to hear from you. Whether you have a question, need assistance, or want to explore a partnership—our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6">
        <div className="container max-w-5xl mx-auto grid gap-10 md:grid-cols-3 text-center">
          {contactInfo.map((info, index) => (
            <ContactCard key={index} {...info} />
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-100 text-center mb-6">Send Us a Message</h2>
          <p className="text-lg text-gray-400 text-center mb-8">
            Fill out the form below, and our team will respond as soon as possible.
          </p>
          <form className="space-y-6">
            <InputField label="Full Name" type="text" placeholder="Enter your name" />
            <InputField label="Email Address" type="email" placeholder="Enter your email" />
            <InputField label="Message" type="textarea" placeholder="Write your message..." />
            <Button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-100 mb-4">Follow Us</h2>
        <p className="text-gray-400 mb-6">Stay connected and follow our latest updates on social media.</p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-3xl transition-all hover:text-violet-400"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

/* Contact Information Data */
const contactInfo: ContactCardProps[] = [
  {
    icon: "📧",
    title: "Email Us",
    detail: "support@yourbusiness.com",
    link: "mailto:support@yourbusiness.com",
  },
  {
    icon: "📞",
    title: "Call Us",
    detail: "+1 (123) 456-7890",
    link: "tel:+11234567890",
  },
  {
    icon: "📍",
    title: "Visit Us",
    detail: "123 Business St, City, Country",
  },
];

/* Contact Card Component */
interface ContactCardProps {
  icon: string;
  title: string;
  detail: string;
  link?: string;
}

function ContactCard({ icon, title, detail, link }: ContactCardProps) {
  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 border border-gray-800 rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      <span className="text-4xl">{icon}</span>
      <h3 className="text-xl font-semibold text-gray-100 mt-4">{title}</h3>
      {link ? (
        <a href={link} className="text-violet-400 hover:underline block mt-2">
          {detail}
        </a>
      ) : (
        <p className="text-gray-400 mt-2">{detail}</p>
      )}
    </div>
  );
}

/* Input Field Component */
interface InputFieldProps {
  label: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
}

function InputField({ label, type, placeholder }: InputFieldProps) {
  return (
    <div>
      <label className="block text-gray-300 text-lg mb-2">{label}</label>
      {type === "textarea" ? (
        <textarea
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-violet-500"
          placeholder={placeholder}
          rows={4}
        />
      ) : (
        <input
          type={type}
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-violet-500"
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

/* Social Media Links */
const socialLinks = [
  { icon: "🐦", link: "https://twitter.com" }, // Twitter
  { icon: "📘", link: "https://facebook.com" }, // Facebook
  { icon: "📸", link: "https://instagram.com" }, // Instagram
  { icon: "🔗", link: "https://linkedin.com" }, // LinkedIn
];
