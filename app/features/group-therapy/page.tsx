// "use client";

// import { useState } from "react";

import { Calendar, CircleCheck, Users } from "@/components/ui/icons";

export default function GroupTherapyPage() {
  // const [selectedSession, setSelectedSession] = useState<string | null>(null);

  // const handleRegistration = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   toast.success(
  //     "Registration successful! We'll contact you with further details."
  //   );
  // };

  return (
    <div className="container xl:max-w-5xl mx-auto px-8 py-16">
      <div className="flex items-center gap-4 mb-8">
        <Users className="w-12 h-12 fill-primary" />
        <h1 className="text-4xl font-bold text-foreground">Group Therapy</h1>
      </div>

      <p className="text-xl mb-12">
        Join our moderated group sessions where you can connect with others,
        share experiences, and receive support in a safe and understanding
        environment.
      </p>

      <section id="sessions">
        <h2 className="text-2xl font-bold mb-6">Upcoming Sessions</h2>
        <ul className="grid gap-10">
          {upcomingSessions.map((session) => (
            <li key={session.id} className="bg-light p-6 rounded-lg shadow-xl">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{session.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{session.date}</span>
                  </div>
                  <p className="mb-4">{session.description}</p>
                </div>
                <div className="bg-white h-fit px-3 py-1 rounded-full">
                  <span className="text-sm">{session.spots} spots left</span>
                </div>
              </div>
              <button
                type="button"
                className="bg-white w-full py-2 rounded-md cursor-pointer hover:bg-lighter duration-200"
              >
                Register for Session
              </button>
              {/*
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Register for {selectedSession}</DialogTitle>
                    <DialogDescription>
                      Fill out the form below to register for the session.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleRegistration} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <Input required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <Input type="email" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Why would you like to join this session?
                      </label>
                      <Textarea required />
                    </div>
                    <Button type="submit" className="w-full">
                      Submit Registration
                    </Button>
                  </form>
                </DialogContent>
              */}
            </li>
          ))}
        </ul>
      </section>

      <section id="benefits" className="my-16">
        <h2 className="text-2xl font-bold mb-6">Benefits of Group Therapy</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-light p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="guidelines" className="bg-light p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Session Guidelines</h2>
        <ul className="space-y-4">
          {guidelines.map((guideline, index) => (
            <li key={index} className="flex items-center gap-3">
              <CircleCheck className="w-5 h-5 fill-green-500" />
              <span>{guideline}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

const upcomingSessions: {
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

const benefits: {
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

const guidelines: string[] = [
  "Arrive 5 minutes before the session starts",
  "Maintain confidentiality of all participants",
  "Be respectful and supportive of others",
  "Share only what you're comfortable with",
  "Listen actively when others are speaking",
];
