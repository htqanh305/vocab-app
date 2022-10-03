import { useState } from 'react'


function Pagination({ vocabs, Card, cardLimit }) {
    const [pages] = useState(Math.ceil(vocabs.length / cardLimit));
    const [currentPage, setCurrentPage] = useState(1);
    var [pageLimit] = useState(5);
  
    function goToNextPage() {
        setCurrentPage((page) => page + 1)
    }
  
    function goToPreviousPage() {
        setCurrentPage((page) => page - 1)
    }
  
    function changePage(event) {
        const pageNumber = Number(event.target.textContent)
        setCurrentPage(pageNumber)
    }
  
    const getPaginatedData = () => {
        const startIndex = currentPage * cardLimit - cardLimit
        const endIndex = startIndex + cardLimit
        return vocabs.slice(startIndex, endIndex)
    };
  
    const getPaginationGroup = () => {
        let start = currentPage - Math.floor(pageLimit/2)
        let end = currentPage + Math.floor(pageLimit/2)
        
        if (start < 1) {
          start = 1
          end = pageLimit
        }

        if (end > pages) {
          start = pages - (pageLimit - 1)

          if (start < 1){
            start = 1
          }
          end = pages
        }

        if (pages < pageLimit ) {
          pageLimit = pages
        }

        
        return new Array(pageLimit).fill().map((_, idx) => start + idx )
    };
  
    return (
        <div>
          
      
          {/* show the posts */}
          <div className="vocabs">
            {getPaginatedData().map((vocab) => (
              <Card key={vocab._id} vocab={vocab} />
            ))}
          </div>
      
          {/* show the pagiantion
              it consists of next and previous buttons
              along with page numbers, in our case, 5 page
              numbers at a time
          */}
          <div className="pagination">
            {/* previous button */}
            <a
              onClick={goToPreviousPage}
              className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
            >
              prev
            </a>
      
            {/* show page numbers */}
            {getPaginationGroup().map((item, index) => (
              <a
                key={index}
                onClick={changePage}
                className={`pagination-item ${currentPage === item ? 'active' : null}`}
              >
                <span>{item}</span>
              </a>
            ))}
      
            {/* next button */}
            <a
              onClick={goToNextPage}
              className={`next ${currentPage === pages ? 'disabled' : ''}`}
            >
              next
            </a>
          </div>
        </div>
      )

  }

  export default Pagination

