import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './CategoryPage.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import PaginationURLNoParameter from '../../components/Pagination/PaginationURLNoParameter';
import axios from 'axios';
import { getFirstParagraph } from '../../utils/formatContentArticle';

const CategoryPage = () => {
    
    const navigate = useNavigate();
    const location = useLocation();

    const { category, topic } = useParams();
    const [listArticle, setListArticle] = useState([]);
    const [listTopic, setListTopic] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    const searchParams = new URLSearchParams(location.search);
    const paramPage = searchParams.get('page');
    const defaultPageValue = 1;
    const currentPage = paramPage ? parseInt(paramPage, 10) : defaultPageValue;
    const topicValue = topic ? topic : 'no-topic';

    const getArticlesCategoryTopic = async () => {
        try {
            const response = await axios.get('http://localhost:8080/skynews/api/v1/article/articles-category-page', {
                params: {
                    category: category, 
                    topic: topicValue,
                    page: currentPage,
                    pageSize: 25,
                },
            });
            setListArticle(response.data.listArticle);
            setTotalPages(Math.floor(response.data.numArticle / 25) + 1)
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const getListTopicByCategory = async (categoryName) => {
        try {
            const response = await axios.get(`http://localhost:8080/skynews/api/v1/category-topic/get-list-topic/${categoryName}`);
            setListTopic(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getListTopicByCategory(category);
    }, [category]);

    useEffect(() => {
        getArticlesCategoryTopic();
        window.scrollTo(0, 0);
    }, [category, topicValue, currentPage]);

    return (
        <>
        <div className='category-page'>
            <Header />
            <CategoryNav />
            <div className='content'>
                <div className='nav-topic-container'>
                    <div className='category-name' onClick={() => navigate(`/category/${category}`)}>{category}</div>
                    {listTopic.length > 0 && (
                    <div className='list-topic'>
                        {listTopic.map((topicItem, index) => (
                        <div key={index} className={`topic ${topicItem.name === topicValue ? 'selected-topic' : ''}` } onClick={() => navigate(`/category/${category}/${topicItem.name}`)}>
                            {topicItem.name}
                        </div>
                        ))}
                    </div>
                    )}
                </div>
                {listArticle.length > 0 && (
                <div className='first-news-group'>
                    <div className='item big-item'>
                        <img className='thumb-art' onClick={() => navigate(`/news/${listArticle[0].id}`)} src={listArticle[0].mainImage} alt='news' />
                        <div className='title-description'>
                            <div onClick={() => navigate(`/news/${listArticle[0].id}`)} className='title-news'>{listArticle[0].title}</div>
                            <div onClick={() => navigate(`/news/${listArticle[0].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(listArticle[0].content) }} className='description'></div>
                        </div>
                    </div>
                    {listArticle.length > 1 && (
                    <div className='item small-item'>
                        <div className='image-title'>
                            <img className='thumb-art' onClick={() => navigate(`/news/${listArticle[1].id}`)} src={listArticle[1].mainImage} alt='news' />
                            <div onClick={() => navigate(`/news/${listArticle[1].id}`)} className='title-news'>{listArticle[1].title}</div>
                        </div>
                        <div onClick={() => navigate(`/news/${listArticle[1].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(listArticle[1].content) }} className='description'></div>
                    </div>
                    )}
                    {listArticle.length > 2 && (
                    <div className='item small-item'>
                        <div className='image-title'>
                            <img className='thumb-art' onClick={() => navigate(`/news/${listArticle[2].id}`)} src={listArticle[2].mainImage} alt='news' />
                            <div onClick={() => navigate(`/news/${listArticle[2].id}`)} className='title-news'>{listArticle[2].title}</div>
                        </div>
                        <div onClick={() => navigate(`/news/${listArticle[2].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(listArticle[2].content) }} className='description'></div>
                    </div>
                    )}
                </div>
                )}
                <div className='row-news-group'>
                    {listArticle.length > 3 && listArticle.slice(3, 7).map((article, index) => (
                    <div key={index} className='item'>
                        <div><img className='thumb-art' onClick={() => navigate(`/news/${article.id}`)} src={article.mainImage} alt='news' /></div>
                        <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                    </div>
                    ))}
                </div>
                <div className='list-news'>
                    {listArticle.length > 7 && listArticle.slice(7).map((article, index) => (
                    <div key={index} className='item'>
                        <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' onClick={() => navigate(`/news/${article.id}`)} src={article.mainImage} alt='news' /></div>
                            <div onClick={() => navigate(`/news/${article.id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(article.content) }} className='description'></div>
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

export default CategoryPage;