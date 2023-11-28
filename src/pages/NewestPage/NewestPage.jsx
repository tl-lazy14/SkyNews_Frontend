import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import News9 from '../../assets/news9.jpg';
import './NewestPage.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import PaginationURLNoParameter from '../../components/Pagination/PaginationURLNoParameter';

const NewestPage = () => {

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
        <div className='newest-page'>
            <Header />
            <CategoryNav />
            <div className='content'>
                <div className='title-page'>Mới nhất</div>
                <div className='news-container'>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div className='time-ago'>21' trước</div>
                        <div className='content-news'>
                            <div className='title-description'>
                                <div className='title-news'>Hiện trạng 26 ha đất ở Đồ Sơn sẽ được đấu giá làm du lịch</div>
                                <div className='description'><span className='city'>HẢI PHÒNG - </span>26 ha đất ở quận Đồ Sơn đang trong tình trạng sử dụng sai mục đích, hoang hóa sẽ được UBND TP Hải Phòng đấu giá để phát triển du lịch.</div>
                            </div>
                            <div><img className='thumb-art' src={News9} alt='news' /></div>
                        </div>
                    </div>
                </div>
                <PaginationURLNoParameter numPages={numPages} currentPage={currentPage} />
            </div>
            <Footer />
        </div>
        </>
    );
};

export default NewestPage;