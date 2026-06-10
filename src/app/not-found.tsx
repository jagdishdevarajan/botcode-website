import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bc-dark">
      <Header />
      <main className="relative flex flex-grow items-center justify-center overflow-hidden bg-bc-canvas py-32">
        <div className="pointer-events-none absolute inset-0 bc-grid opacity-50" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 bc-glow" />
        <div className="relative mx-auto max-w-lg px-6 text-center">
          <div className="font-display bc-gradient-text text-8xl font-bold sm:text-9xl">404</div>
          <h2 className="font-display mt-4 text-2xl font-semibold text-bc-ink">Page not found</h2>
          <p className="mt-4 leading-relaxed text-bc-muted">
            Sorry, the page you are looking for doesn&rsquo;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-bc-accent px-7 py-3.5 text-[0.95rem] font-semibold text-black transition-all hover:shadow-[0_0_40px_-6px_rgba(197,249,85,0.55)]"
          >
            Return home
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
