import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Homepage.css';
import News1 from '../../assets/news1.jpg';
import News2 from '../../assets/news2.png';
import News3 from '../../assets/news3.jpg';
import News4 from '../../assets/news4.jpg';
import News5 from '../../assets/news5.jpg';
import News6 from '../../assets/news6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Homepage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div className='homepage'>
            <Header />
            <CategoryNav />
            <div className='content'>
                <div className='first-news-group'>
                    <div className='item news-1'>
                        <div><img onClick={() => navigate('/news/1')} className='thumb-art' src={News1} alt='news' /></div>
                        <div>
                            <div onClick={() => navigate('/news/1')} className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                            <div onClick={() => navigate('/news/1')} className='description'>Chính quyền Lâm Đồng cân nhắc đề xuất dự án quy mô lớn ở khu vực Dinh tỉnh trưởng 113 năm tuổi, thay vào đó nên xen công trình vừa phải khi lập quy hoạch.</div>
                            <div className='category' onClick={() => navigate(`/category/Thời sự`)}>Thời sự</div>
                        </div>
                    </div>
                    <div className='item news-2'>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                        <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                        <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                    </div>
                    <div className='item bottom-news'>
                        <div className='title-news'>Kiev và Moskva cùng bị UAV tấn công trong đêm</div>
                        <div><img className='thumb-art' src={News3} alt='news' /></div>
                    </div>
                    <div className='item bottom-news'>
                        <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                        <div><img className='thumb-art' src={News4} alt='news' /></div>
                    </div>
                    <div className='item bottom-news'>
                        <div className='title-news'>Miền Bắc hanh khô, miền Trung cuối tuần mưa</div>
                        <div><img className='thumb-art' src={News5} alt='news' /></div>
                    </div>
                    <div className='item bottom-news'>
                        <div className='title-news'>Quang Liêm đạt thành tích tốt nhất ở Grand Chess Tour</div>
                        <div><img className='thumb-art' src={News6} alt='news' /></div>
                    </div>
                </div>

                <div className='center-news-group'>
                    <div className='left-container'>
                        <div className='news'>
                            <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                            <div className='image-content'>
                                <div><img className='thumb-art' src={News1} alt='news' /></div>
                                <div className='description'>Chính quyền Lâm Đồng cân nhắc đề xuất dự án quy mô lớn ở khu vực Dinh tỉnh trưởng 113 năm tuổi, thay vào đó nên xen công trình vừa phải khi lập quy hoạch.</div>
                            </div>
                        </div>
                        <div className='news'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='image-content'>
                                <div><img className='thumb-art' src={News2} alt='news' /></div>
                                <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                            </div>
                        </div>
                        <div className='news'>
                            <div className='title-news'>Kiev và Moskva cùng bị UAV tấn công trong đêm</div>
                            <div className='image-content'>
                                <div><img className='thumb-art' src={News3} alt='news' /></div>
                                <div className='description'>Cả Kiev và Moskva đều trở thành mục tiêu của các cuộc tấn công bằng UAV trong đêm, nhưng phần lớn đều bị đánh chặn.</div>
                            </div>
                        </div>
                        <div className='news'>
                            <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                            <div className='image-content'>
                                <div><img className='thumb-art' src={News4} alt='news' /></div>
                                <div className='description'>Phó chủ tịch TP Hải Phòng Nguyễn Đức Thọ yêu cầu các quận hoàn thành tháo dỡ "chuồng cọp", lồng sắt tại chung cư thuộc sở hữu nhà nước trong tháng 12.</div>
                            </div>
                        </div>
                        <div className='news'>
                            <div className='title-news'>Miền Bắc hanh khô, miền Trung cuối tuần mưa</div>
                            <div className='image-content'>
                                <div><img className='thumb-art' src={News5} alt='news' /></div>
                                <div className='description'>Không khí lạnh tăng cường khiến nhiệt độ ban đêm ở miền Bắc xuống thấp, Hà Nội 15-19 độ C, miền Trung và Nam Trung Bộ mưa trở lại.</div>
                            </div>
                        </div>
                        <div className='news'>
                            <div className='title-news'>Quang Liêm đạt thành tích tốt nhất ở Grand Chess Tour</div>
                            <div className='image-content'>
                                <div><img className='thumb-art' src={News6} alt='news' /></div>
                                <div className='description'><span className='city'>MỸ - </span>Lê Quang Liêm kết thúc siêu giải cờ nhanh chớp St Louis ở vị trí đồng giải ba, với số điểm cao nhất anh từng đạt được là 20.</div>
                            </div>
                        </div>
                        <div className='news'>
                            <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                            <div className='image-content'>
                                <div><img className='thumb-art' src={News1} alt='news' /></div>
                                <div className='description'>Chính quyền Lâm Đồng cân nhắc đề xuất dự án quy mô lớn ở khu vực Dinh tỉnh trưởng 113 năm tuổi, thay vào đó nên xen công trình vừa phải khi lập quy hoạch.</div>
                            </div>
                        </div>
                        <div className='news'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='image-content'>
                                <div><img className='thumb-art' src={News2} alt='news' /></div>
                                <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                            </div>
                        </div>
                        <div className='news'>
                            <div className='title-news'>Kiev và Moskva cùng bị UAV tấn công trong đêm</div>
                            <div className='image-content'>
                                <div><img className='thumb-art' src={News3} alt='news' /></div>
                                <div className='description'>Cả Kiev và Moskva đều trở thành mục tiêu của các cuộc tấn công bằng UAV trong đêm, nhưng phần lớn đều bị đánh chặn.</div>
                            </div>
                        </div>
                        <div className='news'>
                            <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                            <div className='image-content'>
                                <div><img className='thumb-art' src={News4} alt='news' /></div>
                                <div className='description'>Phó chủ tịch TP Hải Phòng Nguyễn Đức Thọ yêu cầu các quận hoàn thành tháo dỡ "chuồng cọp", lồng sắt tại chung cư thuộc sở hữu nhà nước trong tháng 12.</div>
                            </div>
                        </div>
                        <div className='news'>
                            <div className='title-news'>Miền Bắc hanh khô, miền Trung cuối tuần mưa</div>
                            <div className='image-content'>
                                <div><img className='thumb-art' src={News5} alt='news' /></div>
                                <div className='description'>Không khí lạnh tăng cường khiến nhiệt độ ban đêm ở miền Bắc xuống thấp, Hà Nội 15-19 độ C, miền Trung và Nam Trung Bộ mưa trở lại.</div>
                            </div>
                        </div>
                        <div className='news'>
                            <div className='title-news'>Quang Liêm đạt thành tích tốt nhất ở Grand Chess Tour</div>
                            <div className='image-content'>
                                <div><img className='thumb-art' src={News6} alt='news' /></div>
                                <div className='description'><span className='city'>MỸ- </span>Lê Quang Liêm kết thúc siêu giải cờ nhanh chớp St Louis ở vị trí đồng giải ba, với số điểm cao nhất anh từng đạt được là 20.</div>
                            </div>
                        </div>
                        <div className='news'>
                            <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                            <div className='image-content'>
                                <div><img className='thumb-art' src={News1} alt='news' /></div>
                                <div className='description'>Chính quyền Lâm Đồng cân nhắc đề xuất dự án quy mô lớn ở khu vực Dinh tỉnh trưởng 113 năm tuổi, thay vào đó nên xen công trình vừa phải khi lập quy hoạch.</div>
                            </div>
                        </div>
                        <div className='news'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='image-content'>
                                <div><img className='thumb-art' src={News2} alt='news' /></div>
                                <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                            </div>
                        </div>
                    </div>
                    <div className='right-container'>
                        <div className='news-by-category'>
                            <div className='category-name'>Kinh doanh</div>
                            <div className='layout-news'>
                                <div className='item news-1'>
                                    <div><img className='thumb-art' src={News3} alt='news' /></div>
                                    <div>
                                        <div className='title-news'>Kiev và Moskva cùng bị UAV tấn công trong đêm</div>
                                        <div className='description'>Cả Kiev và Moskva đều trở thành mục tiêu của các cuộc tấn công bằng UAV trong đêm, nhưng phần lớn đều bị đánh chặn.</div>
                                    </div>
                                </div>
                                <div className='item news-2'>
                                    <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                                    <div className='description'>Phó chủ tịch TP Hải Phòng Nguyễn Đức Thọ yêu cầu các quận hoàn thành tháo dỡ "chuồng cọp", lồng sắt tại chung cư thuộc sở hữu nhà nước trong tháng 12.</div>     
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Miền Bắc hanh khô, miền Trung cuối tuần mưa</div>
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Quang Liêm đạt thành tích tốt nhất ở Grand Chess Tour</div>
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                                </div>
                            </div>
                        </div>
                        <div className='news-by-category'>
                            <div className='category-name'>Bất động sản</div>
                            <div className='layout-news'>
                                <div className='item news-1'>
                                    <div><img className='thumb-art' src={News4} alt='news' /></div>
                                    <div>
                                        <div className='title-news'>Kiev và Moskva cùng bị UAV tấn công trong đêm</div>
                                        <div className='description'>Cả Kiev và Moskva đều trở thành mục tiêu của các cuộc tấn công bằng UAV trong đêm, nhưng phần lớn đều bị đánh chặn.</div>
                                    </div>
                                </div>
                                <div className='item news-2'>
                                    <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                                    <div className='description'>Phó chủ tịch TP Hải Phòng Nguyễn Đức Thọ yêu cầu các quận hoàn thành tháo dỡ "chuồng cọp", lồng sắt tại chung cư thuộc sở hữu nhà nước trong tháng 12.</div>     
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Miền Bắc hanh khô, miền Trung cuối tuần mưa</div>
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Quang Liêm đạt thành tích tốt nhất ở Grand Chess Tour</div>
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                                </div>
                            </div>
                        </div>
                        <div className='news-by-category'>
                            <div className='category-name'>Thể thao</div>
                            <div className='layout-news'>
                                <div className='item news-1'>
                                    <div><img className='thumb-art' src={News5} alt='news' /></div>
                                    <div>
                                        <div className='title-news'>Kiev và Moskva cùng bị UAV tấn công trong đêm</div>
                                        <div className='description'>Cả Kiev và Moskva đều trở thành mục tiêu của các cuộc tấn công bằng UAV trong đêm, nhưng phần lớn đều bị đánh chặn.</div>
                                    </div>
                                </div>
                                <div className='item news-2'>
                                    <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                                    <div className='description'>Phó chủ tịch TP Hải Phòng Nguyễn Đức Thọ yêu cầu các quận hoàn thành tháo dỡ "chuồng cọp", lồng sắt tại chung cư thuộc sở hữu nhà nước trong tháng 12.</div>     
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Miền Bắc hanh khô, miền Trung cuối tuần mưa</div>
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Quang Liêm đạt thành tích tốt nhất ở Grand Chess Tour</div>
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                                </div>
                            </div>
                        </div>
                        <div className='news-by-category'>
                            <div className='category-name'>Giải trí</div>
                            <div className='layout-news'>
                                <div className='item news-1'>
                                    <div><img className='thumb-art' src={News6} alt='news' /></div>
                                    <div>
                                        <div className='title-news'>Kiev và Moskva cùng bị UAV tấn công trong đêm</div>
                                        <div className='description'>Cả Kiev và Moskva đều trở thành mục tiêu của các cuộc tấn công bằng UAV trong đêm, nhưng phần lớn đều bị đánh chặn.</div>
                                    </div>
                                </div>
                                <div className='item news-2'>
                                    <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                                    <div className='description'>Phó chủ tịch TP Hải Phòng Nguyễn Đức Thọ yêu cầu các quận hoàn thành tháo dỡ "chuồng cọp", lồng sắt tại chung cư thuộc sở hữu nhà nước trong tháng 12.</div>     
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Miền Bắc hanh khô, miền Trung cuối tuần mưa</div>
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Quang Liêm đạt thành tích tốt nhất ở Grand Chess Tour</div>
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                                </div>
                            </div>
                        </div>
                        <div className='news-by-category'>
                            <div className='category-name'>Sức khỏe</div>
                            <div className='layout-news'>
                                <div className='item news-1'>
                                    <div><img className='thumb-art' src={News1} alt='news' /></div>
                                    <div>
                                        <div className='title-news'>Kiev và Moskva cùng bị UAV tấn công trong đêm</div>
                                        <div className='description'>Cả Kiev và Moskva đều trở thành mục tiêu của các cuộc tấn công bằng UAV trong đêm, nhưng phần lớn đều bị đánh chặn.</div>
                                    </div>
                                </div>
                                <div className='item news-2'>
                                    <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                                    <div className='description'>Phó chủ tịch TP Hải Phòng Nguyễn Đức Thọ yêu cầu các quận hoàn thành tháo dỡ "chuồng cọp", lồng sắt tại chung cư thuộc sở hữu nhà nước trong tháng 12.</div>     
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Miền Bắc hanh khô, miền Trung cuối tuần mưa</div>
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Quang Liêm đạt thành tích tốt nhất ở Grand Chess Tour</div>
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                                </div>
                            </div>
                        </div>
                        <div className='news-by-category'>
                            <div className='category-name'>Đời sống</div>
                            <div className='layout-news'>
                                <div className='item news-1'>
                                    <div><img className='thumb-art' src={News2} alt='news' /></div>
                                    <div>
                                        <div className='title-news'>Kiev và Moskva cùng bị UAV tấn công trong đêm</div>
                                        <div className='description'>Cả Kiev và Moskva đều trở thành mục tiêu của các cuộc tấn công bằng UAV trong đêm, nhưng phần lớn đều bị đánh chặn.</div>
                                    </div>
                                </div>
                                <div className='item news-2'>
                                    <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                                    <div className='description'>Phó chủ tịch TP Hải Phòng Nguyễn Đức Thọ yêu cầu các quận hoàn thành tháo dỡ "chuồng cọp", lồng sắt tại chung cư thuộc sở hữu nhà nước trong tháng 12.</div>     
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Miền Bắc hanh khô, miền Trung cuối tuần mưa</div>
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Quang Liêm đạt thành tích tốt nhất ở Grand Chess Tour</div>
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                                </div>
                            </div>
                        </div>
                        <div className='news-by-category'>
                            <div className='category-name'>Giáo dục</div>
                            <div className='layout-news'>
                                <div className='item news-1'>
                                    <div><img className='thumb-art' src={News3} alt='news' /></div>
                                    <div>
                                        <div className='title-news'>Kiev và Moskva cùng bị UAV tấn công trong đêm</div>
                                        <div className='description'>Cả Kiev và Moskva đều trở thành mục tiêu của các cuộc tấn công bằng UAV trong đêm, nhưng phần lớn đều bị đánh chặn.</div>
                                    </div>
                                </div>
                                <div className='item news-2'>
                                    <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                                    <div className='description'>Phó chủ tịch TP Hải Phòng Nguyễn Đức Thọ yêu cầu các quận hoàn thành tháo dỡ "chuồng cọp", lồng sắt tại chung cư thuộc sở hữu nhà nước trong tháng 12.</div>     
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Miền Bắc hanh khô, miền Trung cuối tuần mưa</div>
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Quang Liêm đạt thành tích tốt nhất ở Grand Chess Tour</div>
                                </div>
                                <div className='item bottom-news'>
                                    <div><FontAwesomeIcon className='icon' icon={faNewspaper} /></div>
                                    <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='other-category-group-news'>
                    <div className='category-name'>Khoa học</div>
                    <div className='layout-news'>
                        <div className='item left-item'>
                            <div><img className='thumb-art' src={News4} alt='news' /></div>
                            <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                            <div className='description'>Phó chủ tịch TP Hải Phòng Nguyễn Đức Thọ yêu cầu các quận hoàn thành tháo dỡ "chuồng cọp", lồng sắt tại chung cư thuộc sở hữu nhà nước trong tháng 12.</div>
                        </div>
                        <div className='item middle-item middle-item1'>
                            <div><img className='thumb-art' src={News5} alt='news' /></div>
                            <div className='title-news'>Miền Bắc hanh khô, miền Trung cuối tuần mưa</div>
                        </div>
                        <div className='item middle-item middle-item2'>
                            <div><img className='thumb-art' src={News6} alt='news' /></div>
                            <div className='title-news'>Quang Liêm đạt thành tích tốt nhất ở Grand Chess Tour</div>
                        </div>
                        <div className='item right-item'>
                            <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                            <div><img className='thumb-art' src={News1} alt='news' /></div>
                        </div>
                        <div className='item right-item'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div><img className='thumb-art' src={News2} alt='news' /></div>
                        </div>
                        <div className='item right-item'>
                            <div className='title-news'>Kiev và Moskva cùng bị UAV tấn công trong đêm</div>
                            <div><img className='thumb-art' src={News3} alt='news' /></div>
                        </div>
                        <div className='item right-item'>
                            <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                            <div><img className='thumb-art' src={News4} alt='news' /></div>
                        </div>
                    </div>
                </div>
                <div className='other-category-group-news'>
                    <div className='category-name'>Số hóa</div>
                    <div className='layout-news'>
                        <div className='item left-item'>
                            <div><img className='thumb-art' src={News5} alt='news' /></div>
                            <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                            <div className='description'>Phó chủ tịch TP Hải Phòng Nguyễn Đức Thọ yêu cầu các quận hoàn thành tháo dỡ "chuồng cọp", lồng sắt tại chung cư thuộc sở hữu nhà nước trong tháng 12.</div>
                        </div>
                        <div className='item middle-item middle-item1'>
                            <div><img className='thumb-art' src={News6} alt='news' /></div>
                            <div className='title-news'>Miền Bắc hanh khô, miền Trung cuối tuần mưa</div>
                        </div>
                        <div className='item middle-item middle-item2'>
                            <div><img className='thumb-art' src={News1} alt='news' /></div>
                            <div className='title-news'>Quang Liêm đạt thành tích tốt nhất ở Grand Chess Tour</div>
                        </div>
                        <div className='item right-item'>
                            <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                            <div><img className='thumb-art' src={News2} alt='news' /></div>
                        </div>
                        <div className='item right-item'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div><img className='thumb-art' src={News3} alt='news' /></div>
                        </div>
                        <div className='item right-item'>
                            <div className='title-news'>Kiev và Moskva cùng bị UAV tấn công trong đêm</div>
                            <div><img className='thumb-art' src={News4} alt='news' /></div>
                        </div>
                        <div className='item right-item'>
                            <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                            <div><img className='thumb-art' src={News5} alt='news' /></div>
                        </div>
                    </div>
                </div>
                <div className='middle-category-group-news'>
                    <div className='group-news-item'>
                        <div className='category-name'>Thời sự</div>
                        <div className='item news1'>
                            <div><img className='thumb-art' src={News2} alt='news' /></div>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div className='item news2'>
                            <div className='title-news'>Miền Bắc hanh khô, miền Trung cuối tuần mưa</div>
                            <div className='description'>Không khí lạnh tăng cường khiến nhiệt độ ban đêm ở miền Bắc xuống thấp, Hà Nội 15-19 độ C, miền Trung và Nam Trung Bộ mưa trở lại.</div>
                        </div>
                    </div>
                    <div className='group-news-item'>
                        <div className='category-name'>Thế giới</div>
                        <div className='item news1'>
                            <div><img className='thumb-art' src={News3} alt='news' /></div>
                            <div className='title-news'>Kiev và Moskva cùng bị UAV tấn công trong đêm</div>
                            <div className='description'>Cả Kiev và Moskva đều trở thành mục tiêu của các cuộc tấn công bằng UAV trong đêm, nhưng phần lớn đều bị đánh chặn.</div>
                        </div>
                        <div className='item news2'>
                            <div className='title-news'>Quang Liêm đạt thành tích tốt nhất ở Grand Chess Tour</div>
                            <div className='description'><span className='city'>MỸ- </span>Lê Quang Liêm kết thúc siêu giải cờ nhanh chớp St Louis ở vị trí đồng giải ba, với số điểm cao nhất anh từng đạt được là 20.</div>
                        </div>
                    </div>
                    <div className='group-news-item'>
                        <div className='category-name'>Pháp luật</div>
                        <div className='item news1'>
                            <div><img className='thumb-art' src={News4} alt='news' /></div>
                            <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                            <div className='description'>Phó chủ tịch TP Hải Phòng Nguyễn Đức Thọ yêu cầu các quận hoàn thành tháo dỡ "chuồng cọp", lồng sắt tại chung cư thuộc sở hữu nhà nước trong tháng 12.</div>
                        </div>
                        <div className='item news2'>
                            <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                            <div className='description'>Chính quyền Lâm Đồng cân nhắc đề xuất dự án quy mô lớn ở khu vực Dinh tỉnh trưởng 113 năm tuổi, thay vào đó nên xen công trình vừa phải khi lập quy hoạch.</div>
                        </div>
                    </div>
                </div>
                <div className='other-category-group-news'>
                    <div className='category-name'>Du lịch</div>
                    <div className='layout-news'>
                        <div className='item left-item'>
                            <div><img className='thumb-art' src={News6} alt='news' /></div>
                            <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                            <div className='description'>Phó chủ tịch TP Hải Phòng Nguyễn Đức Thọ yêu cầu các quận hoàn thành tháo dỡ "chuồng cọp", lồng sắt tại chung cư thuộc sở hữu nhà nước trong tháng 12.</div>
                        </div>
                        <div className='item middle-item middle-item1'>
                            <div><img className='thumb-art' src={News1} alt='news' /></div>
                            <div className='title-news'>Miền Bắc hanh khô, miền Trung cuối tuần mưa</div>
                        </div>
                        <div className='item middle-item middle-item2'>
                            <div><img className='thumb-art' src={News2} alt='news' /></div>
                            <div className='title-news'>Quang Liêm đạt thành tích tốt nhất ở Grand Chess Tour</div>
                        </div>
                        <div className='item right-item'>
                            <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                            <div><img className='thumb-art' src={News3} alt='news' /></div>
                        </div>
                        <div className='item right-item'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div><img className='thumb-art' src={News4} alt='news' /></div>
                        </div>
                        <div className='item right-item'>
                            <div className='title-news'>Kiev và Moskva cùng bị UAV tấn công trong đêm</div>
                            <div><img className='thumb-art' src={News5} alt='news' /></div>
                        </div>
                        <div className='item right-item'>
                            <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                            <div><img className='thumb-art' src={News6} alt='news' /></div>
                        </div>
                    </div>
                </div>
                <div className='other-category-group-news'>
                    <div className='category-name'>Xe</div>
                    <div className='layout-news'>
                        <div className='item left-item'>
                            <div><img className='thumb-art' src={News1} alt='news' /></div>
                            <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                            <div className='description'>Phó chủ tịch TP Hải Phòng Nguyễn Đức Thọ yêu cầu các quận hoàn thành tháo dỡ "chuồng cọp", lồng sắt tại chung cư thuộc sở hữu nhà nước trong tháng 12.</div>
                        </div>
                        <div className='item middle-item middle-item1'>
                            <div><img className='thumb-art' src={News2} alt='news' /></div>
                            <div className='title-news'>Miền Bắc hanh khô, miền Trung cuối tuần mưa</div>
                        </div>
                        <div className='item middle-item middle-item2'>
                            <div><img className='thumb-art' src={News3} alt='news' /></div>
                            <div className='title-news'>Quang Liêm đạt thành tích tốt nhất ở Grand Chess Tour</div>
                        </div>
                        <div className='item right-item'>
                            <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                            <div><img className='thumb-art' src={News4} alt='news' /></div>
                        </div>
                        <div className='item right-item'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div><img className='thumb-art' src={News5} alt='news' /></div>
                        </div>
                        <div className='item right-item'>
                            <div className='title-news'>Kiev và Moskva cùng bị UAV tấn công trong đêm</div>
                            <div><img className='thumb-art' src={News6} alt='news' /></div>
                        </div>
                        <div className='item right-item'>
                            <div className='title-news'>Hải Phòng xóa bỏ 'chuồng cọp'</div>
                            <div><img className='thumb-art' src={News1} alt='news' /></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    );
};

export default Homepage;