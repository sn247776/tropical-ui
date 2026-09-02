
"use client";

import { useState } from "react";
import {
  Controller,
  useForm,
} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  CheckCircle2,
  Loader2,
  Send,
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

import CountryPhoneInput from "@/components/global/phone-input";

import { submitPropertyLeadAction } from "@/app/actions/property-lead";
import { LocationListSelect } from "@/components/global/location-list";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

const propertyLeadSchema = yup.object({
  listingType: yup
    .mixed<"rent" | "buy" | "lease">()
    .oneOf(["rent", "buy", "lease"])
    .required(
      "Please select what you want to do"
    ),

  propertyType: yup
    .string()
    .trim()
    .required(
      "Please select a property type"
    ),

  location: yup
    .string()
    .trim()
    .required(
      "Please select a location"
    ),

  landSize: yup
    .number()
    .nullable()
    .transform(
      (value, originalValue) => {
        if (
          originalValue === "" ||
          originalValue === null ||
          originalValue === undefined
        ) {
          return null;
        }

        return value;
      }
    )
    .min(0)
    .optional(),

  expectedPrice: yup
    .number()
    .typeError(
      "Please enter your expected price"
    )
    .required(
      "Please enter your expected price"
    )
    .min(
      1,
      "Please enter a valid price"
    ),

  name: yup
    .string()
    .trim()
    .required(
      "Please enter your name"
    )
    .min(
      2,
      "Name must be at least 2 characters"
    ),

  phone: yup
    .string()
    .trim()
    .required(
      "Please enter your phone number"
    )
    .min(
      7,
      "Please enter a valid phone number"
    ),

  email: yup
    .string()
    .trim()
    .email(
      "Please enter a valid email"
    )
    .optional()
    .transform((value) =>
      value === ""
        ? undefined
        : value
    ),

  message: yup
    .string()
    .trim()
    .max(
      2000,
      "Message cannot be longer than 2000 characters"
    )
    .optional()
    .transform((value) =>
      value === ""
        ? undefined
        : value
    ),
});

type PropertyLeadFormValues =
  yup.InferType<
    typeof propertyLeadSchema
  >;

/* -------------------------------------------------------------------------- */
/* Property Types                                                             */
/* -------------------------------------------------------------------------- */

