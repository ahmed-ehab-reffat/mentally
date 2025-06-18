import Card from "@/components/ui/card";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Overlay from "./components/overlay";

export default function LogIn() {
  return (
    <section className="px-4 py-16">
      <Card className="relative overflow-hidden max-w-4xl mx-auto text-center py-12 border border-primary">
        <Overlay />
        <div id="content" className="flex justify-between items-center">
          <SignIn />
          <SignUp />
        </div>
      </Card>
    </section>
  );
}
