import Button from "@/components/ui/button";
// import { Eye } from "@/components/ui/icons";
import Input from "@/components/ui/input";
import InputPassword from "@/components/ui/inputPassword";
import { useTranslations } from "next-intl";

export default function SignIn() {
  const t = useTranslations("Auth");

  return (
    <div id="signin" className="flex-1 px-6">
      <h2 className="text-primary text-3xl font-bold mb-6 capitalize">
        {t("sign in")}
      </h2>
      <form>
        <p className="mb-4">
          <label htmlFor="signin-email" className="block text-start rtl:mb-2">
            {t("Email")}
          </label>
          <Input
            id="signin-email"
            name="email"
            type="email"
            placeholder={t("Email Placeholder")}
            className="w-full"
          />
        </p>
        <p>
          <label
            htmlFor="signin-password"
            className="block text-start rtl:mb-2"
          >
            {t("Password")}
          </label>
          <InputPassword
            id="signin-password"
            name="password"
            placeholder={t("Password")}
            className="w-full"
          />
        </p>
        <Button type="button" className="w-1/2 mt-8 uppercase">
          {t("sign in")}
        </Button>
      </form>
    </div>
  );
}
