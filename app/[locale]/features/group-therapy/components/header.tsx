import { Users } from "@/components/ui/icons";

export default function Header() {
  return (
    <header>
      <div className="flex items-center gap-4 mb-8">
        <Users className="w-10 h-10 fill-primary" />
        <h1 className="text-4xl font-bold text-primary">Group Therapy</h1>
      </div>
      <p className="text-xl mb-12">
        Join our moderated group sessions where you can connect with others,
        share experiences, and receive support in a safe and understanding
        environment.
      </p>
    </header>
  );
}
