"use client";

import { useState } from "react";
import {
  Controller,
  useForm,
} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Loader2,
  Send,
  CheckCircle2,
} from "lucide-react";

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
import CountryPhoneInput from "@/components/global/phone-input";

const contactSchema = yup.object({
  // Required
  name: yup
    .string()
    .trim()
    .required("Please enter your name")
    .min(
      2,
      "Name must be at least 2 characters"
    ),

  // Optional
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email")
    .optional()
    .transform((value) =>
      value === "" ? undefined : value
    ),

  // Required
  phone: yup
    .string()
    .trim()
    .required("Please enter your phone number")
    .min(
      7,
      "Please enter a valid phone number"
    ),

  // Optional
  enquiryType: yup
    .string()
    .optional()
    .transform((value) =>
      value === "" ? undefined : value
    ),

  // Required
  message: yup
    .string()
    .trim()
    .required(
      "Please tell us how we can help"
    )
    .min(
      10,
      "Please provide a little more information"
    ),
});

type ContactFormValues =
  yup.InferType<typeof contactSchema>;

export default function ContactForm() {
  const [success, setSuccess] =
    useState(false);

  const [serverError, setServerError] =
    useState("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
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

  const onSubmit = async (
    data: ContactFormValues
  ) => {
    setServerError("");
    setSuccess(false);

    try {
      const response =
        await submitContactAction(data);

      if (!response.success) {
        setServerError(
          response.message ||
            "Something went wrong. Please try again."
        );

        return;
      }

      setSuccess(true);
      reset();
    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      setServerError(
        "Something went wrong. Please try again."
      );
    }
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-6"
    >
      {/* Success Message */}
      {success && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-green-500/20 bg-green-500/10 p-5 text-center text-sm text-green-700 dark:text-green-400">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
            <CheckCircle2 className="h-5 w-5" />
          </div>

          <div className="mt-3">
            <p className="font-semibold">
              Message sent successfully.
            </p>

            <p className="mx-auto mt-1 max-w-md opacity-80">
              Thank you for contacting Tropical
              Roots Realty. We&apos;ll get back to
              you soon.
            </p>
          </div>
        </div>
      )}

      {/* Server Error */}
      {serverError && (
        <div className="rounded-2xl border border-destructive/20 bg-destructive/10 p-4 text-center text-sm text-destructive">
          {serverError}
        </div>
      )}

      {/* Name + Email */}
      <div className="grid gap-5 md:grid-cols-2">
        {/* Name */}
        <FormField
          label="Your Name"
          required
          error={errors.name?.message}
        >
          <Input
            {...register("name")}
            placeholder="John Smith"
            disabled={isSubmitting}
            className="h-12 rounded-xl text-center"
          />
        </FormField>

        {/* Email */}
        <FormField
          label="Email Address"
          error={errors.email?.message}
        >
          <Input
            {...register("email")}
            type="email"
            placeholder="john@example.com"
            disabled={isSubmitting}
            className="h-12 rounded-xl text-center"
          />
        </FormField>
      </div>

      {/* Phone + Enquiry Type */}
      <div className="grid gap-5 md:grid-cols-2">
        {/* Phone */}
        <FormField
          label="Phone Number"
          required
          error={errors.phone?.message}
        >
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <CountryPhoneInput
                value={field.value}
                onChange={field.onChange}
                disabled={isSubmitting}
              />
            )}
          />
        </FormField>

        {/* Enquiry Type */}
        <FormField
          label="I am interested in"
          error={errors.enquiryType?.message}
        >
          <Controller
            name="enquiryType"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value || ""}
                disabled={isSubmitting}
                onValueChange={field.onChange}
              >
                <SelectTrigger className="h-12 rounded-xl justify-center text-center">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="buying">
                    Buying a property
                  </SelectItem>

                  <SelectItem value="selling">
                    Selling my property
                  </SelectItem>

                  <SelectItem value="renting">
                    Renting a property
                  </SelectItem>

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

                  <SelectItem value="other">
                    Something else
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </FormField>
      </div>

      {/* Message */}
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
          className="resize-none rounded-xl text-center"
        />
      </FormField>

      {/* Submit Area */}
      <div className="flex flex-col items-center gap-4 pt-2">
        <p className="max-w-md text-center text-xs leading-5 text-muted-foreground">
          By submitting this form, you agree that
          we may contact you regarding your enquiry.
        </p>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 rounded-xl px-8"
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
    <div className="space-y-2 text-center">
      <label className="block text-sm font-medium text-foreground">
        {label}

        {required && (
          <span className="ml-1 text-destructive">
            *
          </span>
        )}
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