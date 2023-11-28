import './Pagination.css';
import { useLocation, useNavigate } from 'react-router-dom';

const PaginationURLHasParameter = ({numPages, currentPage}) => {

    const currentURL = window.location.pathname + window.location.search;
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const paramPage = searchParams.get('page');
    const urlBeforePage = paramPage ? currentURL.slice(0, currentURL.indexOf('&page=')) : currentURL;
    const navigate = useNavigate();

    const generatePageNumbers = () => {
        if (numPages <= 3) {
          return Array.from({ length: numPages }, (_, i) => i + 1);
        }
        const pages = [];
        if (currentPage === 1) {
          pages.push(1, 2, 3);
        } else if (currentPage === numPages) {
          pages.push(numPages - 2, numPages - 1, numPages);
        } else {
          pages.push(currentPage - 1, currentPage, currentPage + 1);
        }
        return pages;
    };

    const handlePagination = (page) => {
        if (page === 1) navigate(`${urlBeforePage}`);
        else navigate(`${urlBeforePage}&page=${page}`);
    }

    return (
        <>
        <div className='pagination'>
            {numPages > 3 && (
            <div className='page-btn' onClick={() => handlePagination(1)}>
                Trang đầu
            </div>
            )}
            {generatePageNumbers().map(page => (
                <div key={page} className={`page-btn ${currentPage === page ? 'selected-page' : ''}`} onClick={() => handlePagination(page)}>
                {page}
                </div>
            ))}
            {numPages > 3 && (
            <div className='page-btn' onClick={() => handlePagination(numPages)}>
                Trang cuối
            </div>
            )}
        </div>      
        </>
    );
}

export default PaginationURLHasParameter;