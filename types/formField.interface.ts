import { FormFieldType } from "@/config/FormFieldTypes";

export interface BaseFormField {
    name: string;
    label: string;
    placeholder?: string;
    type: FormFieldType;
    disabled?: boolean;
    required?: boolean;
}

export interface InputField extends BaseFormField {
    type: "input" | "phoneInput" | "datePicker";
    inputType?: "text" | "email" | "password" | "number";
}

export interface SelectField extends BaseFormField {
    type: "select";
    options: { label: string; value: string }[];
}

export interface CheckboxField extends BaseFormField {
    type: "checkbox";
}

export interface TextAreaField extends BaseFormField {
    type: "textarea";
    rows?: number;
}

export type FormField = InputField | SelectField | CheckboxField | TextAreaField;
