import PropTypes from 'prop-types';

const Pagination = ({ pageData, onPageChange }) => {
  const { totalPages, pageNumber, totalElements, offset, pageSize } = pageData;

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`btn join-item ${i === pageNumber ? 'btn-neutral' : ''}`}
            onClick={() => onPageChange(i - 1)}
          >
            {i}
          </button>,
        );
      }
    } else {
      if (pageNumber > 2) {
        pageNumbers.push(
          <button key={1} className="btn join-item" onClick={() => onPageChange(0)}>
            1
          </button>,
        );
        if (pageNumber > 3) {
          pageNumbers.push(
            <button key="ellipsis1" className="btn btn-disabled join-item">
              ...
            </button>,
          );
        }
      }

      for (let i = Math.max(1, pageNumber - 1); i <= Math.min(pageNumber + 1, totalPages); i++) {
        pageNumbers.push(
          <button
            key={i}
            className={`btn join-item ${i === pageNumber ? 'btn-neutral' : ''}`}
            onClick={() => onPageChange(i - 1)}
          >
            {i}
          </button>,
        );
      }

      if (pageNumber < pageData.totalPages - 1) {
        if (pageNumber < pageData.totalPages - 2) {
          pageNumbers.push(
            <button key="ellipsis2" className="btn btn-disabled join-item">
              ...
            </button>,
          );
        }
        pageNumbers.push(
          <button key={totalPages} className="btn join-item" onClick={() => onPageChange(totalPages - 1)}>
            {totalPages}
          </button>,
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex w-full flex-col items-center justify-between px-8 sm:mt-4 sm:flex-row">
      <div className="my-4 sm:my-0">
        <p className="text-sm">
          Showing <span>{offset + 1}</span> to <span>{offset + pageSize}</span> of <span>{totalElements}</span> results
        </p>
      </div>
      <div className="join">{renderPageNumbers()}</div>
    </div>
  );
};

Pagination.propTypes = {
  pageData: PropTypes.shape({
    totalPages: PropTypes.number,
    pageNumber: PropTypes.number,
    totalElements: PropTypes.number,
    offset: PropTypes.number,
    pageSize: PropTypes.number,
  }).isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
