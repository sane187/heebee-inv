import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setMostOrderPagination } from '../../../store/actionCreators/Customers/CustomerAction';
const MostPopularOrderPagination = ({pageNum}) => {
    const [pageCount, setPageCount] = useState(pageNum);
    const page = useSelector(state => state.mostOrderPage);
    const dispatch=useDispatch();
    useEffect(()=>{
        setPageCount(pageNum)
    },[pageNum])

    const handlePageClick = (event) => {
        dispatch(setMostOrderPagination(event.selected + 1))// const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected + 1}, which is offset `
        );

    };

    return (
        <div className='container '>

            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                activeClassName="active"
                forcePage={page-1}
            />
        </div>
    );
};

export default MostPopularOrderPagination;