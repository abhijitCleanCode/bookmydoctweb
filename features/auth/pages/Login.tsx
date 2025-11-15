"use client"

import DynamicForm from "@/components/shared/DynamicForm/DynamicForm"
import { loginFormFields } from "../config/login.config"
import { loginSchema } from "@/formSchemas/login.schema"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const Login = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Login</h1>
        <p className="text-gray-500">Hi! Welcome back</p>
      </div>

      <DynamicForm
        fields={loginFormFields}
        schema={loginSchema}
        onSubmit={() => { }}
        submitLabel="Login"
      />

      <div className="flex items-center my-4">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="px-4 text-sm text-gray-400">
          or continue with
        </span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      <div className="grid">
        <Button variant="outline" className="flex items-center gap-1.5 bg-white border-gray-200 hover:text-blue-600">
          <Image src="/icons/google.png" alt="icon" width={18} height={18} />
          <span className="whitespace-nowrap">Google</span>
        </Button>
      </div>

      <div className="p-0 mt-6">
        <p className="text-sm text-center text-gray-500 w-full">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login