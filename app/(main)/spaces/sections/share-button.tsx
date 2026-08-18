"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  FaLink,
  FaWhatsapp,
  FaFacebook,
  FaEllipsisH,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaShareFromSquare } from "react-icons/fa6";
import { toast } from "sonner";

interface ShareButtonProps {
  big?: boolean;
  propertyCode: string;
  isAvailable: boolean;
}

export function ShareButton({
  big = true,
  propertyCode,
  isAvailable,
}: ShareButtonProps) {
  const currentUrl = `${window.location.origin}${
    isAvailable ? "/share" : "/review"
  }/${propertyCode}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    toast.success("Link copied to clipboard");
  };

  const shareViaWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(currentUrl)}`,
      "_blank"
    );
  };

  const shareViaFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl
      )}`,
      "_blank"
    );
  };

  const shareViaGmail = () => {
    const subject = "Check this out!";
    const body = `I thought you might find this interesting: ${currentUrl}`;

    window.open(
      `mailto:?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
    );
  };

  const shareViaNative = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          text: "Check this out!",
          url: currentUrl,
        })
        .catch(console.error);
    } else {
      toast.warning("Please use one of the other options");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <FaShareFromSquare className="text-lg" />
          {big && <span>Share</span>}
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[90vw] max-w-[425px] sm:w-full">
        <DialogHeader>
          <DialogTitle className="text-center sm:text-left">
            Share this page
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-3 py-2 sm:grid-cols-4 sm:gap-4 sm:py-4">
          <Button
            variant="outline"
            className="flex h-auto flex-col items-center gap-2 py-3 sm:py-4"
            onClick={copyToClipboard}
          >
            <FaLink className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-xs sm:text-sm">Copy Link</span>
          </Button>

          <Button
            variant="outline"
            className="flex h-auto flex-col items-center gap-2 py-3 sm:py-4"
            onClick={shareViaWhatsApp}
          >
            <FaWhatsapp className="h-5 w-5 text-green-600 sm:h-6 sm:w-6" />
            <span className="text-xs sm:text-sm">WhatsApp</span>
          </Button>

          <Button
            variant="outline"
            className="flex h-auto flex-col items-center gap-2 py-3 sm:py-4"
            onClick={shareViaFacebook}
          >
            <FaFacebook className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6" />
            <span className="text-xs sm:text-sm">Facebook</span>
          </Button>

          <Button
            variant="outline"
            className="flex h-auto flex-col items-center gap-2 py-3 sm:py-4"
            onClick={shareViaGmail}
          >
            <SiGmail className="h-5 w-5 text-red-500 sm:h-6 sm:w-6" />
            <span className="text-xs sm:text-sm">Gmail</span>
          </Button>

          <Button
            variant="outline"
            className="col-span-2 flex h-auto flex-col items-center gap-2 py-3 sm:col-span-4 sm:py-4"
            onClick={shareViaNative}
          >
            <FaEllipsisH className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="text-xs sm:text-sm">More Options</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}