import { Book, Video, Headphones, Hospital } from "@/components/ui/icons";
import CardsSection, { type Content } from "./cardsSection";

export default function Resources() {
  return <CardsSection title="resources" content={resources} />;
}

const resources: Content = [
  {
    icon: <Book />,
    title: "articles",
    href: "/resources/articles",
  },
  {
    icon: <Video />,
    title: "videos",
    href: "/resources/videos",
  },
  {
    icon: <Headphones />,
    title: "podcasts",
    href: "/resources/podcasts",
  },
  {
    icon: <Hospital />,
    title: "mental health centers",
    href: "/resources/centers",
  },
];
