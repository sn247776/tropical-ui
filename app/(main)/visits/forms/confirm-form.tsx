"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { DatePicker } from "@/components/date-time/date-picker";
import { timeSlots } from "@/app/form-list";

import { useVisitStore } from "@/stores/visit-store";
import { toast } from "sonner";
import { RotateCcw } from "lucide-react";
import { bookVisitAction } from "@/app/actions/visits";
import { useRouter } from "next/navigation";


const ConfirmFormSchema = yup.object({
  visitDate: yup
    .date()
    .required("Visit date is required"),

  timeSlot: yup
    .string()
    .required("Time slot is required"),

  notes: yup
    .string()
    .optional(),
});

type ConfirmFormData = yup.InferType<
  typeof ConfirmFormSchema
>;

interface ConfirmFormProps {
  setOpen: (open: boolean) => void;
}

export function ConfirmForm({
  setOpen,
}: ConfirmFormProps) {
  const router = useRouter();
  const {
    visitIds,
    clearAllVisits,
  } = useVisitStore();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ConfirmFormData>({
    resolver: yupResolver(ConfirmFormSchema),
    defaultValues: {
      visitDate: undefined,
      timeSlot: "",
      notes: "",
    },
  });

  const visitDate = watch("visitDate");
  const timeSlot = watch("timeSlot");

const onSubmit = async (data: ConfirmFormData) => {
  try {
    if (visitIds.length === 0) {
      toast.error("Please select at least one property.");
      return;
    }

    const response = await bookVisitAction({
      visitDate: data.visitDate.toISOString(),
      timeSlot: data.timeSlot,
      notes: data.notes,
      propertyCodes: visitIds,
    });

    if (!response.success) {
      throw new Error(response.message);
    }

    clearAllVisits();
    setOpen(false);
router.refresh();
    toast.success("Visit booked successfully!");
  } catch (error: any) {
    console.error(error);

    toast.error(
      error?.message || "Failed to book visit."
    );
  }
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Visit Date */}
      <div>
        <label
          htmlFor="visitDate"
          className="block text-sm font-medium mb-1"
        >
          Visit Date
          <span className="text-red-500">*</span>
        </label>

        <DatePicker
          minDate={new Date()}
          value={visitDate}
          onChange={(date:any) =>
            setValue("visitDate", date, {
              shouldValidate: true,
            })
          }
        />

        {errors.visitDate && (
          <p className="text-sm text-red-500 mt-1">
            {errors.visitDate.message}
          </p>
        )}
      </div>

      {/* Time Slot */}
      <div>
        <label
          htmlFor="timeSlot"
          className="block text-sm font-medium mb-1"
        >
          Time Slot
          <span className="text-red-500">*</span>
        </label>

        <Select
          value={timeSlot}
          onValueChange={(value) =>
            setValue("timeSlot", value, {
              shouldValidate: true,
            })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a time slot" />
          </SelectTrigger>

          <SelectContent>
            {timeSlots.map((slot) => (
              <SelectItem
                key={slot.value}
                value={slot.value}
              >
                {slot.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {errors.timeSlot && (
          <p className="text-sm text-red-500 mt-1">
            {errors.timeSlot.message}
          </p>
        )}
      </div>

      {/* Notes */}
      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium mb-1"
        >
          Notes
        </label>

        <Textarea
          id="notes"
          placeholder="Any additional notes..."
          {...register("notes")}
        />

        {errors.notes && (
          <p className="text-sm text-red-500 mt-1">
            {errors.notes.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <RotateCcw className="w-4 h-4 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Request"
        )}
      </Button>
    </form>
  );
}