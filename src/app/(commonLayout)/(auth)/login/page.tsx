import LoginForm from "@/components/login-form";

const LoginPage = async ({
  searchParams,
}: {
  searchParams?: Promise<{ redirect?: string }>;
}) => {
  const params = (await searchParams) || {};
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full ">
        <LoginForm redirect={params.redirect} />
      </div>
    </div>
  );
};

export default LoginPage;
