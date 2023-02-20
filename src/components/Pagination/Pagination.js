import React from 'react'
import "./Pagination.modules.css"

function Pagination(props) {
    const {totalPosts, postPerPage, currentPage, setCurrentPage} = props
    const pages = []
    for (let index = 1; index <= Math.ceil(totalPosts / postPerPage); index++) {
        pages.push(index)
        
    }
  return (
    <div className='pagination_container'>
        {pages.map((page, index) => (
            <button key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}
            >
                {page}
            </button>
        ))}
    </div>
  )
}

export default Pagination