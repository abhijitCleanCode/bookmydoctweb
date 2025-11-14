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

interface DynamicFormProps {
  fields: FormField[];
  schema: any;
  onSubmit: (data: any) => void;
  submitLabel?: string;
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
          disabled={isSubmitting}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
        >
          {submitLabel}
        </Button>
      </form>
    </FormProvider>
  )
}

export default DynamicForm