import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './NewestPage.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PaginationURLNoParameter from '../../components/Pagination/PaginationURLNoParameter';
import axios from 'axios';
import { calculateTimeAgo } from '../../utils/calculateTime';
import { getFirstParagraph } from '../../utils/formatContentArticle';

const NewestPage = () => {

    const [listArticle, setListArticle] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const paramPage = searchParams.get('page');
    const defaultPageValue = 1;
    const currentPage = paramPage ? parseInt(paramPage, 10) : defaultPageValue;

    const getNewestArticles = async () => {
        try {
            const response = await axios.get('http://localhost:8080/skynews/api/v1/article/newest', {
                params: {
                    page: currentPage,
                    pageSize: 20,
                },
            });
            setListArticle(response.data.listArticle);
            const numPageTotal = Math.floor(response.data.numArticle / 20) + 1;
            setTotalPages(numPageTotal <= 3 ? numPageTotal : 3);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        const updateTimes = () => {
          setListArticle((prevList) =>
            prevList.map((article) => ({
              ...article,
              timeAgo: calculateTimeAgo(article.decisionTimestamp),
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
        getNewestArticles();
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <>
        <div className='newest-page'>
            <Header />
            <CategoryNav />
            <div className='content'>
                <div className='title-page'>Mới nhất</div>
                <div className='news-container'>
                    {listArticle.length > 0 && listArticle.map((article, index) => (
                    <div key={index} className='news-item'>
                        <div className='time-ago'>{article.timeAgo}</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                                <div onClick={() => navigate(`/news/${article.id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(article.content) }} className='description'></div>
                            </div>
                            <div><img className='thumb-art' onClick={() => navigate(`/news/${article.id}`)} src={article.mainImage} alt='news' /></div>
                        </div>
                    </div>
                    ))}
                </div>
                <PaginationURLNoParameter numPages={totalPages} currentPage={currentPage} />
            </div>
            <Footer />
        </div>
        </>
    );
};

export default NewestPage;