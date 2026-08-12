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

import { toast } from "sonner";
import { CalendarClock, RotateCcw } from "lucide-react";

import { useRouter } from "next/navigation";
import { rescheduleVisitAction } from "@/app/actions/visits";

/* =========================================================
   VALIDATION
========================================================= */

const RescheduleFormSchema = yup.object({
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

/* =========================================================
   TYPE
========================================================= */

type RescheduleFormData = yup.InferType<
  typeof RescheduleFormSchema
>;

/* =========================================================
   PROPS
========================================================= */

interface RescheduleVisitProps {
  visit: {
    _id: string;
    visitDate: string;
    timeSlot: string;
    notes?: string;
  };

  setOpen?: (open: boolean) => void;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function RescheduleVisitForm({
  visit,
  setOpen,
}: RescheduleVisitProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<RescheduleFormData>({
    resolver: yupResolver(
      RescheduleFormSchema
    ),

    defaultValues: {
      visitDate: visit.visitDate
        ? new Date(visit.visitDate)
        : undefined,

      timeSlot: visit.timeSlot || "",

      notes: visit.notes || "",
    },
  });

  /* =========================================================
     WATCH VALUES
  ========================================================= */

  const visitDate = watch("visitDate");
  const timeSlot = watch("timeSlot");

  /* =========================================================
     SUBMIT
  ========================================================= */

  const onSubmit = async (
    data: RescheduleFormData
  ) => {
    try {
      const response =
        await rescheduleVisitAction({
          visitId: visit._id,

          visitDate:
            data.visitDate.toISOString(),

          timeSlot: data.timeSlot,

          notes: data.notes || "",
        });

      /* ==========================================
         ERROR RESPONSE
      ========================================== */

      if (!response.success) {
        throw new Error(
          response.message ||
            "Failed to reschedule visit."
        );
      }

      /* ==========================================
         CLOSE DIALOG
      ========================================== */

      setOpen?.(false);

      /* ==========================================
         REFRESH SERVER DATA
      ========================================== */

      router.refresh();

      /* ==========================================
         SUCCESS MESSAGE
      ========================================== */

      toast.success(
        "Visit rescheduled successfully!"
      );
    } catch (error) {
      console.error(
        "Reschedule visit error:",
        error
      );

      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to reschedule visit."
      );
    }
  };

  /* =========================================================
     UI
  ========================================================= */

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* =====================================================
          VISIT DATE
      ===================================================== */}

      <div>
        <label
          htmlFor="visitDate"
          className="mb-1 block text-sm font-medium"
        >
          Visit Date
          <span className="text-red-500">
            {" "}
            *
          </span>
        </label>

        <DatePicker
          minDate={new Date()}
          value={visitDate}
          onChange={(date) => {
            setValue(
              "visitDate",
              date as Date,
              {
                shouldValidate: true,
                shouldDirty: true,
              }
            );
          }}
        />

        {errors.visitDate && (
          <p className="mt-1 text-sm text-red-500">
            {errors.visitDate.message}
          </p>
        )}
      </div>

      {/* =====================================================
          TIME SLOT
      ===================================================== */}

      <div>
        <label
          htmlFor="timeSlot"
          className="mb-1 block text-sm font-medium"
        >
          Time Slot
          <span className="text-red-500">
            {" "}
            *
          </span>
        </label>

        <Select
          value={timeSlot}
          onValueChange={(value) => {
            setValue(
              "timeSlot",
              value,
              {
                shouldValidate: true,
                shouldDirty: true,
              }
            );
          }}
        >
          <SelectTrigger
            id="timeSlot"
            className="w-full"
          >
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
          <p className="mt-1 text-sm text-red-500">
            {errors.timeSlot.message}
          </p>
        )}
      </div>

      {/* =====================================================
          NOTES
      ===================================================== */}

      <div>
        <label
          htmlFor="notes"
          className="mb-1 block text-sm font-medium"
        >
          Notes
        </label>

        <Textarea
          id="notes"
          placeholder="Any additional notes..."
          {...register("notes")}
          className="min-h-[100px]"
        />

        {errors.notes && (
          <p className="mt-1 text-sm text-red-500">
            {errors.notes.message}
          </p>
        )}
      </div>

      {/* =====================================================
          SUBMIT BUTTON
      ===================================================== */}

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <RotateCcw className="mr-2 h-4 w-4 animate-spin" />
            Rescheduling...
          </>
        ) : (
          <>
            <CalendarClock className="mr-2 h-4 w-4" />
            Reschedule Visit
          </>
        )}
      </Button>
    </form>
  );
}