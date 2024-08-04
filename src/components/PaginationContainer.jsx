import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

function PaginationContainer() {
  const { meta } = useLoaderData();
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const { page, pageCount } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  function handlePageChange(pageNumber) {
    const searchParam = new URLSearchParams(search);
    searchParam.set("page", pageNumber);
    navigate(`${pathname}?${searchParam.toString()}`);
  }
  if (pageCount < 2) return null;
  //JSX
  return (
    <div className="mt-16 flex justify-end ">
      <div className="join">
        <button
          className="join-item btn btn-xs border-none sm:btn-md"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              className={` join-item btn btn-xs border-none sm:btn-md ${
                pageNumber === page ? "bg-base-300 border-base-300" : ""
              } `}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          className="join-item btn btn-xs border-none sm:btn-md"
          onClick={() => {
            let nextPage=page+1
            if(nextPage>pageCount) nextPage=1
            handlePageChange(nextPage)
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default PaginationContainer;
