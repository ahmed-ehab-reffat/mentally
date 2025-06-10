import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import InputPassword from "@/components/ui/inputPassword";
import { useTranslations } from "next-intl";

export default function SignUp() {
  const t = useTranslations("Auth");

  return (
    <div id="signup" className="flex-1 px-6">
      <h2 className="text-primary text-3xl font-bold mb-2 capitalize">
        {t("sign up")}
      </h2>
      <form>
        <p className="mb-4">
          <label htmlFor="signup-name" className="block text-start rtl:mb-2">
            {t("Name")}
          </label>
          <Input
            id="signup-name"
            name="name"
            type="text"
            placeholder={t("Username")}
            className="w-full"
          />
        </p>
        <p className="mb-4">
          <label htmlFor="signup-email" className="block text-start rtl:mb-2">
            {t("Email")}
          </label>
          <Input
            id="signup-email"
            name="email"
            type="email"
            placeholder={t("Email Placeholder")}
            className="w-full"
          />
        </p>
        <p>
          <label
            htmlFor="signup-password"
            className="block text-start rtl:mb-2"
          >
            {t("Password")}
          </label>
          <InputPassword
            id="signup-password"
            name="password"
            placeholder={t("Password")}
            className="w-full"
          />
        </p>
        <Button type="button" className="w-1/2 mt-6 uppercase">
          {t("sign up")}
        </Button>
      </form>
    </div>
  );
}
