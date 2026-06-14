'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Grid, List } from 'lucide-react';
import { create } from 'zustand';

function ViewType() {
  const { viewType, setViewType } = useViewTypeStore();

  return (
    <div className="md:flex gap-2 hidden">
      <Button
        variant={viewType === 'grid' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setViewType('grid')}
      >
        <Grid className="h-4 w-4" />
      </Button>
      <Button
        variant={viewType === 'list' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setViewType('list')}
      >
        <List className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default ViewType;



type ViewType = 'grid' | 'list';

type ViewTypeStore = {
  viewType: ViewType;
  setViewType: (type: ViewType) => void;
};

export const useViewTypeStore = create<ViewTypeStore>((set) => ({
  viewType: 'grid',
  setViewType: (type) => set({ viewType: type }),
}));
