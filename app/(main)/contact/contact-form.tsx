"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loader2, Send, CheckCircle2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { submitContactAction } from "@/app/actions/contact";

const contactSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Please enter your name")
    .min(2, "Name must be at least 2 characters"),

  email: yup
    .string()
    .trim()
    .required("Please enter your email")
    .email("Please enter a valid email"),

  phone: yup.string().trim().optional(),

  enquiryType: yup
    .string()
    .required("Please select an enquiry type"),

  message: yup
    .string()
    .trim()
    .required("Please tell us how we can help")
    .min(10, "Please provide a little more information"),
});

type ContactFormValues = yup.InferType<typeof contactSchema>;

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      enquiryType: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setServerError("");
    setSuccess(false);

    const response = await submitContactAction(data);

    if (!response.success) {
      setServerError(
        response.message || "Something went wrong. Please try again."
      );
      return;
    }

    setSuccess(true);
    reset();
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {success && (
        <div className="flex items-start gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-700 dark:text-green-400">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />

          <div>
            <p className="font-semibold">Message sent successfully.</p>
            <p className="mt-1 opacity-80">
              Thank you for contacting Tropical Roots Realty. We&apos;ll get
              back to you soon.
            </p>
          </div>
        </div>
      )}

      {serverError && (
        <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
          {serverError}
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          label="Your Name"
          required
          error={errors.name?.message}
        >
          <Input
            {...register("name")}
            placeholder="John Smith"
            disabled={isSubmitting}
          />
        </FormField>

        <FormField
          label="Email Address"
          required
          error={errors.email?.message}
        >
          <Input
            {...register("email")}
            type="email"
            placeholder="john@example.com"
            disabled={isSubmitting}
          />
        </FormField>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <FormField
          label="Phone Number"
          error={errors.phone?.message}
        >
          <Input
            {...register("phone")}
            type="tel"
            placeholder="+66..."
            disabled={isSubmitting}
          />
        </FormField>

        <FormField
          label="I am interested in"
          required
          error={errors.enquiryType?.message}
        >
          <Select
            disabled={isSubmitting}
            onValueChange={(value) => setValue("enquiryType", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="buying">Buying a property</SelectItem>
              <SelectItem value="selling">Selling my property</SelectItem>
              <SelectItem value="renting">Renting a property</SelectItem>
              <SelectItem value="property-management">
                Property management
              </SelectItem>
              <SelectItem value="maintenance">
                Maintenance & repairs
              </SelectItem>
              <SelectItem value="renovation">
                Renovation & construction
              </SelectItem>
              <SelectItem value="investment">
                Investment opportunities
              </SelectItem>
              <SelectItem value="other">Something else</SelectItem>
            </SelectContent>
          </Select>
        </FormField>
      </div>

      <FormField
        label="How can we help?"
        required
        error={errors.message?.message}
      >
        <Textarea
          {...register("message")}
          placeholder="Tell us about the property, area, budget or what you need help with..."
          rows={7}
          disabled={isSubmitting}
          className="resize-none"
        />
      </FormField>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-5 text-muted-foreground">
          By submitting this form, you agree that we may contact you regarding
          your enquiry.
        </p>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 rounded-xl px-7"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Enquiry
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        {label}
        {required && <span className="ml-1 text-destructive">*</span>}
      </label>

      {children}

      {error && (
        <p className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}