import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './PendingArticlesPage.css';
import { formatDateFromResponse } from '../../../utils/formatDateTime';
import { useNavigate } from 'react-router-dom';
import api from '../../../components/axiosInterceptor';
import { UserContext } from '../../../components/userContext';
import { getFirstParagraph } from '../../../utils/formatContentArticle';
import { calculateTimeAgo } from '../../../utils/calculateTime';

const PendingArticlesPage = () => {

    const accessToken = localStorage.getItem("accessToken");
    const { user } = useContext(UserContext);

    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(3);
    const [listArticle, setListArticle] = useState([]);
    const [numArticle, setNumArticle] = useState(0);

    const navigate = useNavigate();

    const handleSearchInputChange = (event) => {
        const value = event.target.value;
        setSearchQuery(value);
        setCurrentPage(1);
    }

    const handlePageChange = (page) => {
        if (page > totalPages || page < 1) return;
        else setCurrentPage(page);
    };

    const getListPendingArticles = async () => {
        try {
            const response = await api.get(`/article/pending-articles/${user.editorCategory}`, {
                params: { 
                    searchQuery: searchQuery,
                    page: currentPage,
                    pageSize: 10,
                },
                headers: { token: `Bearer ${accessToken}` }
            });
            setListArticle(response.data.listArticle);
            setNumArticle(response.data.numArticle);
            setTotalPages(Math.floor(response.data.numArticle / 10) + 1);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const updateTimes = () => {
          setListArticle((prevList) =>
            prevList.map((article) => ({
              ...article,
              timeAgo: calculateTimeAgo(article.sendEditorTimestamp),
            }))
          );
          requestAnimationFrame(updateTimes);
        };
    
        // Bắt đầu cập nhật thời gian
        updateTimes();
    
        // Hủy bỏ cập nhật khi component unmount
        return () => cancelAnimationFrame(updateTimes);
      }, [listArticle]);

    useEffect(() => {
        getListPendingArticles();
        window.scrollTo(0, 0);
    }, [currentPage, searchQuery]);

    return (
        <div className='pending-articles-page'>
            <h2 className="name-page">Danh sách bài báo chờ duyệt</h2>
            <div className='action-container'>
                <div className="num-articles">{numArticle} bài báo</div>
                <div className="search-box">
                    <input
                        type="text"
                        value={searchQuery}
                        placeholder="Tìm kiếm theo tiêu đề bài báo" 
                        onChange={handleSearchInputChange}
                    />
                    <FontAwesomeIcon className='icon-search' icon={faMagnifyingGlass} />
                </div>
            </div>
            <div className='list-articles-container'>
                {listArticle.length > 0 && listArticle.map((article, index) => (
                <div key={index} className='article-item'>
                    <img className='thumb-art' src={article.mainImage} alt='news' />
                    <div className='content-article'>
                        <div className='title-news'>{article.title}</div>
                        <div dangerouslySetInnerHTML={{ __html: getFirstParagraph(article.content) }} className='description'></div>
                        <div className='category-topic-isHot'>
                            <span className='category'>{article.category.name}</span>
                            {article.topic && <span className='topic'> - {article.topic.name}</span>}
                            {article.isHot === 1 && <span className='isHot'> - Tin nóng</span>}
                        </div>
                        <div className='date-news'>{formatDateFromResponse(new Date(article.dateNews).toLocaleString())}</div>
                        <div className='time-send-ago'>{article.timeAgo}</div>
                        <div className='detail-status'>
                            <div onClick={() => navigate(`/admin/editor/pending-articles/news/${article.id}`)} className='btn view-detail-btn'>Xem chi tiết</div>
                            <div className='btn pending'>Đang chờ duyệt</div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="pagination">
                <div className="btn-page" onClick={() => handlePageChange(1)}>Trang đầu</div>
                <div className="btn-page" onClick={() => handlePageChange(currentPage - 1)}>Trang trước</div>
                <div className='text-page'>Trang <span style={{fontWeight: "700"}}>{currentPage}</span> trên {totalPages}</div>
                <div className="btn-page" onClick={() => handlePageChange(currentPage + 1)}>Trang sau</div>
                <div className="btn-page" onClick={() => handlePageChange(totalPages)}>Trang cuối</div>
            </div>
        </div>
    );
}

export default PendingArticlesPage;