'use client'
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

export function DatePicker({
    value,
    onChange,
    disabled = false,
    className,
    minDate,
    maxDate,
}: {
    value?: Date
    onChange?: (date: Date | undefined) => void
    disabled?: boolean
    className?: string
    minDate?: Date
    maxDate?: Date
}) {
    const [open, setOpen] = React.useState(false)

    return (
        <div className="relative w-full">
            <Button
                type="button"
                variant={"outline"}
                onClick={() => setOpen(!open)}
                disabled={disabled}
                className={cn(
                    "w-full justify-start text-left font-normal",
                    !value && "text-muted-foreground",
                    disabled && "opacity-50 cursor-not-allowed",
                    className
                )}
            >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {value ? format(value, "PPP") : <span>Pick a date</span>}
            </Button>

            {open && (
                <div className="absolute z-50 mt-2 bg-white border rounded shadow-md">
                    <Calendar
                        mode="single"
                        selected={value}
                        onSelect={(date) => {
                            onChange?.(date)
                            setOpen(false)
                        }}
                        disabled={[
                            ...(disabled ? [{ before: new Date(9999, 0, 1) }] : []),
                            ...(minDate ? [{ before: minDate }] : []),
                            ...(maxDate ? [{ after: maxDate }] : []),
                        ]}
                    />
                </div>
            )}
        </div>
    )
}