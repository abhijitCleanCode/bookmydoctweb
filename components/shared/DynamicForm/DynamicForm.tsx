"use client"

import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

// form fields
import InputField from "./fields/InputField"
import SelectField from "./fields/SelectField"
import TextAreaField from "./fields/TextAreaField"

import { FormField, } from "@/types/formField.interface"
import { FormFieldType } from "@/config/FormFieldTypes"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface DynamicFormProps {
  fields: FormField[];
  schema: any;
  onSubmit: (data: any) => void;
  submitLabel?: string;
  isPending?: boolean;
}

const RenderField = (field: FormField) => {
  switch (field.type) {
    case FormFieldType.INPUT:
      return <InputField key={field.name} {...field} />

    case FormFieldType.SELECT:
      return <SelectField key={field.name} />

    case FormFieldType.TEXTAREA:
      return <TextAreaField key={field.name} />

    default:
      return null;
  }
}

const DynamicForm = ({
  fields,
  schema,
  onSubmit,
  submitLabel = "Submit",
  isPending
}: DynamicFormProps) => {

  // define form
  const form = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  })

  const { handleSubmit, formState: { isSubmitting } } = form;

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {fields.map((field) => RenderField(field))}

        <Button
          type="submit"
          disabled={isSubmitting || isPending}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
        >
          {isPending ? <span className="flex items-center gap-1.5"><Loader2 className="mr-2 h-4 w-4 animate-spin" />{submitLabel}</span> : submitLabel}
        </Button>
      </form>
    </FormProvider>
  )
}

export default DynamicForm