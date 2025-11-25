"use client";

import DynamicForm from "@/components/shared/DynamicForm/DynamicForm";
import { signupFormFields } from "../config/signup.config";
import { signupSchema } from "@/formSchemas/signup.schema";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useSignUp } from "../hooks/useSignUp";
import { toast } from "sonner";
import { SignUpPayload } from "@/types/auth";
import { ApiError } from "@/utils/ApiError";
import { useState } from "react";
import ActionModal from "@/components/shared/ActionModal";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useVerifyEmail } from "../hooks/useVerifyEmail";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [openOtpModal, setOpenOtpModal] = useState<boolean>(false);
  const [otpId, setOtpId] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [otp, setOtp] = useState<string>("");

  const router = useRouter();

  const { mutateAsync, isPending } = useSignUp();
  const handleSubmit = async (data: SignUpPayload) => {
    try {
      const response = await mutateAsync(data);

      toast.success(response.message);

      // store response data for OTP verification
      setOtpId(response.data.otpId!);
      setUserId(response.data.newUser._id!);

      setOpenOtpModal(true);
    } catch (error: unknown) {
      console.log(
        "features :: auth :: pages :: SignUp :: handleSubmit :: error: ",
        error
      );

      if (error instanceof ApiError) {
        // this is custom backend error
        toast.error(error.message);
      } else if (error instanceof Error) {
        // this is generic error such as network or js error
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  const {
    mutateAsync: verifyEmailMutateAync,
    isPending: isVerifyEmailPending,
  } = useVerifyEmail();
  const handleVerifyEmail = async () => {
    try {
      const response = await verifyEmailMutateAync({ otpId, otp, userId });

      toast.success(response.message);

      setOpenOtpModal(false);
      router.push("/login");
    } catch (error) {
      console.log(
        "features :: auth :: pages :: SignUp :: handleVerifyEmail :: error: ",
        error
      );

      if (error instanceof ApiError) {
        // this is custom backend error
        toast.error(error.message);
      } else if (error instanceof Error) {
        // this is generic error such as network or js error
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Join Us Today
          </h1>
          <p className="text-gray-500">
            Welcome to BookMyDoct - Create your account
          </p>
        </div>

        <DynamicForm
          fields={signupFormFields}
          schema={signupSchema}
          onSubmit={handleSubmit}
          isPending={isPending}
          submitLabel="Sign Up"
        />

        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-4 text-sm text-gray-400">or continue with</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <div className="grid">
          <Button
            variant="outline"
            className="flex items-center gap-1.5 bg-white border-gray-200 hover:text-blue-600"
          >
            <Image src="/icons/google.png" alt="icon" width={18} height={18} />
            <span className="whitespace-nowrap">Google</span>
          </Button>
        </div>

        <div className="p-0 mt-6">
          <p className="text-sm text-center text-gray-500 w-full">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

      {openOtpModal && (
        <ActionModal
          openActionModal={openOtpModal}
          setOpenActionModal={setOpenOtpModal}
          title="Email Verification"
          description="Enter the 6 digit code sent to your email"
        >
          {/* otp inputs */}
          <div className="flex justify-center gap-3 mt-4 mb-6">
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => setOtp(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>

              <InputOTPSeparator />

              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <div className="flex flex-col gap-2">
            <Button
              onClick={handleVerifyEmail}
              className="w-full bg-green-500 hover:bg-green-600"
            >
              {isVerifyEmailPending ? (
                <span className="flex items-center gap-1.5">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Verifying...
                </span>
              ) : (
                <span>Verify OTP</span>
              )}
            </Button>
          </div>
        </ActionModal>
      )}
    </>
  );
};

export default SignUp;
