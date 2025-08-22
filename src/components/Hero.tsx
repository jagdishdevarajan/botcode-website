import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative">
      {/* Hero background */}
  <div className="absolute inset-0 z-0 bg-blue-500 h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 mix-blend-multiply"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 px-4 py-32 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="max-w-4xl mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            AI‑native software, delivered fast. 90‑day build trial for enterprises.
          </h1>
          <p className="max-w-3xl mb-10 text-xl text-blue-100">
            We design and ship custom, AI‑native systems with human‑in‑the‑loop assurance. Lower TCO, faster delivery, and full IP ownership—across industries.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Button asChild className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6">
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8 py-6">
              <Link href="/trial">Start 90‑Day Trial</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
