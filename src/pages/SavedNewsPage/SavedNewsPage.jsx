import './SavedNewsPage.css';
import Header from '../../components/Header/Header';
import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDateMonthYear } from '../../utils/formatDateTime';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import PaginationURLNoParameter from '../../components/Pagination/PaginationURLNoParameter';
import api from '../../components/axiosInterceptor';
import { UserContext } from '../../components/userContext';
import { getFirstParagraph } from '../../utils/formatContentArticle';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoaderComponent } from '../../utils/loading';

const SavedNewsPage = () => {

    const [listArticle, setListArticle] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    
    const [loading, setLoading] = useState(false);

    const { user } = useContext(UserContext);
    const accessToken = localStorage.getItem("accessToken");
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const paramPage = searchParams.get('page');
    const defaultPageValue = 1;
    const currentPage = paramPage ? parseInt(paramPage, 10) : defaultPageValue;

    const getSavedArticles = async () => {
        try {
            setLoading(true);
            const response = await api.get(`/article/saved-news/${user.id}`, {
                params: {
                    page: currentPage,
                    pageSize: 10,
                },
                headers: { token: `Bearer ${accessToken}` }
            });
            setListArticle(response.data.listArticle);
            setTotalPages(Math.floor(response.data.numArticle / 10) + 1);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleUnsaveArticle = async (articleId) => {
        try {
            await api.delete(`/article/un-save/${articleId}/${user.id}`, {
                headers: { token: `Bearer ${accessToken}` }
            });
            toast.success('Bỏ lưu bài viết thành công!', {
                position: toast.POSITION.TOP_RIGHT,
                containerId: 'saveArticlePageToast',
                autoClose: 2000,
                hideProgressBar: true,
                closeButton: false,
                theme: 'colored',
            });
            getSavedArticles();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        getSavedArticles();
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <>
        <ToastContainer containerId="saveArticlePageToast" limit={1}/>
        <div className='saved-news-page'>
            <Header />
            <CategoryNav />
            <div className='content'>
                <div className='title-page'>Tin đã lưu</div>
                { !loading && (
                <div className='news-container'>
                    {listArticle.length > 0 && listArticle.map((article, index) => (
                    <div key={index} className='news-item'>
                        <div><img className='thumb-art' onClick={() => navigate(`/news/${article.id}`)} src={article.mainImage} alt='news' /></div>
                        <div className='title-description'>
                            <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                            <div onClick={() => navigate(`/news/${article.id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(article.content) }} className='description'></div>
                            <div className='category-date-saveIcon'>
                                <div className='category-date'><span onClick={() => navigate(`/category/${article.category.name}`)} className='category'>{article.category.name}</span> - {getFormattedDateMonthYear(new Date(article.decisionTimestamp))}</div>
                                <div><FontAwesomeIcon onClick={() => handleUnsaveArticle(article.id)} title='Bỏ lưu' className='saved-icon' icon={faBookmark} /></div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                )}
                { loading && (
                    <div className='content'>
                        <LoaderComponent />
                    </div>
                )}
                <PaginationURLNoParameter numPages={totalPages} currentPage={currentPage} />
            </div>
            <Footer />
        </div>
        </>
    );
}

export default SavedNewsPage;