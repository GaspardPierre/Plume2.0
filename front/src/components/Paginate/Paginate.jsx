import ReactPaginate from 'react-paginate';
// ...

export default function Poems() {
  // ...
  const [currentPage, setCurrentPage] = useState(1);
  const poemsPerPage = 10;

  const lastPoemIndex = currentPage * poemsPerPage;
  const firstPoemIndex = lastPoemIndex - poemsPerPage;
  const currentPoems = poems.slice(firstPoemIndex, lastPoemIndex);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  // ...

  return (
    <>
  
      <ReactPaginate
        previousLabel={'précédent'}
        nextLabel={'suivant'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={Math.ceil(poems.length / poemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </>
  );
}
