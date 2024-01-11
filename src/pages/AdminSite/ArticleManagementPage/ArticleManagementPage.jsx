import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './ArticleManagementPage.css';
import { formatDateFromResponse, formatDateTimeFromResponse } from '../../../utils/formatDateTime';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../components/userContext';
import api from '../../../components/axiosInterceptor';
import { getFirstParagraph } from '../../../utils/formatContentArticle';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ArticleManagementPage = () => {

    const accessToken = localStorage.getItem("accessToken");
    const { user } = useContext(UserContext);

    const [filter, setFilter] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [listArticle, setListArticle] = useState([]);
    const [numArticle, setNumArticle] = useState(0);

    const navigate = useNavigate();

    const handleFilterChange = (event) => {
        const selectedFilter = event.target.value;
        setFilter(selectedFilter);
        setCurrentPage(1);
    };

    const handleSearchInputChange = (event) => {
        const value = event.target.value;
        setSearchQuery(value);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        if (page > totalPages || page < 1) return;
        else setCurrentPage(page);
    };

    const getListApprovedArticles = async () => {
        try {
            const response = await api.get(`/article/get-approved-articles/${user.editorCategory}`, {
                params: { 
                    status: filter,
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

    const handleDeletePostedArticle = async (id) => {
        try {
            await api.delete(`/article/delete-posted/${id}`, {
                headers: { token: `Bearer ${accessToken}` }
            });
            toast.success('Gỡ bài viết thành công!', {
                position: toast.POSITION.TOP_CENTER,
                containerId: "removeArticleToast",
                autoClose: 3000,
                hideProgressBar: true,
                closeButton: false,
                theme: 'colored',
            });
            getListApprovedArticles();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        getListApprovedArticles();
        window.scrollTo(0, 0);
    }, [currentPage, filter, searchQuery]);

    return (
        <>
        <ToastContainer containerId="removeArticleToast" limit={1}/>
        <div className='article-management-page'>
            <div className='top-container'>
                <div><h2 className="name-page">Quản lý tin tức - <span style={{ color: '#312fb5' }}>{user.editorCategory}</span></h2></div>
            </div>
            <div className='action-container'>
                <div className='left-action-container'>
                    <select value={filter} onChange={handleFilterChange}>
                        <option value="">Tất cả</option>
                        <option value="accept">Đã đăng</option>
                        <option value="decline">Đã từ chối</option>
                    </select>
                </div>
                <div className='right-action-container'>
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
            </div>
            <div className='list-articles-container'>
                {listArticle.length > 0 && listArticle.map((article, index) => (
                <div className='article-item'>
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
                        {article.approvalStatus === 'accept' && <div className='posted-timestamp'>Đã đăng lúc {formatDateTimeFromResponse(new Date(article.decisionTimestamp).toLocaleString())}</div>}
                        {article.approvalStatus === 'decline' && <div className='declined-timestamp'>Đã từ chối lúc {formatDateTimeFromResponse(new Date(article.decisionTimestamp).toLocaleString())}</div>}
                        <div className='detail-status'>
                            {article.approvalStatus === 'accept' && (
                            <div onClick={() => handleDeletePostedArticle(article.id)} className='btn delete'>
                                <div>Xóa tin</div>
                                <div><FontAwesomeIcon style={{fontSize: '18px'}} icon={faTrashCan} /></div>
                            </div>
                            )}
                            <div onClick={() => navigate(`/admin/editor/list-articles/news/${article.id}`)} className='btn view-detail-btn'>Xem chi tiết</div>
                            {article.approvalStatus === 'accept' && <div className='btn accept'>Đã đăng</div>}
                            {article.approvalStatus === 'decline' && <div className='btn decline'>Đã từ chối</div>}
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
        </>
    );
}

export default ArticleManagementPage;