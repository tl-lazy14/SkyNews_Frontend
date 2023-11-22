import './CategoryNav.css';
import { useState, useEffect } from 'react';

const CategoryNav = () => {

    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.getElementById("categoryNavbar");
          const sticky = navbar.offsetTop;
    
          if (window.scrollY > sticky) {
            setIsNavbarFixed(true);
          } else {
            setIsNavbarFixed(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Clean up event listener when the component unmounts
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return (
        <>
        <div className={`category-nav ${isNavbarFixed ? 'navbar-fixed' : ''}`} id="categoryNavbar">
            <ul className='main-nav'>
                <li className='category-item'>
                    <div className='category-name'>Thời sự</div>
                    <ul className='dropdown'>
                        <li className='topic'>Chính trị</li>
                        <li className='topic'>Dân sinh</li>
                        <li className='topic'>Lao động - Việc làm</li>
                        <li className='topic'>Giao thông</li>
                    </ul>
                </li>
                <li className='category-item'>
                    <div className='category-name'>Thế giới</div>
                    <ul className='dropdown'>
                        <li className='topic'>Tư liệu</li>
                        <li className='topic'>Phân tích</li>
                        <li className='topic'>Người Việt 5 châu</li>
                        <li className='topic'>Cuộc sống đó đây</li>
                        <li className='topic'>Quân sự</li>
                    </ul>
                </li>
                <li className='category-item'>
                    <div className='category-name'>Kinh doanh</div>
                    <ul className='dropdown'>
                        <li className='topic'>Quốc tế</li>
                        <li className='topic'>Doanh nghiệp</li>
                        <li className='topic'>Chứng khoán</li>
                        <li className='topic'>Ebank</li>
                        <li className='topic'>Vĩ mô</li>
                        <li className='topic'>Hàng hóa</li>
                        <li className='topic'>Bảo hiểm</li>
                    </ul>
                </li>
                <li className='category-item'>
                    <div className='category-name'>Bất động sản</div>
                    <ul className='dropdown'>
                        <li className='topic'>Chính sách</li>
                        <li className='topic'>Thị trường</li>
                        <li className='topic'>Không gian sống</li>
                    </ul>
                </li>
                <li className='category-item'>
                    <div className='category-name'>Khoa học</div>
                    <ul className='dropdown'>
                        <li className='topic'>Khoa học trong nước</li>
                        <li className='topic'>Tin tức</li>
                        <li className='topic'>Phát minh</li>
                        <li className='topic'>Ứng dụng</li>
                        <li className='topic'>Thế giới tự nhiên</li>
                        <li className='topic'>Thường thức</li>
                    </ul>
                </li>
                <li className='category-item'>
                    <div className='category-name'>Giải trí</div>
                    <ul className='dropdown'>
                        <li className='topic'>Showbiz</li>
                        <li className='topic'>Sách</li>
                        <li className='topic'>Phim</li>
                        <li className='topic'>Nhạc</li>
                        <li className='topic'>Thời trang</li>
                        <li className='topic'>Làm đẹp</li>
                        <li className='topic'>Sân khấu - Mỹ thuật</li>
                    </ul>
                </li>
                <li className='category-item'>
                    <div className='category-name'>Thể thao</div>
                    <ul className='dropdown'>
                        <li className='topic'>Bóng đá</li>
                        <li className='topic'>Tennis</li>
                        <li className='topic'>Bóng rổ</li>
                        <li className='topic'>Các môn khác</li>
                    </ul>
                </li>
                <li className='category-item'>
                    <div className='category-name'>Pháp luật</div>
                    <ul className='dropdown'>
                        <li className='topic'>Hồ sơ phá án</li>
                    </ul>
                </li>
                <li className='category-item'>
                    <div className='category-name'>Giáo dục</div>
                    <ul className='dropdown'>
                        <li className='topic'>Tin tức</li>
                        <li className='topic'>Diễn đàn</li>
                        <li className='topic'>Chân dung</li>
                        <li className='topic'>Du học</li>
                        <li className='topic'>Học tiếng Anh</li>
                        <li className='topic'>Giáo dục 4.0</li>
                    </ul>
                </li>
                <li className='category-item'>
                    <div className='category-name'>Sức khỏe</div>
                    <ul className='dropdown'>
                        <li className='topic'>Tin tức</li>
                        <li className='topic'>Dinh dưỡng</li>
                        <li className='topic'>Khỏe đẹp</li>
                        <li className='topic'>Đàn ông</li>
                        <li className='topic'>Các bệnh</li>
                        <li className='topic'>Vaccine</li>
                    </ul>
                </li>
                <li className='category-item'>
                    <div className='category-name'>Đời sống</div>
                    <ul className='dropdown'>
                        <li className='topic'>Nhịp sống</li>
                        <li className='topic'>Tổ ấm</li>
                        <li className='topic'>Bài học sống</li>
                        <li className='topic'>Tiêu dùng</li>
                    </ul>
                </li>
                <li className='category-item'>
                    <div className='category-name'>Du lịch</div>
                    <ul className='dropdown'>
                        <li className='topic'>Điểm đến</li>
                        <li className='topic'>Ẩm thực</li>
                        <li className='topic'>Dấu chân</li>
                    </ul>
                </li>
                <li className='category-item'>
                    <div className='category-name'>Số hóa</div>
                    <ul className='dropdown'>
                        <li className='topic'>Công nghệ</li>
                        <li className='topic'>Sản phảm</li>
                        <li className='topic'>Blockchain</li>
                        <li className='topic'>Kinh nghiệm</li>
                    </ul>
                </li>
                <li className='category-item'>
                    <div className='category-name'>Xe</div>
                    <ul className='dropdown'>
                        <li className='topic'>Thị trường</li>
                        <li className='topic'>Cầm lái</li>
                    </ul>
                </li>
                <li className='category-item'>
                    <div className='category-name'>Thư giãn</div>
                    <ul className='dropdown'>
                        <li className='topic'>Cười</li>
                        <li className='topic'>Chuyện lạ</li>
                        <li className='topic'>Thú cưng</li>
                    </ul>
                </li>
            </ul>
        </div>
        </>
    );
};

export default CategoryNav;