"use client";

import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

interface InputFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  inputType?: string;
}

const InputField = ({ name, label, placeholder, inputType }: InputFieldProps) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <Input
        type={inputType || "text"}
        {...register(name)}
        placeholder={placeholder}
        className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 h-12 rounded-lg focus-visible:ring-2 focus-visible:ring-blue-500/50 focus:border-blue-500 w-full px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  )
}

export default InputField