const propertyTypes = [
  {
    value: "villa",
    label: "Villa",
    category: "residential",
  },
  {
    value: "house",
    label: "House",
    category: "residential",
  },
  {
    value: "apartment",
    label: "Apartment",
    category: "residential",
  },
  {
    value: "condo",
    label: "Condo",
    category: "residential",
  },
  {
    value: "land",
    label: "Land",
    category: "land",
  },
  {
    value: "hotel-resort",
    label: "Hotel / Resort",
    category: "commercial",
  },
  {
    value: "commercial",
    label: "Commercial",
    category: "commercial",
  },
  {
    value: "other",
    label: "Other",
    category: "other",
  },
];

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function ListPropertyForm() {
  const [success, setSuccess] =
    useState(false);

  const [serverError, setServerError] =
    useState("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<PropertyLeadFormValues>({
    resolver: yupResolver(
      propertyLeadSchema
    ),

    defaultValues: {
      listingType: undefined,
      propertyType: "",
      location: "",
      landSize: undefined,
      expectedPrice: undefined,
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const propertyType =
    watch("propertyType");

  const listingType =
    watch("listingType");

  /* ------------------------------------------------------------------------ */
  /* Helpers                                                                  */
  /* ------------------------------------------------------------------------ */

  const isLand =
    propertyType === "land";

  const priceLabel =
    listingType === "rent"
      ? "Expected Monthly Rent"
      : listingType === "lease"
      ? "Expected Lease Price"
      : "Expected Price";

  const pricePlaceholder =
    listingType === "rent"
      ? "50,000"
      : listingType === "lease"
      ? "5,000,000"
      : "8,500,000";

  /* ------------------------------------------------------------------------ */
  /* Submit                                                                   */
  /* ------------------------------------------------------------------------ */

  const onSubmit = async (
    data: PropertyLeadFormValues
  ) => {
    setServerError("");
    setSuccess(false);

    try {
      const response =
        await submitPropertyLeadAction({
          listingType:
            data.listingType,

          propertyType:
            data.propertyType,

          // Single location name
          location:
            data.location,

          landSize:
            data.landSize ??
            undefined,

          expectedPrice:
            data.expectedPrice,

          name: data.name,

          phone: data.phone,

          email:
            data.email ||
            undefined,

          message:
            data.message ||
            undefined,
        });

      if (!response.success) {
        setServerError(
          response.message ||
            "Something went wrong. Please try again."
        );

        return;
      }

      setSuccess(true);

      reset();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error(
        "Property lead form error:",
        error
      );

      setServerError(
        "Something went wrong. Please try again."
      );
    }
  };

  /* ------------------------------------------------------------------------ */
  /* Success                                                                  */
  /* ------------------------------------------------------------------------ */

  if (success) {
    return (
      <div className="flex min-h-[450px] flex-col items-center justify-center rounded-3xl border border-green-500/20 bg-green-500/5 p-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>

        <h2 className="mt-6 text-2xl font-semibold text-primary md:text-3xl">
          Thank you!
        </h2>

        <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground md:text-base">
          We&apos;ve received your property
          information. Our team will review
          the details and contact you shortly
          to discuss your property.
        </p>

        <Button
          type="button"
          variant="outline"
          className="mt-7 rounded-xl"
          onClick={() =>
            setSuccess(false)
          }
        >
          Submit Another Property
        </Button>
      </div>
    );
  }

  /* ------------------------------------------------------------------------ */
  /* Form                                                                     */
  /* ------------------------------------------------------------------------ */

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-7"
    >
      {/* ------------------------------------------------------------------ */}
      {/* Server Error                                                       */}
      {/* ------------------------------------------------------------------ */}

      {serverError && (
        <div className="rounded-2xl border border-destructive/20 bg-destructive/10 p-4 text-center text-sm text-destructive">
          {serverError}
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Listing Type                                                       */}
      {/* ------------------------------------------------------------------ */}

      <FormField
        label="What would you like to do?"
        required
        error={
          errors.listingType?.message
        }
      >
        <Controller
          name="listingType"
          control={control}
          render={({ field }) => (
            <div className="grid grid-cols-3 gap-3">
              <ChoiceButton
                label="Sell"
                active={
                  field.value ===
                  "buy"
                }
                disabled={
                  isSubmitting
                }
                onClick={() =>
                  field.onChange(
                    "buy"
                  )
                }
              />

              <ChoiceButton
                label="Rent"
                active={
                  field.value ===
                  "rent"
                }
                disabled={
                  isSubmitting
                }
                onClick={() =>
                  field.onChange(
                    "rent"
                  )
                }
              />

              <ChoiceButton
                label="Lease"
                active={
                  field.value ===
                  "lease"
                }
                disabled={
                  isSubmitting
                }
                onClick={() =>
                  field.onChange(
                    "lease"
                  )
                }
              />
            </div>
          )}
        />
      </FormField>

      {/* ------------------------------------------------------------------ */}
      {/* Property Type                                                      */}
      {/* ------------------------------------------------------------------ */}

      <FormField
        label="Property Type"
        required
        error={
          errors.propertyType?.message
        }
      >
        <Controller
          name="propertyType"
          control={control}
          render={({ field }) => (
            <Select
              value={
                field.value || ""
              }
              disabled={
                isSubmitting
              }
              onValueChange={
                field.onChange
              }
            >
              <SelectTrigger className="h-12 w-full justify-center rounded-xl text-center">
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>

              <SelectContent>
                {propertyTypes.map(
                  (property) => (
                    <SelectItem
                      key={
                        property.value
                      }
                      value={
                        property.value
                      }
                    >
                      {
                        property.label
                      }
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          )}
        />
      </FormField>

      {/* ------------------------------------------------------------------ */}
      {/* Location                                                            */}
      {/* ------------------------------------------------------------------ */}

      <FormField
        label="Where is your property?"
        required
        error={
          errors.location?.message
        }
      >
        <Controller
          name="location"
          control={control}
          render={({ field }) => (
            <LocationListSelect
            className="h-12 rounded-xl justify-center text-center font-normal"
              locationValue={
                field.value
                  ? [field.value]
                  : []
              }
              setLocationValue={(
                values
              ) => {
                field.onChange(
                  values[0] ?? ""
                );
              }}
              maxW="w-[300px]"
              multiSelect={false}
            />
          )}
        />
      </FormField>

      {/* ------------------------------------------------------------------ */}
      {/* Land Size                                                          */}
      {/* ------------------------------------------------------------------ */}

      {isLand && (
        <FormField
          label="Land Size"
          error={
            errors.landSize?.message
          }
        >
          <div className="relative">
            <Input
              {...register(
                "landSize",
                {
                  valueAsNumber:
                    true,
                }
              )}
              type="number"
              min="0"
              placeholder="1,000"
              disabled={
                isSubmitting
              }
              className="h-12 rounded-xl pr-16 text-center"
            />

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              m²
            </span>
          </div>
        </FormField>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Expected Price                                                     */}
      {/* ------------------------------------------------------------------ */}

      <FormField
        label={priceLabel}
        required
        error={
          errors.expectedPrice?.message
        }
      >
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground">
            ฿
          </span>

          <Input
            {...register(
              "expectedPrice",
              {
                valueAsNumber:
                  true,
              }
            )}
            type="number"
            min="0"
            placeholder={
              pricePlaceholder
            }
            disabled={
              isSubmitting
            }
            className="h-12 rounded-xl pl-10 text-center"
          />
        </div>
      </FormField>

      {/* ------------------------------------------------------------------ */}
      {/* Contact Information                                                */}
      {/* ------------------------------------------------------------------ */}

      <div className="border-t pt-7">
        <div className="mb-6 text-center">
          <h3 className="text-lg font-semibold text-primary">
            How can we reach you?
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            We&apos;ll contact you to
            learn more about the
            property.
          </p>
        </div>

        <div className="space-y-5">
          {/* Name */}
          <FormField
            label="Your Name"
            required
            error={
              errors.name?.message
            }
          >
            <Input
              {...register("name")}
              placeholder="John Smith"
              disabled={
                isSubmitting
              }
              className="h-12 rounded-xl text-center"
            />
          </FormField>

          {/* Phone */}
          <FormField
            label="Phone / WhatsApp"
            required
            error={
              errors.phone?.message
            }
          >
            <Controller
              name="phone"
              control={control}
              render={({
                field,
              }) => (
                <CountryPhoneInput
                  value={
                    field.value
                  }
                  onChange={
                    field.onChange
                  }
                  disabled={
                    isSubmitting
                  }
                />
              )}
            />
          </FormField>

          {/* Email */}
          <FormField
            label="Email Address"
            error={
              errors.email?.message
            }
          >
            <Input
              {...register("email")}
              type="email"
              placeholder="john@example.com"
              disabled={
                isSubmitting
              }
              className="h-12 rounded-xl text-center"
            />
          </FormField>
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Optional Message                                                   */}
      {/* ------------------------------------------------------------------ */}

      <FormField
        label="Anything you'd like us to know?"
        error={
          errors.message?.message
        }
      >
        <Textarea
          {...register("message")}
          placeholder="For example: sea view, private pool, currently rented, recently renovated..."
          rows={5}
          disabled={
            isSubmitting
          }
          className="resize-none rounded-xl text-center"
        />
      </FormField>

      {/* ------------------------------------------------------------------ */}
      {/* Submit                                                              */}
      {/* ------------------------------------------------------------------ */}

      <div className="flex flex-col items-center gap-4 pt-2">
        <p className="max-w-lg text-center text-xs leading-5 text-muted-foreground">
          By submitting this form,
          you agree that Tropical
          Roots Realty may contact you
          regarding your property.
        </p>

        <Button
          type="submit"
          disabled={
            isSubmitting
          }
          className="h-12 rounded-xl px-8"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Submit Property
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

/* -------------------------------------------------------------------------- */
/* Form Field                                                                 */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/* Choice Button                                                              */
/* -------------------------------------------------------------------------- */

function ChoiceButton({
  label,
  active,
  disabled,
  onClick,
}: {
  label: string;
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        "h-12 rounded-xl border px-4 text-sm font-medium transition-all",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-border bg-background text-foreground hover:border-primary/40 hover:bg-primary/5",
        disabled
          ? "cursor-not-allowed opacity-50"
          : "",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

