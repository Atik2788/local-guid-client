"use client";
import { loginUser } from "@/services/auth/loginUser";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import InputFieldError from "./shared/InputFieldError";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Compass, Mail, Lock, Eye, EyeOff } from "lucide-react";

const LoginForm = ({ redirect }: { redirect?: string }) => {
  const [state, formAction, isPending] = useActionState(loginUser, null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#166f9c] p-6">
      <form
        action={formAction}
        className="w-full max-w-lg bg-[#2f9cd3] rounded-2xl shadow-xl p-8 space-y-6 animate-fadeIn"
      >
        {redirect && <input type="hidden" name="redirect" value={redirect} />}

        {/* Welcome Message */}
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center shadow-lg">
              <Compass className="h-7 w-7 text-[#1d6a8d]" />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Welcome Back
          </h2>
          <p className="text-gray-600">Sign in to continue your journey</p>
        </div>

        <FieldGroup>
          <div className="space-y-5">
            {/* Email */}
            <Field>
              <FieldLabel htmlFor="email" className="text-black font-medium">
                Email Address
              </FieldLabel>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-12 pl-10 rounded-lg border border-white focus:ring-2 focus:ring-[#166f9c]"
                />
              </div>
              <InputFieldError field="email" state={state} />
            </Field>

            {/* Password */}
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel
                  htmlFor="password"
                  className="text-black font-medium"
                >
                  Password
                </FieldLabel>
                <a
                  href="/forgot-password"
                  className="text-sm text-[#166f9c] hover:underline font-medium"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-white" />
                </div>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="h-12 pl-10 pr-10 rounded-lg border border-white focus:ring-2 focus:ring-[#166f9c]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-white hover:text-white"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <InputFieldError field="password" state={state} />
            </Field>
          </div>

          {/* Submit Button */}
          <div className="mt-6 space-y-5">
            <Button
              type="submit"
              disabled={isPending}
              className="w-full h-12 text-base font-semibold rounded-lg bg-[#166f9c] hover:bg-[#125a7d] text-white shadow-md transition-transform"
            >
              {isPending ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </Button>

            <FieldDescription className="text-center text-black">
              Don&apos;t have an account?{" "}
              <a
                href="/register"
                className="text-[#0a0af3] font-medium hover:underline"
              >
                Create account
              </a>
            </FieldDescription>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
};

export default LoginForm;
