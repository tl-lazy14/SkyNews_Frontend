import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './CategoryPage.css';
import { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import News1 from '../../assets/news1.jpg';
import News2 from '../../assets/news2.png';
import News3 from '../../assets/news3.jpg';
import News4 from '../../assets/news4.jpg';
import News5 from '../../assets/news5.jpg';
import News6 from '../../assets/news6.jpg';
import News7 from '../../assets/news7.jpg';
import Pagination from '../../components/Pagination/Pagination';

const CategoryPage = () => {
    
    const navigate = useNavigate();
    const location = useLocation();

    const { category, topic } = useParams();
    const topicTest = "Chính trị";

    const searchParams = new URLSearchParams(location.search);
    const paramPage = searchParams.get('page');
    const defaultPageValue = 1;
    const currentPage = paramPage ? parseInt(paramPage, 10) : defaultPageValue;
    const numPages = 4;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category, topic, currentPage]);

    return (
        <>
        <div className='category-page'>
            <Header />
            <CategoryNav />
            <div className='content'>
                <div className='nav-topic-container'>
                    <div className='category-name' onClick={() => navigate(`/category/${category}`)}>{category}</div>
                    <div className='list-topic'>
                        <div className={`topic ${topic === topicTest ? 'selected-topic' : ''}` } onClick={() => navigate(`/category/${category}/${topicTest}`)}>Chính trị</div>
                        <div className='topic'>Dân sinh</div>
                        <div className='topic'>Lao động - Việc làm</div>
                        <div className='topic'>Giao thông</div>
                    </div>
                </div>
                <div className='first-news-group'>
                    <div className='item big-item'>
                        <img className='thumb-art' src={News1} alt='news' />
                        <div className='title-description'>
                            <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                            <div className='description'>Chính quyền Lâm Đồng cân nhắc đề xuất dự án quy mô lớn ở khu vực Dinh tỉnh trưởng 113 năm tu, thay vào đó nên xen công trình vừa phải khi lập quy hoạch.</div>
                        </div>
                    </div>
                    <div className='item small-item'>
                        <div className='image-title'>
                            <img className='thumb-art' src={News2} alt='news' />
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                        </div>
                        <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                    </div>
                    <div className='item small-item'>
                        <div className='image-title'>
                            <img className='thumb-art' src={News3} alt='news' />
                            <div className='title-news'>Kiev và Moskva cùng bị UAV tấn công trong đêm</div>
                        </div>
                        <div className='description'>Cả Kiev và Moskva đều trở thành mục tiêu của các cuộc tấn công bằng UAV trong đêm, nhưng phần lớn đều bị đánh chặn.</div>
                    </div>
                </div>
                <div className='row-news-group'>
                    <div className='item'>
                        <div><img className='thumb-art' src={News4} alt='news' /></div>
                        <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                    </div>
                    <div className='item'>
                        <div><img className='thumb-art' src={News5} alt='news' /></div>
                        <div className='title-news'>Miền Bắc hanh khô, miền Trung cuối tuần mưa</div>
                    </div>
                    <div className='item'>
                        <div><img className='thumb-art' src={News6} alt='news' /></div>
                        <div className='title-news'>Quang Liêm đạt thành tích tốt nhất ở Grand Chess Tour</div>
                    </div>
                    <div className='item'>
                        <div><img className='thumb-art' src={News1} alt='news' /></div>
                        <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                    </div>
                </div>
                <div className='list-news'>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024.</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024.</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024.</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024.</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024.</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024.</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024.</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024.</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024.</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024.</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024.</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024.</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024.</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024.</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024.</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024.</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024. </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='title-news'>HLV Troussier chỉ ra đối thủ trực tiếp của Việt Nam ở giải U23 châu Á</div>
                        <div className='image-description'>
                            <div><img className='thumb-art' src={News7} alt='news' /></div>
                            <div className='description'>Theo HLV Philippe Troussier, Uzbekistan vượt trội nên Việt Nam sẽ cạnh tranh trực tiếp với Malaysia và Kuwait cho tấm vé đi tiếp còn lại ở bảng D vòng chung kết U23 châu Á 2024.</div>
                        </div>
                    </div>
                </div>
                <Pagination numPages={numPages} currentPage={currentPage} />
            </div>
            <Footer />
        </div>
        </>
    );
};

export default CategoryPage;