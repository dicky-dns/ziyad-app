type Props = {
  page: number;
  lastPage: number;
  onChange: (page: number) => void;
};

const VISIBLE_PAGE_COUNT = 4;

function getVisiblePages(page: number, lastPage: number): number[] {
  const count = Math.min(VISIBLE_PAGE_COUNT, lastPage);

  if (count <= 0) {
    return [];
  }

  let startPage = Math.max(1, page - Math.floor(count / 2));
  const endPage = startPage + count - 1;

  if (endPage > lastPage) {
    startPage = Math.max(1, lastPage - count + 1);
  }

  return Array.from({ length: count }, (_, index) => startPage + index);
}

export default function Pagination({ page, lastPage, onChange }: Props) {
  const visiblePages = getVisiblePages(page, lastPage);
  const isPrevDisabled = page <= 1;
  const isNextDisabled = page >= lastPage;

  if (lastPage <= 1) {
    return null;
  }

  return (
    <div
      aria-label="Pagination"
      className="mt-8 flex flex-col items-center sm:mt-10 sm:flex-row justify-between"
    >
        <p className="mb-5 font-medium text-gray-500 text-sm md:text-base">
            Halaman <span className="text-[#2f7f31]">{page}</span> dari{" "}
            <span className="text-[#f58219]">{lastPage}</span>
        </p>
        <div className="flex items-center gap-2 rounded-full border border-[#d8ead4] bg-white/90 p-2 shadow-[0_10px_30px_rgba(47,127,49,0.08)]">
            <button
            type="button"
            onClick={() => onChange(page - 1)}
            disabled={isPrevDisabled}
            className={`min-w-[72px] rounded-full px-3 py-2 text-sm font-semibold transition sm:min-w-[88px] sm:px-4 ${
                isPrevDisabled
                ? "cursor-not-allowed bg-gray-100 text-gray-400"
                : "bg-[#fff1e4] text-[#f58219] hover:bg-[#fddfbe]"
            }`}
            >
            Prev
            </button>

            <div className="flex items-center gap-1.5 sm:gap-2">
            {visiblePages.map((pageNumber) => (
                <button
                key={pageNumber}
                type="button"
                onClick={() => onChange(pageNumber)}
                aria-current={page === pageNumber ? "page" : undefined}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition sm:h-11 sm:w-11 ${
                    page === pageNumber
                    ? "bg-[#4aa63f] text-white shadow-[0_10px_20px_rgba(74,166,63,0.28)]"
                    : "bg-[#f3f9f1] text-[#2f7f31] hover:bg-[#dff0db]"
                }`}
                >
                {pageNumber}
                </button>
            ))}
            </div>

            <button
            type="button"
            onClick={() => onChange(page + 1)}
            disabled={isNextDisabled}
            className={`min-w-[72px] rounded-full px-3 py-2 text-sm font-semibold transition sm:min-w-[88px] sm:px-4 ${
                isNextDisabled
                ? "cursor-not-allowed bg-gray-100 text-gray-400"
                : "bg-[#fff1e4] text-[#f58219] hover:bg-[#fddfbe]"
            }`}
            >
            Next
            </button>
        </div>
    </div>
  );
}
