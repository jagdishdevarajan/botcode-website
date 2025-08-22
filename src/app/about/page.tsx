import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">About BotCode</h1>
            <p className="text-xl">AI‑native software development for global enterprises</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our History</h2>

              <div className="space-y-6 mb-12">
                <p className="text-lg">
                  BotCode was founded at a time when conversational AI was barely an idea. As one of the first bot-building companies in India,
                  we've built platforms across diverse verticals — from education and wellness to enterprise automation —
                  giving us deep cross‑industry experience and a position of strength as we now focus fully on AI‑native systems across industries.
                </p>

                <p className="text-lg">
                  BotCode was started in 2007 and specializes in delivering customized IT solutions for international clients. BotCode counts among its customers some of the world's most respected innovators in travel, retail and social media. BotCode also provides web harvesting solutions to small and medium sized firms as well as promising growth-stage companies pursuing data-driven business models.
                </p>

                <p className="text-lg">
                  BotCode started as a Data Bot company in 2005, delivering large‑scale web data operations for Fortune 500 brands during the Web 2.0 era. The team ran services until 2016 building numerous front ends for major US brands.
                </p>

                <p className="text-lg">
                  In 2016, BotCode along with additional partners created a Social CRM platform for WeChat enabling marquee customers leverage WeChat to reach out to the Chinese audience.
                </p>

                <p className="text-lg">
                  BotCode is now transformed into a Bot and Data company with AI at the heart of all its initiatives.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg mb-6">
                  To leverage artificial intelligence and machine learning to revolutionize healthcare delivery, making it more accessible, efficient, and effective for both providers and patients.
                </p>
                <p className="text-lg">
                  As expectations in business demand increasing efficiency and effectiveness, BotCode's business model is its inherent strength. We utilize the sharpest talent from where it makes the best economic sense, allowing for us to serve you with the least acceptable risk possible. The large majority of our revenue is generated through our existing customers, showing our commitment to long-term client relationships.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6">Strategic Focus</h2>

              <div className="space-y-6 mb-12">
                <div className="p-5 border-l-4 border-blue-500 bg-blue-50">
                  <h3 className="text-xl font-bold mb-2">AXONS</h3>
                  <p>Medical algorithms to decipher disease will democratize AI at the point of healthcare delivery</p>
                </div>

                <div className="p-5 border-l-4 border-green-500 bg-green-50">
                  <h3 className="text-xl font-bold mb-2">FirstClinic</h3>
                  <p>The first point of medical care to enable patient safety and convenience with their own medical data that integrates with AXONS</p>
                </div>

                
              </div>

        {/* Founder section intentionally removed to keep enterprise focus */}

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                <div className="space-y-2">
                  <p className="text-lg"><strong>Address:</strong> DevaDropa, No 7, Krishna Street, Nungambakkam, Chennai 600 034, India</p>
                  <p className="text-lg"><strong>Email:</strong> admin@botcode.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
