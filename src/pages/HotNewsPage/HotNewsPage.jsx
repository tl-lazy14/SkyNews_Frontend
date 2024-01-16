import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './HotNewsPage.css';
import { useEffect, useState } from 'react';
import { compareDate } from '../../utils/compareDate';
import axios from 'axios';
import { formatDateToYYYYMMDD } from '../../utils/formatDateTime';
import { calculateTimeAgo } from '../../utils/calculateTime';
import { useNavigate } from 'react-router-dom';
import { getFirstParagraph } from '../../utils/formatContentArticle';
import { LoaderComponent } from '../../utils/loading';

const HotNewsPage = () => {

    const [dateArray, setDateArray] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [listArticle, setListArticle] = useState([]);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const getArticlesHotNews = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8080/skynews/api/v1/article/articles-hot-news', {
                params: { date: formatDateToYYYYMMDD(selectedDate) }
            });
            setListArticle(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        const currentDate = new Date();
        const dateArray = [];

        dateArray.push(currentDate);

        for (let i = 1; i <= 6; i++) {
            const previousDate = new Date(currentDate);
            previousDate.setDate(currentDate.getDate() - i);
            dateArray.push(previousDate);
        }

        setDateArray(dateArray);
    }, [])

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
        window.scrollTo(0, 0);
        getArticlesHotNews();
    }, [selectedDate]);

    return (
        <>
        <div className='hot-news-page'>
            <Header />
            <CategoryNav />
            <div className='content'>
                <div className='title-page'>Tin nóng</div>
                <div className='select-date-container'>
                    {dateArray.map((date, index) => (
                        <div className={`date-item ${compareDate(date, selectedDate) ? 'date-item-selected' : ''}`} key={index} onClick={() => setSelectedDate(date)}>
                            {date.getDate()}/{date.getMonth() + 1}
                        </div>
                    ))}
                </div>
                { !loading && (
                <div className='news-container'>
                    {listArticle.length > 0 && listArticle.map((article, index) => (
                    <div key={index} className='news-item'>
                        <div className='title-description'>
                            <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                            <div onClick={() => navigate(`/news/${article.id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(article.content) }} className='description'></div>
                            <div className='time-category'>
                                <div className='time-ago'>{article.timeAgo}</div>
                                <div onClick={() => navigate(`/category/${article.category.name}`)} className='category'>{article.category.name}</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' onClick={() => navigate(`/news/${article.id}`)} src={article.mainImage} alt='news' /></div>
                    </div>
                    ))}
                </div>
                )}
                { loading && (
                    <div className='content'>
                        <LoaderComponent />
                    </div>
                )}
            </div>
            <Footer />
        </div> 
        </>
    );
};

export default HotNewsPage;