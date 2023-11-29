import './ViewedNewsPage.css';
import Header from '../../components/Header/Header';
import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Footer from '../../components/Footer/Footer';
import News13 from '../../assets/news13.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDateMonthYear } from '../../utils/formatDateTime';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import PaginationURLNoParameter from '../../components/Pagination/PaginationURLNoParameter';

const ViewedNewsPage = () => {

    const currentDate = new Date();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const paramPage = searchParams.get('page');
    const defaultPageValue = 1;
    const currentPage = paramPage ? parseInt(paramPage, 10) : defaultPageValue;
    const numPages = 3;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <>
        <div className='viewed-news-page'>
            <Header />
            <CategoryNav />
            <div className='content'>
                <div className='title-page'>Tin đã xem</div>
                <div className='news-container'>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News13} alt='news' /></div>
                        <div className='title-description'>
                            <div className='title-news'>Nước thải từ bãi rác ồ ạt chảy qua khu dân cư</div>
                            <div className='description'><span className='city'>ĐÀ NẴNG - </span>Nước thải bốc mùi hôi khó chịu từ bãi rác Khánh Sơn chảy vào mương nước hở, đi qua khu dân cư ở quận Liên Chiểu nhiều ngày qua.</div>
                            <div className='category-date-saveIcon'>
                                <div className='category-date'><span className='category'>Thời sự</span> - {getFormattedDateMonthYear(currentDate)}</div>
                                <div><FontAwesomeIcon className='not-save-icon' icon={faBookmark} /></div>
                                {/* <div><FontAwesomeIcon className='saved-icon' icon={faBookmark} /></div> */}
                            </div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News13} alt='news' /></div>
                        <div className='title-description'>
                            <div className='title-news'>Nước thải từ bãi rác ồ ạt chảy qua khu dân cư</div>
                            <div className='description'><span className='city'>ĐÀ NẴNG - </span>Nước thải bốc mùi hôi khó chịu từ bãi rác Khánh Sơn chảy vào mương nước hở, đi qua khu dân cư ở quận Liên Chiểu nhiều ngày qua.</div>
                            <div className='category-date-saveIcon'>
                                <div className='category-date'><span className='category'>Thời sự</span> - {getFormattedDateMonthYear(currentDate)}</div>
                                <div><FontAwesomeIcon className='saved-icon' icon={faBookmark} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News13} alt='news' /></div>
                        <div className='title-description'>
                            <div className='title-news'>Nước thải từ bãi rác ồ ạt chảy qua khu dân cư</div>
                            <div className='description'><span className='city'>ĐÀ NẴNG - </span>Nước thải bốc mùi hôi khó chịu từ bãi rác Khánh Sơn chảy vào mương nước hở, đi qua khu dân cư ở quận Liên Chiểu nhiều ngày qua.</div>
                            <div className='category-date-saveIcon'>
                                <div className='category-date'><span className='category'>Thời sự</span> - {getFormattedDateMonthYear(currentDate)}</div>
                                <div><FontAwesomeIcon className='saved-icon' icon={faBookmark} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News13} alt='news' /></div>
                        <div className='title-description'>
                            <div className='title-news'>Nước thải từ bãi rác ồ ạt chảy qua khu dân cư</div>
                            <div className='description'><span className='city'>ĐÀ NẴNG - </span>Nước thải bốc mùi hôi khó chịu từ bãi rác Khánh Sơn chảy vào mương nước hở, đi qua khu dân cư ở quận Liên Chiểu nhiều ngày qua.</div>
                            <div className='category-date-saveIcon'>
                                <div className='category-date'><span className='category'>Thời sự</span> - {getFormattedDateMonthYear(currentDate)}</div>
                                <div><FontAwesomeIcon className='saved-icon' icon={faBookmark} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News13} alt='news' /></div>
                        <div className='title-description'>
                            <div className='title-news'>Nước thải từ bãi rác ồ ạt chảy qua khu dân cư</div>
                            <div className='description'><span className='city'>ĐÀ NẴNG - </span>Nước thải bốc mùi hôi khó chịu từ bãi rác Khánh Sơn chảy vào mương nước hở, đi qua khu dân cư ở quận Liên Chiểu nhiều ngày qua.</div>
                            <div className='category-date-saveIcon'>
                                <div className='category-date'><span className='category'>Thời sự</span> - {getFormattedDateMonthYear(currentDate)}</div>
                                <div><FontAwesomeIcon className='saved-icon' icon={faBookmark} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News13} alt='news' /></div>
                        <div className='title-description'>
                            <div className='title-news'>Nước thải từ bãi rác ồ ạt chảy qua khu dân cư</div>
                            <div className='description'><span className='city'>ĐÀ NẴNG - </span>Nước thải bốc mùi hôi khó chịu từ bãi rác Khánh Sơn chảy vào mương nước hở, đi qua khu dân cư ở quận Liên Chiểu nhiều ngày qua.</div>
                            <div className='category-date-saveIcon'>
                                <div className='category-date'><span className='category'>Thời sự</span> - {getFormattedDateMonthYear(currentDate)}</div>
                                <div><FontAwesomeIcon className='saved-icon' icon={faBookmark} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News13} alt='news' /></div>
                        <div className='title-description'>
                            <div className='title-news'>Nước thải từ bãi rác ồ ạt chảy qua khu dân cư</div>
                            <div className='description'><span className='city'>ĐÀ NẴNG - </span>Nước thải bốc mùi hôi khó chịu từ bãi rác Khánh Sơn chảy vào mương nước hở, đi qua khu dân cư ở quận Liên Chiểu nhiều ngày qua.</div>
                            <div className='category-date-saveIcon'>
                                <div className='category-date'><span className='category'>Thời sự</span> - {getFormattedDateMonthYear(currentDate)}</div>
                                <div><FontAwesomeIcon className='saved-icon' icon={faBookmark} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News13} alt='news' /></div>
                        <div className='title-description'>
                            <div className='title-news'>Nước thải từ bãi rác ồ ạt chảy qua khu dân cư</div>
                            <div className='description'><span className='city'>ĐÀ NẴNG - </span>Nước thải bốc mùi hôi khó chịu từ bãi rác Khánh Sơn chảy vào mương nước hở, đi qua khu dân cư ở quận Liên Chiểu nhiều ngày qua.</div>
                            <div className='category-date-saveIcon'>
                                <div className='category-date'><span className='category'>Thời sự</span> - {getFormattedDateMonthYear(currentDate)}</div>
                                <div><FontAwesomeIcon className='saved-icon' icon={faBookmark} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News13} alt='news' /></div>
                        <div className='title-description'>
                            <div className='title-news'>Nước thải từ bãi rác ồ ạt chảy qua khu dân cư</div>
                            <div className='description'><span className='city'>ĐÀ NẴNG - </span>Nước thải bốc mùi hôi khó chịu từ bãi rác Khánh Sơn chảy vào mương nước hở, đi qua khu dân cư ở quận Liên Chiểu nhiều ngày qua.</div>
                            <div className='category-date-saveIcon'>
                                <div className='category-date'><span className='category'>Thời sự</span> - {getFormattedDateMonthYear(currentDate)}</div>
                                <div><FontAwesomeIcon className='saved-icon' icon={faBookmark} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News13} alt='news' /></div>
                        <div className='title-description'>
                            <div className='title-news'>Nước thải từ bãi rác ồ ạt chảy qua khu dân cư</div>
                            <div className='description'><span className='city'>ĐÀ NẴNG - </span>Nước thải bốc mùi hôi khó chịu từ bãi rác Khánh Sơn chảy vào mương nước hở, đi qua khu dân cư ở quận Liên Chiểu nhiều ngày qua.</div>
                            <div className='category-date-saveIcon'>
                                <div className='category-date'><span className='category'>Thời sự</span> - {getFormattedDateMonthYear(currentDate)}</div>
                                <div><FontAwesomeIcon className='saved-icon' icon={faBookmark} /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <PaginationURLNoParameter numPages={numPages} currentPage={currentPage} />
            </div>
            <Footer />
        </div>
        </>
    );
}

export default ViewedNewsPage;