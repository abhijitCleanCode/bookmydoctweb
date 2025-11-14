"use client"

import DynamicForm from "@/components/shared/DynamicForm/DynamicForm"
import { signupFormFields } from "../config/signup.config"
import { signupSchema } from "@/formSchemas/signup.schema"

const SignUp = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Join Us Today</h1>
        <p className="text-gray-600">Welcome to BookMyDoct - Create your account</p>
      </div>

      <DynamicForm
        fields={signupFormFields}
        schema={signupSchema}
        onSubmit={() => { }}
        submitLabel="Sign Up"
      />
    </div>
  )
}

export default SignUp