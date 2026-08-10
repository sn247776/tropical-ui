"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RotateCcw } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { createClientAction } from "@/app/actions/client";
import { useClientStore } from "@/stores/client-store";

const ClientSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .required("Full Name is required"),

  number: yup
    .string()
    .required("WhatsApp Number is required")
    .matches(
      /^[6-9]\d{9}$/,
      "Enter a valid 10-digit Indian mobile number"
    ),

  profession: yup
    .string()
    .optional(),
});

type ClientFormData = yup.InferType<typeof ClientSchema>;

interface ClientFormProps {
  requirments?: boolean;
}

export default function ClientForm({
  requirments = false,
}: ClientFormProps) {
const { setClient } = useClientStore();
  const {
    register,
    handleSubmit,
    setError,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ClientFormData>({
    resolver: yupResolver(ClientSchema),
    defaultValues: {
      fullName: "",
      number: "",
      profession: "",
    },
  });

  const onSubmit = async (data: ClientFormData) => {
    const response = await createClientAction(data);

    if (!response.success) {
      setError("root", {
        message: response.message,
      });

      return;
    }

  setClient({
    token: response.data.data.token,
    client: response.data.data.client,
  });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-sm font-medium mb-1"
        >
          Full Name
          <span className="text-red-500">*</span>
        </label>

        <Input
          id="fullName"
          {...register("fullName")}
          placeholder="Enter your full name"
        />

        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.fullName.message}
          </p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium mb-1"
        >
          WhatsApp Number
          <span className="text-red-500">*</span>
        </label>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-gray-500">
              +91
            </span>
          </div>

          <Input
            id="number"
            type="tel"
            maxLength={10}
            className="pl-12"
            placeholder="9876543210"
            {...register("number")}
          />
        </div>

        {errors.number && (
          <p className="mt-1 text-sm text-red-500">
            {errors.number.message}
          </p>
        )}
      </div>

      {/* Profession */}
      <div>
        <label
          htmlFor="profession"
          className="block text-sm font-medium mb-1"
        >
          Profession (Optional)
        </label>

        <Input
          id="profession"
          {...register("profession")}
          placeholder="e.g. Engineer"
        />
      </div>

      {/* Server Error */}
      {errors.root && (
        <p className="text-sm text-red-500">
          {errors.root.message}
        </p>
      )}

      {/* Submit */}
      <Button
        size={requirments ? "lg" : "default"}
        type="submit"
        className={requirments ? "w-fit" : "w-full"}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <RotateCcw className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Next"
        )}
      </Button>
    </form>
  );
}