import exp from 'constants';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

//A Component that handles page navigation for the application
const Pagination = ({ currentPage, numPages }) => {
  const router = useRouter()
  

  const AddPage=()=>
  {
    var nextPage = currentPage < numPages ? currentPage + 1 : null;
    router.push(`/blog/pages/${nextPage}`)
  }

  const RemovePage=()=>
  {
    var prevPage = currentPage > 1 ? currentPage - 1 : null;
     router.push(`/blog/pages/${prevPage}`)
  }

  return (
    <div>
      {currentPage && (
          <button  style={{float:"left"}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>RemovePage()}>Previous</button>
      )}
      {currentPage && (
          <button style={{float:"right"}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>AddPage()}>Next</button>
      )}
    </div>
  );
};

export default Pagination