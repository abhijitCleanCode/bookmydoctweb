import { FormFieldType } from "@/config/FormFieldTypes";
import { FormField } from "@/types/formField.interface";

export const signupFormFields : FormField[] = [
    {
        name: "name",
        label: "Name",
        type: FormFieldType.INPUT,
        inputType: "text",
        placeholder: "John Doe",
        required: true
    },
    {
        name: "email",
        label: "Email",
        type: FormFieldType.INPUT,
        inputType: "email",
        placeholder: "john@example.com",
        required: true,
    },
    {
        name: "password",
        label: "Password",
        type: FormFieldType.INPUT,
        inputType: "password",
        placeholder: "********",
    }
]
