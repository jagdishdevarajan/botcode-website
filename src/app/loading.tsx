import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Loading() {
  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container max-w-lg mx-auto px-4 text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <h2 className="text-2xl font-bold mt-6">Loading...</h2>
          <p className="text-lg mt-2 text-gray-600">
            Please wait while we prepare the content.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
