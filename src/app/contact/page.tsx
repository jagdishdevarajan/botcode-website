import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get in touch with our team</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Your Name
                      </label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Enter subject" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Enter your message"
                        className="min-h-[150px]"
                      />
                    </div>
                    <Button type="submit" className="w-full md:w-auto bg-blue-700 hover:bg-blue-800">
                      Send Message
                    </Button>
                  </form>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">Office Address</h3>
                      <p className="text-gray-600">
                        DevaDropa<br />
                        No 7, Krishna Street,<br />
                        Nungambakkam<br />
                        Chennai 600 034<br />
                        India
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Email</h3>
                      <a
                        href="mailto:admin@botcode.com"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        admin@botcode.com
                      </a>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2">Connect With Us</h3>
                      <div className="flex space-x-4 mt-2">
                        <Link
                          href="https://twitter.com"
                          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors"
                          target="_blank"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                          </svg>
                        </Link>
                        <Link
                          href="https://linkedin.com"
                          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full transition-colors"
                          target="_blank"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
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
