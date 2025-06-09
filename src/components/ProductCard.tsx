import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
  logoImage?: string;
  slug: string;
}

export function ProductCard({ title, description, icon, logoImage, slug }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        {logoImage ? (
          <div className="w-full h-40 relative mb-3 flex items-center justify-center">
            <Image
              src={logoImage}
              alt={`${title} logo`}
              width={180}
              height={120}
              style={{ objectFit: "contain" }}
            />
          </div>
        ) : (
          <div className="mb-3 text-3xl text-blue-600">{icon}</div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        {slug === "healthpilot" ? (
          <Button variant="outline" asChild>
            <a href="https://www.healthpilot.ai" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </Button>
        ) : slug === "schoolskies" ? (
          <Button variant="outline" asChild>
            <a href="https://www.schoolskies.com" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </Button>
        ) : slug === "first-clinic" ? (
          <Button variant="outline" asChild>
            <a href="https://www.firstclinic.in" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </Button>
        ) : slug === "iamai-health" ? (
          <Button variant="outline" asChild>
            <a href="https://iamai.health" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </Button>
        ) : (
          <Button variant="outline" asChild>
            <Link href="/contact">
              Learn More
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
