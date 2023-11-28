import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './HotNewsPage.css';
import News11 from '../../assets/news11.png';
import { useEffect, useState } from 'react';
import { compareDate } from '../../utils/compareDate';

const HotNewsPage = () => {

    const [dateArray, setDateArray] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());

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
        window.scrollTo(0, 0);
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
                <div className='news-container'>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Tài khoản Google không hoạt động sẽ bị xóa từ cuối tuần</div>
                            <div className='description'>Từ cuối tuần này, Google bắt đầu tiến hành xóa những tài khoản không hoạt động trong vòng ít nhất hai năm.</div>
                            <div className='time-category'>
                                <div className='time-ago'>2h trước</div>
                                <div className='category'>Số hóa</div>
                            </div>
                        </div>
                        <div><img className='thumb-art' src={News11} alt='news' /></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div> 
        </>
    );
};

export default HotNewsPage;