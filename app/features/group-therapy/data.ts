export const upcomingSessions: {
  id: string;
  title: string;
  date: string;
  spots: number;
  description: string;
}[] = [
  {
    id: "1",
    title: "Anxiety Support Group",
    date: "Every Monday at 7:00 PM - 8:30 PM",
    spots: 5,
    description:
      "A supportive environment to discuss and learn coping strategies for anxiety.",
  },
  {
    id: "2",
    title: "Depression Management",
    date: "Every Wednesday at 6:00 PM - 7:30 PM",
    spots: 3,
    description:
      "Share experiences and learn techniques for managing depression.",
  },
  {
    id: "3",
    title: "Stress Relief Workshop",
    date: "Every Friday at 5:00 PM - 6:30 PM",
    spots: 8,
    description:
      "Learn practical techniques for managing daily stress and building resilience.",
  },
];

export const benefits: {
  title: string;
  description: string;
}[] = [
  {
    title: "Shared Experiences",
    description: "Connect with others who understand your journey",
  },
  {
    title: "Professional Guidance",
    description: "Sessions led by licensed mental health professionals",
  },
  {
    title: "Safe Environment",
    description: "A supportive and confidential space to share and heal",
  },
];

export const guidelines: string[] = [
  "Arrive 5 minutes before the session starts",
  "Maintain confidentiality of all participants",
  "Be respectful and supportive of others",
  "Share only what you're comfortable with",
  "Listen actively when others are speaking",
];
