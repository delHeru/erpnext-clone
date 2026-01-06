"use client";

import { Button, Spinner } from "@heroui/react";

type TableFooterProps = {
  shown: number;
  total: number;
  loading?: boolean;
  onLoadMore: () => void;
};

export default function TableFooter({
  shown,
  total,
  loading,
  onLoadMore,
}: TableFooterProps) {
  if (total === 0) return null;

  const hasMore = shown < total;

  return (
    <div className="flex items-center justify-between mt-4 px-2">
      {/* Info */}
      <span className="text-sm text-default-500">
        {shown} of {total}
      </span>

      {/* Action */}
      {hasMore && (
        <Button
          size="sm"
          variant="flat"
          onPress={onLoadMore}
          isDisabled={loading}
          startContent={
            loading ? <Spinner size="sm" /> : null
          }
        >
          {loading ? "Loading..." : "Load More"}
        </Button>
      )}
    </div>
  );
}
