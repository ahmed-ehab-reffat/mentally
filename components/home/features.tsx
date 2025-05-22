import {
  Brain,
  Users,
  Lightbulb,
  ClipboardQuestion,
} from "@/components/ui/icons";
import CardsSection, { type Content } from "./cardsSection";

export default function Features() {
  return <CardsSection title="features" content={features} />;
}
const features: Content = [
  {
    icon: <Brain />,
    title: "AI-powered analysis",
    href: "/features/ai-analysis",
  },
  {
    icon: <Users />,
    title: "group therapy",
    href: "/features/group-therapy",
  },
  {
    icon: <Lightbulb />,
    title: "personalized insights",
    href: "/features/insights",
  },
  {
    icon: <ClipboardQuestion />,
    title: "questionnaire",
    href: "/features/questionnaire",
  },
];
