import CategoryNav from '../../components/CategoryNav/CategoryNav';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './SearchPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import News2 from '../../assets/news2.png';
import News1 from '../../assets/news1.jpg';
import PaginationURLHasParameter from '../../components/Pagination/PaginationURLHasParameter';

const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const paramQ = searchParams.get('q');

    const paramPage = searchParams.get('page');
    const defaultPageValue = 1;
    const currentPage = paramPage ? parseInt(paramPage, 10) : defaultPageValue;
    const numPages = 2;

    const [searchKeyword, setSearchKeyword] = useState(paramQ);
    const [selectCategory, setSelectCategory] = useState('');

    const handleSearchInputChange = (event) => {
        const value = event.target.value;
        setSearchKeyword(value);
    }

    const handleSelectCategoryChange = (event) => {
        const value = event.target.value;
        setSelectCategory(value);
        navigate(`/search?q=${searchKeyword}`);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchKeyword.trim() === '') return;
        else if (searchKeyword !== paramQ) navigate(`/search?q=${searchKeyword}`);
        else return; 
    }

    useEffect(() => {
        setSearchKeyword(paramQ);
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
                                <option value="Thời sự">Thời sự</option>
                                <option value="Thế giới">Thế giới</option>
                                <option value="Kinh doanh">Kinh doanh</option>
                                <option value="Bất động sản">Bất động sản</option>
                                <option value="Khoa học">Khoa học</option>
                                <option value="Giải trí">Giải trí</option>
                                <option value="Thể thao">Thể thao</option>
                                <option value="Pháp luật">Pháp luật</option>
                                <option value="Giáo dục">Giáo dục</option>
                                <option value="Sức khỏe">Sức khỏe</option>
                                <option value="Đời sống">Đời sống</option>
                                <option value="Du lịch">Du lịch</option>
                                <option value="Số hóa">Số hóa</option>
                                <option value="Xe">Xe</option>
                                <option value="Thư giãn">Thư giãn</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='news-container'>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Lâm Đồng cân nhắc xây công trình lớn khu vực Dinh tỉnh trưởng ở Đà Lạt</div>
                            <div className='description'>Chính quyền Lâm Đồng cân nhắc đề xuất dự án quy mô lớn ở khu vực Dinh tỉnh trưởng 113 năm tuổi, thay vào đó nên xen công trình vừa phải khi lập quy hoạch.</div>
                        </div>
                        <div><img className='thumb-art' src={News1} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                    <div className='news-item'>
                        <div className='title-description'>
                            <div className='title-news'>Nguồn cơn khiến OpenAI phế truất CEO</div>
                            <div className='description'>Sam Altman được cho là bị sa thải đột ngột sau những bất hòa nội bộ với Ilya Sutskever, nhà khoa học trưởng của OpenAI.</div>
                        </div>
                        <div><img className='thumb-art' src={News2} alt='news' /></div>
                    </div>
                </div>
                <PaginationURLHasParameter numPages={numPages} currentPage={currentPage} />
            </div>
            <Footer />
        </div>
        </>
    );
};

export default SearchPage;