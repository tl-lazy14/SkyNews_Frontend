import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './MostViewdPage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getFirstParagraph } from '../../utils/formatContentArticle';
import { LoaderComponent } from '../../utils/loading';

const MostViewedPage = () => {

    const [listArticle, setListArticle] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getArticlesMostView = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8080/skynews/api/v1/article/articles-most-view');
            setListArticle(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getArticlesMostView();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div className='most-viewed-page'>
            <Header />
            <CategoryNav />
            <div className='content'>
                <div className='title-page'>Xem nhiều</div>
                { !loading && (
                <div className='news-container'>
                    {listArticle.length > 0 && listArticle.map((article, index) => (
                    <div key={index} className='news-item'>
                        <div><img className='thumb-art' onClick={() => navigate(`/news/${article.id}`)} src={article.mainImage} alt='news' /></div>
                        <div className='title-description-category'>
                            <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                            <div onClick={() => navigate(`/news/${article.id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(article.content) }} className='description'></div>
                            <div onClick={() => navigate(`/category/${article.category.name}`)} className='category'>{article.category.name}</div>
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
            </div>
            <Footer />
        </div>
        </>
    );
};

export default MostViewedPage;