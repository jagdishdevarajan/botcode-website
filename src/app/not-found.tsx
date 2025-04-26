import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container max-w-lg mx-auto px-4 text-center">
          <h1 className="text-9xl font-bold text-blue-900 mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
          <p className="text-lg mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/">
              Return to Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
