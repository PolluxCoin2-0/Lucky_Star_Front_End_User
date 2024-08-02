import ReactPaginate from 'react-paginate';
import { useMemo } from 'react';

const Pagination = ({ totalPages, onPageChange }) => {
  const totalPageNumbers = useMemo(() => Math.ceil(50 / 10), [totalPages]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    onPageChange(selectedPage);
  };

  return (
    <nav className="flex items-center justify-center gap-x-2 py-4" aria-label="Pagination">
      <ReactPaginate
        previousLabel={
          <svg
            className="shrink-0 size-4.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        }
        nextLabel={
          <svg
            className="shrink-0 size-4.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        }
        breakLabel="....."
        breakClassName="min-h-[38px] min-w-[38px] flex justify-center items-center py-2 text-sm text-gray-800 tracking-[6px]"
        pageCount={totalPageNumbers}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="flex items-center gap-x-2"
        pageClassName="min-h-[38px] min-w-[38px] flex justify-center items-center py-2 px-3 text-sm rounded-lg bg-white text-black hover:bg-gray-200 hover:text-black"
        pageLinkClassName="w-full h-full flex items-center justify-center"
        previousClassName="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg bg-white text-black hover:bg-gray-200"
        nextClassName="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg bg-white text-black hover:bg-gray-200"
        activeClassName="bg-black text-white rounded-lg"
        disabledClassName="opacity-50 pointer-events-none"
      />
    </nav>
  );
};

export default Pagination;
