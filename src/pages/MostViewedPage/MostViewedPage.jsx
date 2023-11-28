import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import News10 from '../../assets/news10.jpg';
import './MostViewdPage.css';
import { useEffect } from 'react';

const MostViewedPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div className='most-viewed-page'>
            <Header />
            <CategoryNav />
            <div className='content'>
                <div className='title-page'>Xem nhiều</div>
                <div className='news-container'>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                    <div className='news-item'>
                        <div><img className='thumb-art' src={News10} alt='news' /></div>
                        <div className='title-description-category'>
                            <div className='title-news'>Mất sạch tiền trong tài khoản ngân hàng vì cài ứng dụng lạ</div>
                            <div className='description'>Nhiều người sau khi cài ứng dụng theo hướng dẫn của người xưng là cán bộ phường, công an, đã mất sạch tiền trong tài khoản ngân hàng chỉ sau vài phút.</div>
                            <div className='category'>Kinh doanh</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    );
};

export default MostViewedPage;