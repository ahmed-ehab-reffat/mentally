import Link from "next/link";
import { Book, Video, Headphones, Hospital } from "../ui/icons";

export default function Resources() {
  return (
    <section id="resources" className="">
      <div className="container mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Our Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((feature, index) => (
            <div key={index}>
              <Link href={feature.href}>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                  <div className="mt-4 text-teal-400 flex items-center text-sm font-medium">
                    Learn more
                  </div>
                </div>
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
    icon: <Book className="w-8 h-8 align-[-0.125em] fill-primary" />,
    title: "Articles",
    description: "Read expert articles and research papers",
    href: "/resources/articles",
  },
  {
    icon: <Video className="w-8 h-8 align-[-0.125em] fill-primary" />,
    title: "Videos",
    description: "Watch educational and therapeutic videos",
    href: "/resources/videos",
  },
  {
    icon: <Headphones className="w-8 h-8 align-[-0.125em] fill-primary" />,
    title: "Podcasts",
    description: "Listen to mental health podcasts",
    href: "/resources/podcasts",
  },
  {
    icon: <Hospital className="w-8 h-8 align-[-0.125em] fill-primary" />,
    title: "Mental Health Centers",
    description: "Find mental health centers and hospitals near you",
    href: "/resources/centers",
  },
];
