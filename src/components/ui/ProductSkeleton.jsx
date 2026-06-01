/* ── Shimmer skeleton matching the new card's proportions ────── */
export default function ProductSkeleton() {
  return (
    <div
      className="rounded-[20px] overflow-hidden"
      style={{
        border: '1px solid rgba(0,0,0,0.07)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
      }}
    >
      {/* Image placeholder */}
      <div className="relative" style={{ aspectRatio: '4/3', background: '#F3F4F6' }}>
        <div className="absolute inset-0 shimmer" />
      </div>

      {/* Body placeholders */}
      <div className="bg-white p-5 space-y-3">
        {/* category + rating row */}
        <div className="flex justify-between items-center">
          <div className="h-3 w-20 rounded-full shimmer" />
          <div className="h-5 w-12 rounded-md shimmer" />
        </div>
        {/* title */}
        <div className="h-5 w-3/4 rounded-lg shimmer" />
        {/* description */}
        <div className="space-y-1.5">
          <div className="h-3 w-full rounded shimmer" />
          <div className="h-3 w-5/6 rounded shimmer" />
        </div>
        {/* meta pills */}
        <div className="flex gap-2 pt-1">
          <div className="h-6 w-20 rounded-lg shimmer" />
          <div className="h-6 w-24 rounded-lg shimmer" />
        </div>
        {/* divider */}
        <div className="h-px w-full bg-gray-100 my-1" />
        {/* price + btn row */}
        <div className="flex items-center justify-between pt-1">
          <div className="space-y-1">
            <div className="h-3 w-10 rounded shimmer" />
            <div className="h-7 w-16 rounded-lg shimmer" />
          </div>
          <div className="h-9 w-28 rounded-xl shimmer" />
        </div>
      </div>
    </div>
  );
}
