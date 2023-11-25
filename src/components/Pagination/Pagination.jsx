import './Pagination.css';
import { useNavigate } from 'react-router-dom';

const Pagination = ({numPages, currentPage}) => {

    const currentPath = window.location.pathname;
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
        if (page === 1) navigate(`${currentPath}`);
        else navigate(`${currentPath}?page=${page}`);
    }

    return (
        <>
        <div className='pagination'>
            {numPages > 3 && (
            <div className='page-btn' onClick={() => navigate(`${currentPath}`)}>
                Trang đầu
            </div>
            )}
            {generatePageNumbers().map(page => (
                <div key={page} className={`page-btn ${currentPage === page ? 'selected-page' : ''}`} onClick={() => handlePagination(page)}>
                {page}
                </div>
            ))}
            {numPages > 3 && (
            <div className='page-btn' onClick={() => navigate(`${currentPath}?page=${numPages}`)}>
                Trang cuối
            </div>
            )}
        </div>        
        </>
    );
}

export default Pagination