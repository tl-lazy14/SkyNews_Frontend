import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Homepage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { getFirstParagraph } from '../../utils/formatContentArticle';

const Homepage = () => {

    const navigate = useNavigate();
    const [listArticleMix, setListArticleMix] = useState([]);
    const [articleBusiness, setArticleBusiness] = useState([]);
    const [articleRealEstate, setArticleRealEstate] = useState([]);
    const [articleSport, setArticleSport] = useState([]);
    const [articleEntertainment, setArticleEntertainment] = useState([]);
    const [articleHealth, setArticleHealth] = useState([]);
    const [articleLife, setArticleLife] = useState([]);
    const [articleEducation, setArticleEducation] = useState([]);
    const [articleScience, setArticleScience] = useState([]);
    const [articleDigitizing, setArticleDigitizing] = useState([]);
    const [articleNews, setArticleNews] = useState([]);
    const [articleWorld, setArticleWorld] = useState([]);
    const [articleLaw, setArticleLaw] = useState([]);
    const [articleTourism, setArticleTourism] = useState([]);
    const [articleCar, setArticleCar] = useState([]);

    const getArticlesHomepage = async () => {
        try {
            const response = await axios.get('http://localhost:8080/skynews/api/v1/article/articles-homepage');
            const data = response.data;

            setListArticleMix(data.listArticleMix);
            setArticleBusiness(data.articleBusiness);
            setArticleRealEstate(data.articleRealEstate);
            setArticleSport(data.articleSport);
            setArticleEntertainment(data.articleEntertainment);
            setArticleHealth(data.articleHealth);
            setArticleLife(data.articleLife);
            setArticleEducation(data.articleEducation);
            setArticleScience(data.articleScience);
            setArticleDigitizing(data.articleDigitizing);
            setArticleNews(data.articleNews);
            setArticleWorld(data.articleWorld);
            setArticleLaw(data.articleLaw);
            setArticleTourism(data.articleTourism);
            setArticleCar(data.articleCar);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        getArticlesHomepage();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div className='homepage'>
            <Header />
            <CategoryNav />
            <div className='content'>
                {listArticleMix.length > 0 && (
                <div className='first-news-group'>
                    {listArticleMix.length > 0 && (
                    <div className='item news-1'>
                        <div><img onClick={() => navigate(`/news/${listArticleMix[0].id}`)} className='thumb-art' src={listArticleMix[0].mainImage} alt='news' /></div>
                        <div>
                            <div onClick={() => navigate(`/news/${listArticleMix[0].id}`)} className='title-news'>{listArticleMix[0].title}</div>
                            <div onClick={() => navigate(`/news/${listArticleMix[0].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(listArticleMix[0].content) }} className='description'></div>
                            <div className='category' onClick={() => navigate(`/category/${listArticleMix[0].category.name}`)}>{listArticleMix[0].category.name}</div>
                        </div>
                    </div>
                    )}
                    {listArticleMix.length > 1 && (
                    <div className='item news-2'>
                        <div><img onClick={() => navigate(`/news/${listArticleMix[1].id}`)} className='thumb-art' src={listArticleMix[1].mainImage} alt='news' /></div>
                        <div onClick={() => navigate(`/news/${listArticleMix[1].id}`)} className='title-news'>{listArticleMix[1].title}</div>
                        <div onClick={() => navigate(`/news/${listArticleMix[1].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(listArticleMix[1].content) }} className='description'></div>
                    </div>
                    )}
                    {listArticleMix.length > 1 && listArticleMix.slice(2, 6).map((article, index) => (
                    <div key={index} className='item bottom-news'>
                        <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                        <div><img onClick={() => navigate(`/news/${article.id}`)} className='thumb-art' src={article.mainImage} alt='news' /></div>
                    </div>
                    ))}
                </div>
                )}

                {listArticleMix.length > 0 && (
                <div className='center-news-group'>
                    <div className='left-container'>
                        {listArticleMix.length > 6 && listArticleMix.slice(6).map((article, index) => (
                        <div key={index} className='news'>
                            <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                            <div className='image-content'>
                                <div><img onClick={() => navigate(`/news/${article.id}`)} className='thumb-art' src={article.mainImage} alt='news' /></div>
                                <div onClick={() => navigate(`/news/${article.id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(article.content) }} className='description'></div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className='right-container'>
                        {articleBusiness.length > 0 && (
                        <div className='news-by-category'>
                            <div className='category-name'>Kinh doanh</div>
                            <div className='layout-news'>
                                {articleBusiness.length > 0 && (
                                <div className='item news-1'>
                                    <div><img onClick={() => navigate(`/news/${articleBusiness[0].id}`)} className='thumb-art' src={articleBusiness[0].mainImage} alt='news' /></div>
                                    <div>
                                        <div onClick={() => navigate(`/news/${articleBusiness[0].id}`)} className='title-news'>{articleBusiness[0].title}</div>
                                        <div onClick={() => navigate(`/news/${articleBusiness[0].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleBusiness[0].content) }} className='description'></div>
                                    </div>
                                </div>
                                )}
                                {articleBusiness.length > 1 && (
                                <div className='item news-2'>
                                    <div onClick={() => navigate(`/news/${articleBusiness[1].id}`)} className='title-news'>{articleBusiness[1].title}</div>
                                    <div onClick={() => navigate(`/news/${articleBusiness[1].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleBusiness[1].content) }} className='description'></div>     
                                </div>
                                )}
                                {articleBusiness.length > 2 && articleBusiness.slice(2).map((article, index) => (
                                <div key={index} className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                                </div>
                                ))}
                            </div>
                        </div>
                        )}
                        {articleRealEstate.length > 0 && (
                        <div className='news-by-category'>
                            <div className='category-name'>Bất động sản</div>
                            <div className='layout-news'>
                                {articleRealEstate.length > 0 && (
                                <div className='item news-1'>
                                    <div><img onClick={() => navigate(`/news/${articleRealEstate[0].id}`)} className='thumb-art' src={articleRealEstate[0].mainImage} alt='news' /></div>
                                    <div>
                                        <div onClick={() => navigate(`/news/${articleRealEstate[0].id}`)} className='title-news'>{articleRealEstate[0].title}</div>
                                        <div onClick={() => navigate(`/news/${articleRealEstate[0].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleRealEstate[0].content) }} className='description'></div>
                                    </div>
                                </div>
                                )}
                                {articleRealEstate.length > 1 && (
                                <div className='item news-2'>
                                    <div onClick={() => navigate(`/news/${articleRealEstate[1].id}`)} className='title-news'>{articleRealEstate[1].title}</div>
                                    <div onClick={() => navigate(`/news/${articleRealEstate[1].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleRealEstate[1].content) }} className='description'></div>     
                                </div>
                                )}
                                {articleRealEstate.length > 2 && articleRealEstate.slice(2).map((article, index) => (
                                <div key={index} className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                                </div>
                                ))}
                            </div>
                        </div>
                        )}
                        {articleSport.length > 0 && (
                        <div className='news-by-category'>
                            <div className='category-name'>Thể thao</div>
                            <div className='layout-news'>
                                {articleSport.length > 0 && (
                                    <div className='item news-1'>
                                        <div><img onClick={() => navigate(`/news/${articleSport[0].id}`)} className='thumb-art' src={articleSport[0].mainImage} alt='news' /></div>
                                        <div>
                                            <div onClick={() => navigate(`/news/${articleSport[0].id}`)} className='title-news'>{articleSport[0].title}</div>
                                            <div onClick={() => navigate(`/news/${articleSport[0].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleSport[0].content) }} className='description'></div>
                                        </div>
                                    </div>
                                )}
                                {articleSport.length > 1 && (
                                    <div className='item news-2'>
                                        <div onClick={() => navigate(`/news/${articleSport[1].id}`)} className='title-news'>{articleSport[1].title}</div>
                                        <div onClick={() => navigate(`/news/${articleSport[1].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleSport[1].content) }} className='description'></div>
                                    </div>
                                )}
                                {articleSport.length > 2 && articleSport.slice(2).map((article, index) => (
                                    <div key={index} className='item bottom-news'>
                                        <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                        <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        )}
                        {articleEntertainment.length > 0 && (
                        <div className='news-by-category'>
                            <div className='category-name'>Giải trí</div>
                            <div className='layout-news'>
                                {articleEntertainment.length > 0 && (
                                    <div className='item news-1'>
                                        <div><img onClick={() => navigate(`/news/${articleEntertainment[0].id}`)} className='thumb-art' src={articleEntertainment[0].mainImage} alt='news' /></div>
                                        <div>
                                            <div onClick={() => navigate(`/news/${articleEntertainment[0].id}`)} className='title-news'>{articleEntertainment[0].title}</div>
                                            <div onClick={() => navigate(`/news/${articleEntertainment[0].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleEntertainment[0].content) }} className='description'></div>
                                        </div>
                                    </div>
                                )}
                                {articleEntertainment.length > 1 && (
                                    <div className='item news-2'>
                                        <div onClick={() => navigate(`/news/${articleEntertainment[1].id}`)} className='title-news'>{articleEntertainment[1].title}</div>
                                        <div onClick={() => navigate(`/news/${articleEntertainment[1].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleEntertainment[1].content) }} className='description'></div>
                                    </div>
                                )}
                                {articleEntertainment.length > 2 && articleEntertainment.slice(2).map((article, index) => (
                                    <div key={index} className='item bottom-news'>
                                        <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                        <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        )}
                        {articleHealth.length > 0 && (
                        <div className='news-by-category'>
                            <div className='category-name'>Sức khỏe</div>
                            <div className='layout-news'>
                                {articleHealth.length > 0 && (
                                    <div className='item news-1'>
                                        <div><img onClick={() => navigate(`/news/${articleHealth[0].id}`)} className='thumb-art' src={articleHealth[0].mainImage} alt='news' /></div>
                                        <div>
                                            <div onClick={() => navigate(`/news/${articleHealth[0].id}`)} className='title-news'>{articleHealth[0].title}</div>
                                            <div onClick={() => navigate(`/news/${articleHealth[0].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleHealth[0].content) }} className='description'></div>
                                        </div>
                                    </div>
                                )}
                                {articleHealth.length > 1 && (
                                    <div className='item news-2'>
                                        <div onClick={() => navigate(`/news/${articleHealth[1].id}`)} className='title-news'>{articleHealth[1].title}</div>
                                        <div onClick={() => navigate(`/news/${articleHealth[1].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleHealth[1].content) }} className='description'></div>
                                    </div>
                                )}
                                {articleHealth.length > 2 && articleHealth.slice(2).map((article, index) => (
                                    <div key={index} className='item bottom-news'>
                                        <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                        <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        )}
                        {articleLife.length > 0 && (
                        <div className='news-by-category'>
                            <div className='category-name'>Đời sống</div>
                            <div className='layout-news'>
                                {articleLife.length > 0 && (
                                    <div className='item news-1'>
                                        <div><img onClick={() => navigate(`/news/${articleLife[0].id}`)} className='thumb-art' src={articleLife[0].mainImage} alt='news' /></div>
                                        <div>
                                            <div onClick={() => navigate(`/news/${articleLife[0].id}`)} className='title-news'>{articleLife[0].title}</div>
                                            <div onClick={() => navigate(`/news/${articleLife[0].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleLife[0].content) }} className='description'></div>
                                        </div>
                                    </div>
                                )}
                                {articleLife.length > 1 && (
                                    <div className='item news-2'>
                                        <div onClick={() => navigate(`/news/${articleLife[1].id}`)} className='title-news'>{articleLife[1].title}</div>
                                        <div onClick={() => navigate(`/news/${articleLife[1].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleLife[1].content) }} className='description'></div>
                                    </div>
                                )}
                                {articleLife.length > 2 && articleLife.slice(2).map((article, index) => (
                                    <div key={index} className='item bottom-news'>
                                        <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                        <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        )}
                        {articleEducation.length > 0 && (
                        <div className='news-by-category'>
                            <div className='category-name'>Giáo dục</div>
                            <div className='layout-news'>
                                {articleEducation.length > 0 && (
                                    <div className='item news-1'>
                                        <div><img onClick={() => navigate(`/news/${articleEducation[0].id}`)} className='thumb-art' src={articleEducation[0].mainImage} alt='news' /></div>
                                        <div>
                                            <div onClick={() => navigate(`/news/${articleEducation[0].id}`)} className='title-news'>{articleEducation[0].title}</div>
                                            <div onClick={() => navigate(`/news/${articleEducation[0].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleEducation[0].content) }} className='description'></div>
                                        </div>
                                    </div>
                                )}
                                {articleEducation.length > 1 && (
                                    <div className='item news-2'>
                                        <div onClick={() => navigate(`/news/${articleEducation[1].id}`)} className='title-news'>{articleEducation[1].title}</div>
                                        <div onClick={() => navigate(`/news/${articleEducation[1].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleEducation[1].content) }} className='description'></div>
                                    </div>
                                )}
                                {articleEducation.length > 2 && articleEducation.slice(2).map((article, index) => (
                                    <div key={index} className='item bottom-news'>
                                        <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                        <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        )}
                    </div>
                </div>
                )}
                {articleScience.length > 0 && (
                <div className='other-category-group-news'>
                    <div className='category-name'>Khoa học</div>
                    <div className='layout-news'>
                        {articleScience.length > 0 && (
                        <div className='item left-item'>
                            <div><img onClick={() => navigate(`/news/${articleScience[0].id}`)} className='thumb-art' src={articleScience[0].mainImage} alt='news' /></div>
                            <div onClick={() => navigate(`/news/${articleScience[0].id}`)} className='title-news'>{articleScience[0].title}</div>
                            <div onClick={() => navigate(`/news/${articleScience[0].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleScience[0].content) }} className='description'></div>
                        </div>
                        )}
                        {articleScience.length > 1 && (
                        <div className='item middle-item middle-item1'>
                            <div><img onClick={() => navigate(`/news/${articleScience[1].id}`)} className='thumb-art' src={articleScience[1].mainImage} alt='news' /></div>
                            <div onClick={() => navigate(`/news/${articleScience[1].id}`)} className='title-news'>{articleScience[1].title}</div>
                        </div>
                        )}
                        {articleScience.length > 2 && (
                        <div className='item middle-item middle-item2'>
                            <div><img onClick={() => navigate(`/news/${articleScience[2].id}`)} className='thumb-art' src={articleScience[2].mainImage} alt='news' /></div>
                            <div onClick={() => navigate(`/news/${articleScience[2].id}`)} className='title-news'>{articleScience[2].title}</div>
                        </div>
                        )}
                        {articleScience.length > 3 && articleScience.slice(3).map((article, index) => (
                            <div key={index} className='item right-item'>
                                <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                                <div><img onClick={() => navigate(`/news/${article.id}`)} className='thumb-art' src={article.mainImage} alt='news' /></div>
                            </div>
                        ))}
                    </div>
                </div>
                )}
                {articleDigitizing.length > 0 && (
                <div className='other-category-group-news'>
                    <div className='category-name'>Số hóa</div>
                    <div className='layout-news'>
                        {articleDigitizing.length > 0 && (
                            <div className='item left-item'>
                                <div><img onClick={() => navigate(`/news/${articleDigitizing[0].id}`)} className='thumb-art' src={articleDigitizing[0].mainImage} alt='news' /></div>
                                <div onClick={() => navigate(`/news/${articleDigitizing[0].id}`)} className='title-news'>{articleDigitizing[0].title}</div>
                                <div onClick={() => navigate(`/news/${articleDigitizing[0].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleDigitizing[0].content) }} className='description'></div>
                            </div>
                        )}
                        {articleDigitizing.length > 1 && (
                            <div className='item middle-item middle-item1'>
                                <div><img onClick={() => navigate(`/news/${articleDigitizing[1].id}`)} className='thumb-art' src={articleDigitizing[1].mainImage} alt='news' /></div>
                                <div onClick={() => navigate(`/news/${articleDigitizing[1].id}`)} className='title-news'>{articleDigitizing[1].title}</div>
                            </div>
                        )}
                        {articleDigitizing.length > 2 && (
                            <div className='item middle-item middle-item2'>
                                <div><img onClick={() => navigate(`/news/${articleDigitizing[2].id}`)} className='thumb-art' src={articleDigitizing[2].mainImage} alt='news' /></div>
                                <div onClick={() => navigate(`/news/${articleDigitizing[2].id}`)} className='title-news'>{articleDigitizing[2].title}</div>
                            </div>
                        )}
                        {articleDigitizing.length > 3 && articleDigitizing.slice(3).map((article, index) => (
                            <div key={index} className='item right-item'>
                                <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                                <div><img onClick={() => navigate(`/news/${article.id}`)} className='thumb-art' src={article.mainImage} alt='news' /></div>
                            </div>
                        ))}
                    </div>
                </div>
                )}
                <div className='middle-category-group-news'>
                    {articleNews.length > 0 && (
                    <div className='group-news-item'>
                        <div className='category-name'>Thời sự</div>
                        <div className='item news1'>
                            <div><img onClick={() => navigate(`/news/${articleNews[0].id}`)} className='thumb-art' src={articleNews[0].mainImage} alt='news' /></div>
                            <div onClick={() => navigate(`/news/${articleNews[0].id}`)} className='title-news'>{articleNews[0].title}</div>
                            <div onClick={() => navigate(`/news/${articleNews[0].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleNews[0].content) }} className='description'></div>
                        </div>
                        <div className='item news2'>
                            <div onClick={() => navigate(`/news/${articleNews[1].id}`)} className='title-news'>{articleNews[1].title}</div>
                            <div onClick={() => navigate(`/news/${articleNews[1].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleNews[1].content) }} className='description'></div>
                        </div>
                    </div>
                    )}
                    {articleWorld.length > 0 && (
                    <div className='group-news-item'>
                        <div className='category-name'>Thế giới</div>
                        <div className='item news1'>
                            <div><img onClick={() => navigate(`/news/${articleWorld[0].id}`)} className='thumb-art' src={articleWorld[0].mainImage} alt='news' /></div>
                            <div onClick={() => navigate(`/news/${articleWorld[0].id}`)} className='title-news'>{articleWorld[0].title}</div>
                            <div onClick={() => navigate(`/news/${articleWorld[0].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleWorld[0].content) }} className='description'></div>
                        </div>
                        <div className='item news2'>
                            <div onClick={() => navigate(`/news/${articleWorld[1].id}`)} className='title-news'>{articleWorld[1].title}</div>
                            <div onClick={() => navigate(`/news/${articleWorld[1].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleWorld[1].content) }} className='description'></div>
                        </div>
                    </div>
                    )}
                    {articleLaw.length > 0 && (
                    <div className='group-news-item'>
                        <div className='category-name'>Pháp luật</div>
                        <div className='item news1'>
                            <div><img onClick={() => navigate(`/news/${articleLaw[0].id}`)} className='thumb-art' src={articleLaw[0].mainImage} alt='news' /></div>
                            <div onClick={() => navigate(`/news/${articleLaw[0].id}`)} className='title-news'>{articleLaw[0].title}</div>
                            <div onClick={() => navigate(`/news/${articleLaw[0].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleLaw[0].content) }} className='description'></div>
                        </div>
                        <div className='item news2'>
                            <div onClick={() => navigate(`/news/${articleLaw[1].id}`)} className='title-news'>{articleLaw[1].title}</div>
                            <div onClick={() => navigate(`/news/${articleLaw[1].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleLaw[1].content) }} className='description'></div>
                        </div>
                    </div>
                    )}
                </div>
                {articleTourism.length > 0 && (
                <div className='other-category-group-news'>
                    <div className='category-name'>Du lịch</div>
                    <div className='layout-news'>
                        {articleTourism.length > 0 && (
                            <div className='item left-item'>
                                <div><img onClick={() => navigate(`/news/${articleTourism[0].id}`)} className='thumb-art' src={articleTourism[0].mainImage} alt='news' /></div>
                                <div onClick={() => navigate(`/news/${articleTourism[0].id}`)} className='title-news'>{articleTourism[0].title}</div>
                                <div onClick={() => navigate(`/news/${articleTourism[0].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleTourism[0].content) }} className='description'></div>
                            </div>
                        )}
                        {articleTourism.length > 1 && (
                            <div className='item middle-item middle-item1'>
                                <div><img onClick={() => navigate(`/news/${articleTourism[1].id}`)} className='thumb-art' src={articleTourism[1].mainImage} alt='news' /></div>
                                <div onClick={() => navigate(`/news/${articleTourism[1].id}`)} className='title-news'>{articleTourism[1].title}</div>
                            </div>
                        )}
                        {articleTourism.length > 2 && (
                            <div className='item middle-item middle-item2'>
                                <div><img onClick={() => navigate(`/news/${articleTourism[2].id}`)} className='thumb-art' src={articleTourism[2].mainImage} alt='news' /></div>
                                <div onClick={() => navigate(`/news/${articleTourism[2].id}`)} className='title-news'>{articleTourism[2].title}</div>
                            </div>
                        )}
                        {articleTourism.length > 3 && articleTourism.slice(3).map((article, index) => (
                            <div key={index} className='item right-item'>
                                <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                                <div><img onClick={() => navigate(`/news/${article.id}`)} className='thumb-art' src={article.mainImage} alt='news' /></div>
                            </div>
                        ))}
                    </div>
                </div>
                )}
                {articleCar.length > 0 && (
                <div className='other-category-group-news'>
                    <div className='category-name'>Xe</div>
                    <div className='layout-news'>
                        {articleCar.length > 0 && (
                            <div className='item left-item'>
                                <div><img onClick={() => navigate(`/news/${articleCar[0].id}`)} className='thumb-art' src={articleCar[0].mainImage} alt='news' /></div>
                                <div onClick={() => navigate(`/news/${articleCar[0].id}`)} className='title-news'>{articleCar[0].title}</div>
                                <div onClick={() => navigate(`/news/${articleCar[0].id}`)} dangerouslySetInnerHTML={{ __html: getFirstParagraph(articleCar[0].content) }} className='description'></div>
                            </div>
                        )}
                        {articleCar.length > 1 && (
                            <div className='item middle-item middle-item1'>
                                <div><img onClick={() => navigate(`/news/${articleCar[1].id}`)} className='thumb-art' src={articleCar[1].mainImage} alt='news' /></div>
                                <div onClick={() => navigate(`/news/${articleCar[1].id}`)} className='title-news'>{articleCar[1].title}</div>
                            </div>
                        )}
                        {articleCar.length > 2 && (
                            <div className='item middle-item middle-item2'>
                                <div><img onClick={() => navigate(`/news/${articleCar[2].id}`)} className='thumb-art' src={articleCar[2].mainImage} alt='news' /></div>
                                <div onClick={() => navigate(`/news/${articleCar[2].id}`)} className='title-news'>{articleCar[2].title}</div>
                            </div>
                        )}
                        {articleCar.length > 3 && articleCar.slice(3).map((article, index) => (
                            <div key={index} className='item right-item'>
                                <div onClick={() => navigate(`/news/${article.id}`)} className='title-news'>{article.title}</div>
                                <div><img onClick={() => navigate(`/news/${article.id}`)} className='thumb-art' src={article.mainImage} alt='news' /></div>
                            </div>
                        ))}
                    </div>
                </div>
                )}
            </div>
            <Footer />
        </div>
        </>
    );
};

export default Homepage;