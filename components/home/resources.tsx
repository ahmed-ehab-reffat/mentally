import Link from "next/link";

import {
  Book,
  Video,
  Headphones,
  Hospital,
  ArrowRight,
} from "@/components/ui/icons";
import Card from "@/components/ui/card";

export default function Resources() {
  return (
    <section id="resources">
      <div className="container mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {resources.map((feature, index) => (
            <div key={index}>
              <Link href={feature.href}>
                <Card className="h-full">
                  <div className="bg-white p-3 -ml-2 rounded-full w-16 h-16 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold my-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                  <div className="mt-4 text-secondry flex items-center text-sm font-semibold">
                    Learn more
                    <ArrowRight className="w-3 h-3 fill-secondry ml-1" />
                  </div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const resources: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: <Book className="w-8 h-8 fill-primary" />,
    title: "Articles",
    description: "Read expert articles and research papers",
    href: "/resources/articles",
  },
  {
    icon: <Video className="w-8 h-8 fill-primary" />,
    title: "Videos",
    description: "Watch educational and therapeutic videos",
    href: "/resources/videos",
  },
  {
    icon: <Headphones className="w-8 h-8 fill-primary" />,
    title: "Podcasts",
    description: "Listen to mental health podcasts",
    href: "/resources/podcasts",
  },
  {
    icon: <Hospital className="w-8 h-8 fill-primary" />,
    title: "Mental Health Centers",
    description: "Find mental health centers and hospitals near you",
    href: "/resources/centers",
  },
];
