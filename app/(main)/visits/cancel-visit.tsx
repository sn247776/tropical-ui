"use client";

import { Button } from "@/components/ui/button";

interface Props {
  visitId: string;
}

export default function CancelVisit({
  visitId,
}: Props) {
  const handleCancel = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this visit?"
    );

    if (!confirmed) return;

    // PATCH /api/visits/:visitId/cancel
  };

  return (
    <Button
      variant="destructive"
      onClick={handleCancel}
    >
      Cancel Visit
    </Button>
  );
}