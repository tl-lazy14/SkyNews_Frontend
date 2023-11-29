import './SavedNewsPage.css';
import Header from '../../components/Header/Header';
import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Footer from '../../components/Footer/Footer';
import News12 from '../../assets/news12.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDateMonthYear } from '../../utils/formatDateTime';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import PaginationURLNoParameter from '../../components/Pagination/PaginationURLNoParameter';

const SavedNewsPage = () => {

    const currentDate = new Date();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const paramPage = searchParams.get('page');
    const defaultPageValue = 1;
    const currentPage = paramPage ? parseInt(paramPage, 10) : defaultPageValue;
    const numPages = 1;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <>
        <div className='saved-news-page'>
            <Header />
            <CategoryNav />
            <div className='content'>
                <div className='title-page'>Tin đã lưu</div>
                <div className='news-container'>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News12} alt='news' /></div>
                        <div className='title-description'>
                            <div className='title-news'>Cầu gần 400 tỷ đồng xây xong thiếu đường kết nối</div>
                            <div className='description'><span className='city'>ĐỒNG NAI - </span>Dự án cầu Vàm Cái Sứt đã hoàn thành nhưng không thể kết nối cao tốc TP HCM - Long Thành - Dầu Giây do thiếu đường đi.</div>
                            <div className='category-date-saveIcon'>
                                <div className='category-date'><span className='category'>Thời sự</span> - {getFormattedDateMonthYear(currentDate)}</div>
                                <div><FontAwesomeIcon className='saved-icon' icon={faBookmark} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News12} alt='news' /></div>
                        <div className='title-description'>
                            <div className='title-news'>Cầu gần 400 tỷ đồng xây xong thiếu đường kết nối</div>
                            <div className='description'><span className='city'>ĐỒNG NAI - </span>Dự án cầu Vàm Cái Sứt đã hoàn thành nhưng không thể kết nối cao tốc TP HCM - Long Thành - Dầu Giây do thiếu đường đi.</div>
                            <div className='category-date-saveIcon'>
                                <div className='category-date'><span className='category'>Thời sự</span> - {getFormattedDateMonthYear(currentDate)}</div>
                                <div><FontAwesomeIcon className='saved-icon' icon={faBookmark} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News12} alt='news' /></div>
                        <div className='title-description'>
                            <div className='title-news'>Cầu gần 400 tỷ đồng xây xong thiếu đường kết nối</div>
                            <div className='description'><span className='city'>ĐỒNG NAI - </span>Dự án cầu Vàm Cái Sứt đã hoàn thành nhưng không thể kết nối cao tốc TP HCM - Long Thành - Dầu Giây do thiếu đường đi.</div>
                            <div className='category-date-saveIcon'>
                                <div className='category-date'><span className='category'>Thời sự</span> - {getFormattedDateMonthYear(currentDate)}</div>
                                <div><FontAwesomeIcon className='saved-icon' icon={faBookmark} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News12} alt='news' /></div>
                        <div className='title-description'>
                            <div className='title-news'>Cầu gần 400 tỷ đồng xây xong thiếu đường kết nối</div>
                            <div className='description'><span className='city'>ĐỒNG NAI - </span>Dự án cầu Vàm Cái Sứt đã hoàn thành nhưng không thể kết nối cao tốc TP HCM - Long Thành - Dầu Giây do thiếu đường đi.</div>
                            <div className='category-date-saveIcon'>
                                <div className='category-date'><span className='category'>Thời sự</span> - {getFormattedDateMonthYear(currentDate)}</div>
                                <div><FontAwesomeIcon className='saved-icon' icon={faBookmark} /></div>
                            </div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News12} alt='news' /></div>
                        <div className='title-description'>
                            <div className='title-news'>Cầu gần 400 tỷ đồng xây xong thiếu đường kết nối</div>
                            <div className='description'><span className='city'>ĐỒNG NAI - </span>Dự án cầu Vàm Cái Sứt đã hoàn thành nhưng không thể kết nối cao tốc TP HCM - Long Thành - Dầu Giây do thiếu đường đi.</div>
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

export default SavedNewsPage;