import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Envelope } from "@/components/ui/icons";

export default function Newsletter() {
  return (
    <section className="px-4 pt-10 pb-16">
      <Card className="max-w-2xl mx-auto text-center border border-primary">
        <div className="inline-block p-5 rounded-full bg-white">
          <Envelope className="w-7 h-7 align-[-0.125em] fill-primary" />
        </div>
        <h2 className="text-primary text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-8">
          Subscribe to our newsletter for mental health tips, updates, and
          resources.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 border border-primary outline-none rounded-md placeholder:text-secondry"
          />
          <Button type="button">Subscribe</Button>
        </form>
      </Card>
    </section>
  );
}
