"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import React, { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";



import { useClientStore } from "@/stores/client-store";
import ClientForm from "./client-form";
import { ConfirmForm } from "./confirm-form";

interface BookVisitsProps {
  disabled?: boolean;
}

function BookVisits({ disabled }: BookVisitsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const client = useClientStore((state) => state.client);

  const getDialogContent = () => {
    if (!client) {
      return (
        <>
          <DialogHeader>
            <DialogTitle>Get Started</DialogTitle>
            <DialogDescription>
              Please provide your details before requesting a visit.
            </DialogDescription>
          </DialogHeader>

          <ClientForm />
        </>
      );
    }

    return (
      <>
        <DialogHeader>
          <DialogTitle>Finalize Visit</DialogTitle>
          <DialogDescription>
            Choose your preferred visit schedule.
          </DialogDescription>
        </DialogHeader>

        <ConfirmForm setOpen={setIsOpen} />
      </>
    );
  };

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            disabled={disabled}
            size="lg"
            className="w-full"
          >
            <Calendar />
            Request Visits
          </Button>
        </DialogTrigger>

        <DialogContent>
          {getDialogContent()}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default BookVisits;