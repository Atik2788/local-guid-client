import RegisterForm from "@/components/register-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RegisterPage = () => {
  return (
    <>
      <div className="flex min-h-svh w-full mt-24 items-center justify-center p-6 md:p-10 ">
        <div className="w-full max-w-4xl ">
          <Card className="bg-gradient-to-b from-[#6ab3c3] to-white">
            <CardHeader >
              <CardTitle className="text-balck">Create an account</CardTitle>
              <CardDescription className="text-gray-600">
                Enter your information below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RegisterForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
