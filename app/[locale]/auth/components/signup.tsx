import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import InputPassword from "@/components/ui/inputPassword";

export default function SignUp() {
  return (
    <div id="signup" className="flex-1 px-6">
      <h2 className="text-primary text-3xl font-bold mb-2">Sign Up</h2>
      <form>
        <p className="mb-4">
          <label htmlFor="signup-name" className="block text-left">
            Name
          </label>
          <Input
            id="signup-name"
            name="name"
            type="text"
            placeholder="Username"
            className="w-full"
          />
        </p>
        <p className="mb-4">
          <label htmlFor="signup-email" className="block text-left">
            Email
          </label>
          <Input
            id="signup-email"
            name="email"
            type="email"
            placeholder="Enter your email adress"
            className="w-full"
          />
        </p>
        <p>
          <label htmlFor="signup-password" className="block text-left">
            Password
          </label>
          <InputPassword
            id="signup-password"
            name="password"
            placeholder="Password"
            className="w-full"
          />
        </p>
        <Button type="button" className="w-1/2 mt-6 uppercase">
          sign up
        </Button>
      </form>
    </div>
  );
}
