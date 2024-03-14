import exp from 'constants';
import Link from 'next/link';

const Pagination = ({ currentPage, numPages }) => {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < numPages ? currentPage + 1 : null;

  return (
    <div>
      {prevPage && (
        <Link href={`/blog/page/${prevPage}`}>
          <a>Previous</a>
        </Link>
      )}
      {nextPage && (
        <Link href={`/blog/pages/page/${nextPage}`}>
          <a>Next</a>
        </Link>
      )}
    </div>
  );
};

export default Pagination