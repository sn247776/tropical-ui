"use client";

import React, { useEffect, useState } from "react";
import { AlertTriangle, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface PropertyUnavailableNoticeProps {
  isAvailable?: boolean;
  listingType?: "buy" | "rent" | "lease" | string;
  slug?: string;
}

export default function PropertyUnavailableNotice({
  isAvailable,
  listingType,
  slug,
}: PropertyUnavailableNoticeProps) {
  const router = useRouter();
  const [show, setShow] = useState(true);

  useEffect(() => {
    // If property is available, automatically redirect
    if (!isAvailable || !listingType || !slug) {
      return;
    }

    const validListingTypes = ["buy", "rent", "lease"];

    if (!validListingTypes.includes(listingType)) {
      return;
    }

    router.replace(`/spaces/${listingType}/${slug}`);
  }, [isAvailable, listingType, slug, router]);

  // Available property doesn't need to show this component
  if (isAvailable === true) {
    return null;
  }

  if (!show) {
    return null;
  }

  return (
    <div className="w-full px-4 pt-4">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-amber-200 bg-amber-50 px-5 py-5 shadow-sm">
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <AlertTriangle className="h-5 w-5" />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1 pr-8">
              <h3 className="text-base font-semibold text-amber-900">
                This property is currently unavailable
              </h3>

              <p className="mt-1 text-sm leading-6 text-amber-800">
                This property is currently under review and is not actively
                listed on our website. Some of the information shown on this
                page may be incorrect or outdated.
              </p>
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={() => setShow(false)}
              aria-label="Dismiss notification"
              className="absolute right-3 top-3 rounded-full p-1.5 text-amber-700 transition hover:bg-amber-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Actions */}
          <div className="mt-5 flex justify-end">
            <button
              type="button"
              onClick={() => setShow(false)}
              className="rounded-lg border border-amber-300 bg-white px-5 py-2.5 text-sm font-medium text-amber-900 transition hover:bg-amber-100"
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}