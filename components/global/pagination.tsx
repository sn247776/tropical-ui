'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

interface PaginationProps {
  totalPage: number;
}

function Pagination({ totalPage }: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [page, setPage] = useState(1);

  // Update state from URL params
  useEffect(() => {
    const pageParam = searchParams.get('page');
    if (pageParam) {
      setPage(Number(pageParam));
    }
  }, [searchParams]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPage || totalPage === 0) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(newPage));
    setPage(newPage);
    router.push(`${pathname}?${params.toString()}`);
  };

  const goToFirstPage = () => handlePageChange(1);
  const goToLastPage = () => handlePageChange(totalPage);

  // Calculate page range for pagination buttons
  const pageRange = [];
  const halfRange = 2;
  let start = Math.max(1, page - halfRange);
  let end = Math.min(totalPage, page + halfRange);

  if (end - start + 1 < 5) {
    if (page <= halfRange + 1) {
      end = Math.min(5, totalPage);
    } else if (page >= totalPage - halfRange) {
      start = Math.max(1, totalPage - 4);
    }
  }

  for (let i = start; i <= end; i++) {
    pageRange.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-1">
      <Button size="icon" onClick={goToFirstPage} disabled={page === 1}>
        <ChevronsLeft size={18} />
      </Button>

      <Button size="icon" onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        <ChevronLeft size={18} />
      </Button>

      {pageRange.map((pageNum) => (
        <Button
          key={pageNum}
          onClick={() => handlePageChange(pageNum)}
          variant={pageNum === page ? 'default' : 'outline'}
          size="icon"
        >
          {pageNum}
        </Button>
      ))}

      <Button size="icon" onClick={() => handlePageChange(page + 1)} disabled={page === totalPage}>
        <ChevronRight size={18} />
      </Button>

      <Button size="icon" onClick={goToLastPage} disabled={page === totalPage}>
        <ChevronsRight size={18} />
      </Button>
    </div>
  );
}

export default Pagination;
