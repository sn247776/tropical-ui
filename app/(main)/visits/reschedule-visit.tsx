"use client";

import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { CalendarClock } from "lucide-react";
import RescheduleVisitForm from "./forms/reschedule-form";


interface RescheduleVisitDialogProps {
  visit: {
    _id: string;
    visitDate: string;
    timeSlot: string;
    notes?: string;
  };
}

export default function RescheduleVisit({
  visit,
}: RescheduleVisitDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
         
        >
          <CalendarClock className="mr-2 h-4 w-4" />
          Reschedule
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Reschedule Visit</DialogTitle>
        </DialogHeader>

        <RescheduleVisitForm
          visit={visit}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
}