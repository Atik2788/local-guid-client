"use client";

import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import InputFieldError from "./shared/InputFieldError";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { register } from "@/services/auth/register";
import { Compass, User, MapPin, Eye, EyeOff } from "lucide-react";

const RegisterForm = () => {
  const [state, formAction, isPending] = useActionState(register, null);
  const [selectedRole, setSelectedRole] = useState<"TOURIST" | "GUIDE">("TOURIST");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  const handleSubmit = (formData: FormData) => {
    if (!formData.get("role")) {
      formData.set("role", selectedRole);
    }
    formAction(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#228dc3] p-6">
      <form
        action={handleSubmit}
        className="w-full max-w-lg bg-[#166f9c] rounded-2xl shadow-xl p-8 space-y-6"
      >
        {/* Role Selection */}
        <div className="space-y-3">
          <FieldLabel className="text-base font-semibold text-white">
            I want to join as
          </FieldLabel>
          <div className="grid grid-cols-2 gap-4">
            {/* Tourist Option */}
            <button
              type="button"
              onClick={() => setSelectedRole("TOURIST")}
              className={`relative flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all ${
                selectedRole === "TOURIST"
                  ? "border-[#166f9c] bg-blue-50 shadow-md"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <User
                className={`h-8 w-8 mb-2 ${
                  selectedRole === "TOURIST" ? "text-[#166f9c]" : "text-gray-400"
                }`}
              />
              <span
                className={`font-semibold ${
                  selectedRole === "TOURIST" ? "text-[#166f9c]" : "text-gray-700"
                }`}
              >
                Tourist
              </span>
              <span className="text-xs text-gray-300 mt-1">Explore tours</span>
            </button>

            {/* Guide Option */}
            <button
              type="button"
              onClick={() => setSelectedRole("GUIDE")}
              className={`relative flex flex-col items-center justify-center p-6 rounded-lg border-2 transition-all ${
                selectedRole === "GUIDE"
                  ? "border-[#166f9c] bg-blue-50 shadow-md"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <MapPin
                className={`h-8 w-8 mb-2 ${
                  selectedRole === "GUIDE" ? "text-[#166f9c]" : "text-gray-400"
                }`}
              />
              <span
                className={`font-semibold ${
                  selectedRole === "GUIDE" ? "text-[#166f9c]" : "text-gray-700"
                }`}
              >
                Guide
              </span>
              <span className="text-xs text-gray-300 mt-1">Offer tours</span>
            </button>
          </div>
          <input type="hidden" name="role" value={selectedRole} key={selectedRole} />
        </div>

        {/* Form Fields */}
        <FieldGroup>
          <div className="space-y-4">
            {/* Full Name */}
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder={selectedRole === "GUIDE" ? "Jane Smith" : "John Doe"}
                className="h-11 rounded-lg border-white bg-white focus:ring-2 focus:ring-[#166f9c]"
              />
              <InputFieldError field="name" state={state} />
            </Field>

            {/* Email */}
            <Field>
              <FieldLabel htmlFor="email">Email Address</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="h-11 rounded-lg border-white bg-white focus:ring-2 focus:ring-[#166f9c]"
              />
              <InputFieldError field="email" state={state} />
            </Field>

            {/* Password */}
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Minimum 6 characters"
                  className="h-11 pr-10 rounded-lg border-white bg-white focus:ring-2 focus:ring-[#166f9c]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <InputFieldError field="password" state={state} />
            </Field>

            {/* Confirm Password */}
            <Field>
              <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  className="h-11 pr-10 rounded-lg border-white bg-white focus:ring-2 focus:ring-[#166f9c]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <InputFieldError field="confirmPassword" state={state} />
            </Field>
          </div>

          {/* Role-specific Info */}
          <div className="mt-4 p-4 rounded-lg bg-blue-100 border border-blue-100">
            <div className="flex items-start gap-3">
              <Compass className="h-5 w-5 text-[#166f9c] mt-0.5 shrink-0" />
              <div className="text-sm text-blue-900">
                {selectedRole === "TOURIST" ? (
                  <>
                    <p className="font-medium mb-1">As a Tourist, you can:</p>
                    <ul className="list-disc list-inside space-y-1 text-blue-800">
                      <li>Browse and book amazing local tours</li>
                      <li>Connect with verified local guides</li>
                      <li>Leave reviews and save favorite tours</li>
                    </ul>
                  </>
                ) : (
                  <>
                    <p className="font-medium mb-1">As a Guide, you can:</p>
                    <ul className="list-disc list-inside space-y-1 text-blue-800">
                      <li>Create and manage your tour listings</li>
                      <li>Accept bookings from travelers</li>
                      <li>Earn money sharing your local expertise</li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 space-y-4">
            <Button
              type="submit"
              disabled={isPending}
              className="w-full h-12 text-base font-semibold rounded-lg bg-[#39b0eb] hover:bg-[#125a7d] text-white shadow-md transition-transform"
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
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4
                      zm2 5.291A7.962 7.962 0 014 12H0c0 
                      3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating Account...
                </span>
              ) : (
                `Create ${selectedRole === "GUIDE" ? "Guide" : "Tourist"} Account`
              )}
            </Button>

            <FieldDescription className="text-center text-black">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-[#0dcfed] font-medium hover:underline"
              >
                Sign in
              </a>
            </FieldDescription>

            <p className="text-xs text-center text-gray-200">
              By creating an account, you agree to our{" "}
              <a
                href="/terms"
                className="text-[#7ec9ee] hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-[#7ec9ee] hover:underline"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </FieldGroup>
      </form>
    </div>
  );
};

export default RegisterForm;

