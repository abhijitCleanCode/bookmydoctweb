"use client"

import DynamicForm from "@/components/shared/DynamicForm/DynamicForm"
import { signupFormFields } from "../config/signup.config"
import { signupSchema } from "@/formSchemas/signup.schema"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const SignUp = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Join Us Today</h1>
        <p className="text-gray-500">Welcome to BookMyDoct - Create your account</p>
      </div>

      <DynamicForm
        fields={signupFormFields}
        schema={signupSchema}
        onSubmit={() => { }}
        submitLabel="Sign Up"
      />

      <div className="flex items-center my-4">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="px-4 text-sm text-gray-400">
          or continue with
        </span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <div className="grid">
        <Button variant="outline" className="bg-white border-gray-200 hover:text-blue-600">
          <span className="whitespace-nowrap">Google</span>
        </Button>
      </div>

      <div className="p-0 mt-6">
        <p className="text-sm text-center text-gray-500 w-full">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp