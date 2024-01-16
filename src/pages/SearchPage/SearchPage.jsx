import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './SearchPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PaginationURLHasParameter from '../../components/Pagination/PaginationURLHasParameter';
import axios from 'axios';
import { getFirstParagraph } from '../../utils/formatContentArticle';
import { LoaderComponent } from '../../utils/loading';

const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const paramQ = searchParams.get('q');

    const paramPage = searchParams.get('page');
    const defaultPageValue = 1;
    const currentPage = paramPage ? parseInt(paramPage, 10) : defaultPageValue;

    const [searchKeyword, setSearchKeyword] = useState(paramQ);
    const [selectCategory, setSelectCategory] = useState('');
    const [listArticle, setListArticle] = useState([]);
    const [listCategory, setListCategory] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    
    const [loading, setLoading] = useState(false);

    const handleSearchInputChange = (event) => {
        const value = event.target.value;
        setSearchKeyword(value);
    }

    const handleSelectCategoryChange = (event) => {
        const value = event.target.value;
        setSelectCategory(value);
        navigate(`/search?q=${searchKeyword}`);
    }

    const getListCategory = async () => {
        try {
            const response = await axios.get("http://localhost:8080/skynews/api/v1/category-topic/get-list-category");
            setListCategory(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const getArticlesBySearch = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:8080/skynews/api/v1/article/articles-search-page', {
                params: {
                    category: selectCategory, 
                    keyword: searchKeyword,
                    page: currentPage,
                    pageSize: 20,
                },
            });
            setListArticle(response.data.listArticle);
            setTotalPages(Math.floor(response.data.numArticle / 20) + 1);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchKeyword.trim() === '') return;
        else if (searchKeyword !== paramQ) {
            navigate(`/search?q=${searchKeyword}`);
            setSelectCategory('');
        }
        else return; 
    }

    useEffect(() => {
        getListCategory();
    }, []);

    useEffect(() => {
        setSearchKeyword(paramQ);
        getArticlesBySearch();
        window.scrollTo(0, 0);
    }, [paramQ, currentPage, selectCategory]);

    return (
        <>
        <div className='search-page'>
            <Header />
            <CategoryNav />
            <div className='content'>
                <div className='search-container'>
                    <form onSubmit={handleSubmit}>
                        <label className='title-search'>Tìm kiếm</label>
                        <div className='search-field'>
                            <button type='submit'><FontAwesomeIcon className='icon' icon={faMagnifyingGlass} /></button>
                            <input
                                type="text"
                                className='input-field'
                                value={searchKeyword}
                                placeholder="Tìm kiếm" 
                                onChange={handleSearchInputChange}
                                autoComplete='off'
                            />                        
                        </div>
                    </form>
                    <div className='category-filter'>
                        <div className='filter-name'>Chuyên mục</div>
                        <div className='select-field'>
                            <select value={selectCategory} onChange={handleSelectCategoryChange}>
                                <option value="">Tất cả</option>
                                {listCategory.length > 0 && listCategory.map((category, index) => (
                                <option key={index} value={category.name}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                { !loading && (
                <div className='news-container'>
                    {listArticle.length > 0 && listArticle.map((article, index) => (
                    <div key={index} className='news-item'>
                        <div className='title-description'>
                            <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                            <div onClick={() => navigate(`/news/${article.id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(article.content) }} className='description'></div>
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
                <PaginationURLHasParameter numPages={totalPages} currentPage={currentPage} />
            </div>
            <Footer />
        </div>
        </>
    );
};

export default SearchPage;