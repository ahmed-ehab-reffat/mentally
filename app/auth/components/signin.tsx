import Button from "@/components/ui/button";
// import { Eye } from "@/components/ui/icons";
import Input from "@/components/ui/input";
import InputPassword from "@/components/ui/inputPassword";

export default function SignIn() {
  return (
    <div id="signin" className="flex-1 px-6">
      <h2 className="text-primary text-3xl font-bold mb-6">Sign In</h2>
      <form>
        <p className="mb-4">
          <label htmlFor="signin-email" className="block text-left">
            Email
          </label>
          <Input
            id="signin-email"
            name="email"
            type="email"
            placeholder="Enter your email adress"
            className="w-full"
          />
        </p>
        <p>
          <label htmlFor="signin-password" className="block text-left">
            Password
          </label>
          <InputPassword
            id="signin-password"
            name="password"
            placeholder="Password"
            className="w-full"
          />
        </p>
        <Button type="button" className="w-1/2 mt-8 uppercase">
          sign in
        </Button>
      </form>
    </div>
  );
}
