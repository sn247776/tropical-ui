"use client";

import { useState } from "react";
import { Loader2, TriangleAlert } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { cancelVisitAction } from "@/app/actions/visits";

interface CancelVisitProps {
  visitId: string;
}

export default function CancelVisit({
  visitId,
}: CancelVisitProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);

  const handleCancel = async () => {
    try {
      setIsCancelling(true);

      const response = await cancelVisitAction(
        visitId
      );

      if (!response.success) {
        throw new Error(response.message);
      }

      setOpen(false);

      router.refresh();

      toast.success(
        "Visit cancelled successfully."
      );
    } catch (error: any) {
      console.error(
        "Cancel visit error:",
        error
      );

      toast.error(
        error?.message ||
          "Failed to cancel visit."
      );
    } finally {
      setIsCancelling(false);
    }
  };

  return (
    <>
      {/* Cancel Button */}

      <Button
        type="button"
        variant="destructive"
        size="sm"
        onClick={() => setOpen(true)}
      >
        Cancel Visit
      </Button>


      {/* Confirmation Dialog */}

      <Dialog
        open={open}
        onOpenChange={(value) => {
          if (!isCancelling) {
            setOpen(value);
          }
        }}
      >
        <DialogContent className="sm:max-w-md">

          <DialogHeader>

            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
              <TriangleAlert className="h-5 w-5 text-destructive" />
            </div>

            <DialogTitle>
              Cancel this visit?
            </DialogTitle>

            <DialogDescription>
              Are you sure you want to cancel this
              visit? This will cancel your scheduled
              property visit.
            </DialogDescription>

          </DialogHeader>


          <DialogFooter className="gap-2 sm:gap-2">

            <Button
              type="button"
              variant="outline"
              disabled={isCancelling}
              onClick={() => setOpen(false)}
            >
              Keep Visit
            </Button>


            <Button
              type="button"
              variant="destructive"
              disabled={isCancelling}
              onClick={handleCancel}
            >
              {isCancelling ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Cancelling...
                </>
              ) : (
                "Yes, Cancel Visit"
              )}
            </Button>

          </DialogFooter>

        </DialogContent>
      </Dialog>
    </>
  );
}