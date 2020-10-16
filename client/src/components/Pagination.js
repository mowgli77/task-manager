import React from "react";


export const Pagination = ({toDosCount, pageSize, onChangedPage, currentPage, setCurrentPage, ...props}) => {

    const pagesCount = Math.ceil(toDosCount / pageSize);
    if (pagesCount < currentPage && currentPage !== 1) {
        setCurrentPage(currentPage-1)
    }

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const changePage = (p) => {
        onChangedPage(p - 1)
        setCurrentPage(p)
    }
    const prevPage = (currentPage) => {
        onChangedPage(currentPage - 2)
        setCurrentPage(currentPage - 1)
    }
    const nextPage = (currentPage) => {
        onChangedPage(currentPage)
        setCurrentPage(currentPage + 1)
    }

    const rightBorder = ((pagesCount - currentPage) > 10 && currentPage <= 4) ? 10 : ((pagesCount - currentPage) >= 6 && currentPage > 4) ? currentPage + 5 : pagesCount
    const leftBorder = (pagesCount - currentPage) < 5 ? (pagesCount - 9): currentPage > 4 ? currentPage - 4 : 1

    return <div className={"d-flex justify-content-center "}>
        <ul className={"pagination "} role={"button"}>
            {pagesCount > 0 && <li className={`page-item ${currentPage === 1 ? "disabled" : null}`}><span className={"page-link btn btn-dark"}
                                              onClick={() => prevPage(currentPage)}>
            Previous</span></li>}
            {pages.filter(p => rightBorder >= p && p >= leftBorder).map(p => {
                return <li className={`page-item ${currentPage === p ? "active": null}`}><span className={"page-link"}
                                                         onClick={() => changePage(p)}>{p}</span></li>
            })
            }
            {pagesCount > 0 && <li className={`page-item ${currentPage === pagesCount ? "disabled" : null}`}><span className={"page-link"}
                                              onClick={() => nextPage(currentPage)}>
                Next</span></li>}
        </ul>
    </div>
}

export default Pagination