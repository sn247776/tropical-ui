'use client'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useVisitStore } from '@/stores/visit-store';
import { CalendarPlus, CalendarMinus } from 'lucide-react';


interface VisitButtonProps {
  id: string;
  className?:string;
  isAvailable:boolean;
}

export function VisitButton({ id,className,isAvailable }: VisitButtonProps) {
  const { visitIds, addVisit, removeVisit } = useVisitStore();
  const isAdded = visitIds.includes(id);

  const handleClick = () => {
    if (isAdded) {
      removeVisit(id);
    } else {
      addVisit(id);
    }
  };

  return (
    <Button disabled={!isAvailable} variant={isAdded ? 'destructive' : 'outline' } onClick={handleClick} className={cn("className w-[120px] flex  gap-2", className)}>
      {isAdded ? (
        <>
          <CalendarMinus className="h-4 w-4" />
          Remove
        </>
      ) : (
        <>
          <CalendarPlus className="h-4 w-4" />
          Add Visit
        </>
      )}
    </Button>
  );
}