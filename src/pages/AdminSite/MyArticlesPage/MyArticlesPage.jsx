import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './MyArticlesPage.css';
import News14 from '../../../assets/news14.jpg';
import { getFormattedDateMonthYear, getFormattedTimestampComment } from '../../../utils/formatDateTime';
import { useNavigate } from 'react-router-dom';

const MyArticlesPage = () => {

    const [filter, setFilter] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(3);

    const navigate = useNavigate();

    const handleFilterChange = (event) => {
        const selectedFilter = event.target.value;
        setFilter(selectedFilter);
        setCurrentPage(1);
    };

    const handleSearchInputChange = (event) => {
        const value = event.target.value;
        setSearchQuery(value);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        if (page > totalPages || page < 1) return;
        else setCurrentPage(page);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage, filter, searchQuery]);

    return (
        <div className='my-articles-page'>
            <h2 className="name-page">Danh sách bài báo của tôi</h2>
            <div className='action-container'>
                <div className='left-action-container'>
                    <select value={filter} onChange={handleFilterChange}>
                        <option value="">Tất cả</option>
                        <option value="Chưa gửi">Chưa gửi</option>
                        <option value="Đã được duyệt">Đã được duyệt</option>
                        <option value="Đang chờ duyệt">Đang chờ duyệt</option>
                        <option value="Bị từ chối">Bị từ chối</option>
                    </select>
                </div>
                <div className='right-action-container'>
                    <div className="num-articles">15 bài báo</div>
                    <div className="search-box">
                        <input
                            type="text"
                            value={searchQuery}
                            placeholder="Tìm kiếm theo tiêu đề bài báo" 
                            onChange={handleSearchInputChange}
                        />
                        <FontAwesomeIcon className='icon-search' icon={faMagnifyingGlass} />
                    </div>
                </div>
            </div>
            <div className='list-articles-container'>
                <div className='article-item'>
                    <img className='thumb-art' src={News14} alt='news' />
                    <div className='content-article'>
                        <div className='title-news'>Ông Phan Văn Mãi: 15 năm TP HCM chưa xong 20 km metro</div>
                        <div className='description'>TP HCM loay hoay 15-16 năm chưa xong 19,7 km Metro số 1, do đó nếu vẫn theo cách cũ phải mất 100 năm mới hoàn thành 200 km như quy hoạch, theo ông Phan Văn Mãi.</div>
                        <div className='category-topic-isHot'>
                            <span className='category'>Thời sự</span>
                            <span className='topic'> - Giao thông</span>
                            <span className='isHot'> - Tin nóng</span>
                        </div>
                        <div className='date-news'>{getFormattedDateMonthYear(new Date())}</div>
                        <div className='approved-timestamp'>Đã được duyệt lúc {getFormattedTimestampComment(new Date())}</div>
                        <div className='detail-status'>
                            <div onClick={() => navigate('/admin/journalist/news/1')} className='btn view-detail-btn'>Xem chi tiết</div>
                            <div className='btn accept'>Đã được duyệt</div>
                            {/*
                            <div className='btn pending'>Đang chờ duyệt</div>
                            <div className='declined-timestamp'>Đã bị từ chối lúc {getFormattedTimestampComment(new Date())}</div>
                            <div className='btn decline'>Bị từ chối</div>
                            */}
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='thumb-art' src={News14} alt='news' />
                    <div className='content-article'>
                        <div className='title-news'>Ông Phan Văn Mãi: 15 năm TP HCM chưa xong 20 km metro</div>
                        <div className='description'>TP HCM loay hoay 15-16 năm chưa xong 19,7 km Metro số 1, do đó nếu vẫn theo cách cũ phải mất 100 năm mới hoàn thành 200 km như quy hoạch, theo ông Phan Văn Mãi.</div>
                        <div className='category-topic-isHot'>
                            <span className='category'>Thời sự</span>
                            <span className='topic'> - Giao thông</span>
                            <span className='isHot'> - Tin nóng</span>
                        </div>
                        <div className='date-news'>{getFormattedDateMonthYear(new Date())}</div>
                        <div className='detail-status'>
                            <div className='btn view-detail-btn'>Xem chi tiết</div>
                            <div className='btn pending'>Đang chờ duyệt</div>
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='thumb-art' src={News14} alt='news' />
                    <div className='content-article'>
                        <div className='title-news'>Ông Phan Văn Mãi: 15 năm TP HCM chưa xong 20 km metro</div>
                        <div className='description'>TP HCM loay hoay 15-16 năm chưa xong 19,7 km Metro số 1, do đó nếu vẫn theo cách cũ phải mất 100 năm mới hoàn thành 200 km như quy hoạch, theo ông Phan Văn Mãi.</div>
                        <div className='category-topic-isHot'>
                            <span className='category'>Thời sự</span>
                            <span className='topic'> - Giao thông</span>
                            <span className='isHot'> - Tin nóng</span>
                        </div>
                        <div className='date-news'>{getFormattedDateMonthYear(new Date())}</div>
                        <div className='declined-timestamp'>Đã bị từ chối lúc {getFormattedTimestampComment(new Date())}</div>
                        <div className='detail-status'>
                            <div className='btn view-detail-btn'>Xem chi tiết</div>
                            <div className='btn decline'>Bị từ chối</div>
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='thumb-art' src={News14} alt='news' />
                    <div className='content-article'>
                        <div className='title-news'>Ông Phan Văn Mãi: 15 năm TP HCM chưa xong 20 km metro</div>
                        <div className='description'>TP HCM loay hoay 15-16 năm chưa xong 19,7 km Metro số 1, do đó nếu vẫn theo cách cũ phải mất 100 năm mới hoàn thành 200 km như quy hoạch, theo ông Phan Văn Mãi.</div>
                        <div className='category-topic-isHot'>
                            <span className='category'>Thời sự</span>
                            <span className='topic'> - Giao thông</span>
                            <span className='isHot'> - Tin nóng</span>
                        </div>
                        <div className='date-news'>{getFormattedDateMonthYear(new Date())}</div>
                        <div className='detail-status'>
                            <div className='btn delete'>
                                <div>Xóa</div>
                                <div><FontAwesomeIcon style={{fontSize: '18px'}} icon={faTrashCan} /></div>
                            </div>
                            <div className='btn view-detail-btn'>Xem chi tiết</div>
                            <div className='btn not-send'>Chưa gửi</div>
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='thumb-art' src={News14} alt='news' />
                    <div className='content-article'>
                        <div className='title-news'>Ông Phan Văn Mãi: 15 năm TP HCM chưa xong 20 km metro</div>
                        <div className='description'>TP HCM loay hoay 15-16 năm chưa xong 19,7 km Metro số 1, do đó nếu vẫn theo cách cũ phải mất 100 năm mới hoàn thành 200 km như quy hoạch, theo ông Phan Văn Mãi.</div>
                        <div className='category-topic-isHot'>
                            <span className='category'>Thời sự</span>
                            <span className='topic'> - Giao thông</span>
                            <span className='isHot'> - Tin nóng</span>
                        </div>
                        <div className='date-news'>{getFormattedDateMonthYear(new Date())}</div>
                        <div className='detail-status'>
                            <div className='btn view-detail-btn'>Xem chi tiết</div>
                            <div className='btn pending'>Đang chờ duyệt</div>
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='thumb-art' src={News14} alt='news' />
                    <div className='content-article'>
                        <div className='title-news'>Ông Phan Văn Mãi: 15 năm TP HCM chưa xong 20 km metro</div>
                        <div className='description'>TP HCM loay hoay 15-16 năm chưa xong 19,7 km Metro số 1, do đó nếu vẫn theo cách cũ phải mất 100 năm mới hoàn thành 200 km như quy hoạch, theo ông Phan Văn Mãi.</div>
                        <div className='category-topic-isHot'>
                            <span className='category'>Thời sự</span>
                            <span className='topic'> - Giao thông</span>
                            <span className='isHot'> - Tin nóng</span>
                        </div>
                        <div className='date-news'>{getFormattedDateMonthYear(new Date())}</div>
                        <div className='detail-status'>
                            <div className='btn view-detail-btn'>Xem chi tiết</div>
                            <div className='btn pending'>Đang chờ duyệt</div>
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='thumb-art' src={News14} alt='news' />
                    <div className='content-article'>
                        <div className='title-news'>Ông Phan Văn Mãi: 15 năm TP HCM chưa xong 20 km metro</div>
                        <div className='description'>TP HCM loay hoay 15-16 năm chưa xong 19,7 km Metro số 1, do đó nếu vẫn theo cách cũ phải mất 100 năm mới hoàn thành 200 km như quy hoạch, theo ông Phan Văn Mãi.</div>
                        <div className='category-topic-isHot'>
                            <span className='category'>Thời sự</span>
                            <span className='topic'> - Giao thông</span>
                            <span className='isHot'> - Tin nóng</span>
                        </div>
                        <div className='date-news'>{getFormattedDateMonthYear(new Date())}</div>
                        <div className='detail-status'>
                            <div className='btn view-detail-btn'>Xem chi tiết</div>
                            <div className='btn pending'>Đang chờ duyệt</div>
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='thumb-art' src={News14} alt='news' />
                    <div className='content-article'>
                        <div className='title-news'>Ông Phan Văn Mãi: 15 năm TP HCM chưa xong 20 km metro</div>
                        <div className='description'>TP HCM loay hoay 15-16 năm chưa xong 19,7 km Metro số 1, do đó nếu vẫn theo cách cũ phải mất 100 năm mới hoàn thành 200 km như quy hoạch, theo ông Phan Văn Mãi.</div>
                        <div className='category-topic-isHot'>
                            <span className='category'>Thời sự</span>
                            <span className='topic'> - Giao thông</span>
                            <span className='isHot'> - Tin nóng</span>
                        </div>
                        <div className='date-news'>{getFormattedDateMonthYear(new Date())}</div>
                        <div className='detail-status'>
                            <div className='btn view-detail-btn'>Xem chi tiết</div>
                            <div className='btn pending'>Đang chờ duyệt</div>
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='thumb-art' src={News14} alt='news' />
                    <div className='content-article'>
                        <div className='title-news'>Ông Phan Văn Mãi: 15 năm TP HCM chưa xong 20 km metro</div>
                        <div className='description'>TP HCM loay hoay 15-16 năm chưa xong 19,7 km Metro số 1, do đó nếu vẫn theo cách cũ phải mất 100 năm mới hoàn thành 200 km như quy hoạch, theo ông Phan Văn Mãi.</div>
                        <div className='category-topic-isHot'>
                            <span className='category'>Thời sự</span>
                            <span className='topic'> - Giao thông</span>
                            <span className='isHot'> - Tin nóng</span>
                        </div>
                        <div className='date-news'>{getFormattedDateMonthYear(new Date())}</div>
                        <div className='detail-status'>
                            <div className='btn view-detail-btn'>Xem chi tiết</div>
                            <div className='btn pending'>Đang chờ duyệt</div>
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='thumb-art' src={News14} alt='news' />
                    <div className='content-article'>
                        <div className='title-news'>Ông Phan Văn Mãi: 15 năm TP HCM chưa xong 20 km metro</div>
                        <div className='description'>TP HCM loay hoay 15-16 năm chưa xong 19,7 km Metro số 1, do đó nếu vẫn theo cách cũ phải mất 100 năm mới hoàn thành 200 km như quy hoạch, theo ông Phan Văn Mãi.</div>
                        <div className='category-topic-isHot'>
                            <span className='category'>Thời sự</span>
                            <span className='topic'> - Giao thông</span>
                            <span className='isHot'> - Tin nóng</span>
                        </div>
                        <div className='date-news'>{getFormattedDateMonthYear(new Date())}</div>
                        <div className='detail-status'>
                            <div className='btn view-detail-btn'>Xem chi tiết</div>
                            <div className='btn pending'>Đang chờ duyệt</div>
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='thumb-art' src={News14} alt='news' />
                    <div className='content-article'>
                        <div className='title-news'>Ông Phan Văn Mãi: 15 năm TP HCM chưa xong 20 km metro</div>
                        <div className='description'>TP HCM loay hoay 15-16 năm chưa xong 19,7 km Metro số 1, do đó nếu vẫn theo cách cũ phải mất 100 năm mới hoàn thành 200 km như quy hoạch, theo ông Phan Văn Mãi.</div>
                        <div className='category-topic-isHot'>
                            <span className='category'>Thời sự</span>
                            <span className='topic'> - Giao thông</span>
                            <span className='isHot'> - Tin nóng</span>
                        </div>
                        <div className='date-news'>{getFormattedDateMonthYear(new Date())}</div>
                        <div className='detail-status'>
                            <div className='btn view-detail-btn'>Xem chi tiết</div>
                            <div className='btn pending'>Đang chờ duyệt</div>
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='thumb-art' src={News14} alt='news' />
                    <div className='content-article'>
                        <div className='title-news'>Ông Phan Văn Mãi: 15 năm TP HCM chưa xong 20 km metro</div>
                        <div className='description'>TP HCM loay hoay 15-16 năm chưa xong 19,7 km Metro số 1, do đó nếu vẫn theo cách cũ phải mất 100 năm mới hoàn thành 200 km như quy hoạch, theo ông Phan Văn Mãi.</div>
                        <div className='category-topic-isHot'>
                            <span className='category'>Thời sự</span>
                            <span className='topic'> - Giao thông</span>
                            <span className='isHot'> - Tin nóng</span>
                        </div>
                        <div className='date-news'>{getFormattedDateMonthYear(new Date())}</div>
                        <div className='detail-status'>
                            <div className='btn view-detail-btn'>Xem chi tiết</div>
                            <div className='btn pending'>Đang chờ duyệt</div>
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='thumb-art' src={News14} alt='news' />
                    <div className='content-article'>
                        <div className='title-news'>Ông Phan Văn Mãi: 15 năm TP HCM chưa xong 20 km metro</div>
                        <div className='description'>TP HCM loay hoay 15-16 năm chưa xong 19,7 km Metro số 1, do đó nếu vẫn theo cách cũ phải mất 100 năm mới hoàn thành 200 km như quy hoạch, theo ông Phan Văn Mãi.</div>
                        <div className='category-topic-isHot'>
                            <span className='category'>Thời sự</span>
                            <span className='topic'> - Giao thông</span>
                            <span className='isHot'> - Tin nóng</span>
                        </div>
                        <div className='date-news'>{getFormattedDateMonthYear(new Date())}</div>
                        <div className='detail-status'>
                            <div className='btn view-detail-btn'>Xem chi tiết</div>
                            <div className='btn pending'>Đang chờ duyệt</div>
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='thumb-art' src={News14} alt='news' />
                    <div className='content-article'>
                        <div className='title-news'>Ông Phan Văn Mãi: 15 năm TP HCM chưa xong 20 km metro</div>
                        <div className='description'>TP HCM loay hoay 15-16 năm chưa xong 19,7 km Metro số 1, do đó nếu vẫn theo cách cũ phải mất 100 năm mới hoàn thành 200 km như quy hoạch, theo ông Phan Văn Mãi.</div>
                        <div className='category-topic-isHot'>
                            <span className='category'>Thời sự</span>
                            <span className='topic'> - Giao thông</span>
                            <span className='isHot'> - Tin nóng</span>
                        </div>
                        <div className='date-news'>{getFormattedDateMonthYear(new Date())}</div>
                        <div className='detail-status'>
                            <div className='btn view-detail-btn'>Xem chi tiết</div>
                            <div className='btn pending'>Đang chờ duyệt</div>
                        </div>
                    </div>
                </div>
                <div className='article-item'>
                    <img className='thumb-art' src={News14} alt='news' />
                    <div className='content-article'>
                        <div className='title-news'>Ông Phan Văn Mãi: 15 năm TP HCM chưa xong 20 km metro</div>
                        <div className='description'>TP HCM loay hoay 15-16 năm chưa xong 19,7 km Metro số 1, do đó nếu vẫn theo cách cũ phải mất 100 năm mới hoàn thành 200 km như quy hoạch, theo ông Phan Văn Mãi.</div>
                        <div className='category-topic-isHot'>
                            <span className='category'>Thời sự</span>
                            <span className='topic'> - Giao thông</span>
                            <span className='isHot'> - Tin nóng</span>
                        </div>
                        <div className='date-news'>{getFormattedDateMonthYear(new Date())}</div>
                        <div className='detail-status'>
                            <div className='btn view-detail-btn'>Xem chi tiết</div>
                            <div className='btn pending'>Đang chờ duyệt</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pagination">
                <div className="btn-page" onClick={() => handlePageChange(1)}>Trang đầu</div>
                <div className="btn-page" onClick={() => handlePageChange(currentPage - 1)}>Trang trước</div>
                <div className='text-page'>Trang <span style={{fontWeight: "700"}}>{currentPage}</span> trên {totalPages}</div>
                <div className="btn-page" onClick={() => handlePageChange(currentPage + 1)}>Trang sau</div>
                <div className="btn-page" onClick={() => handlePageChange(totalPages)}>Trang cuối</div>
            </div> 
        </div>
    );
}

export default MyArticlesPage;