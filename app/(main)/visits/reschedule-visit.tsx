"use client";

import { Button } from "@/components/ui/button";

interface Props {
  visit: any;
}

export default function RescheduleVisit({ visit }: Props) {
  return (
    <Button variant="outline">
      Reschedule
    </Button>
  );
}