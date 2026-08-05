'use client';

import { useVisitStore } from '@/stores/visit-store';
import VisitCard from '@/components/global/cards/visit-card';

interface VisitListProps {
  properties: any[];
}

export default function VisitList({ properties }: VisitListProps) {
  const { visitIds } = useVisitStore();

  const filteredProperties = properties.filter((property) =>
    visitIds.includes(property.propertyCode)
  );

  if (filteredProperties.length === 0) {
    return <p>No visits found.</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      {filteredProperties.map((property) => (
        <VisitCard
          key={property.propertyCode}
          property={property}
        />
      ))}
    </div>
  );
}