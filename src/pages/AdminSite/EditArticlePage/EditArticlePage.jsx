import { useState, useEffect } from 'react';
import './EditArticlePage.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

const EditArticlePage = () => {

    const tagsArray = ["Mua nhà", "người Việt mua bất động sản"];
    const navigate = useNavigate();

    const [article, setArticle] = useState({
        title: 'Tuổi mua nhà trung bình của người Việt ngày càng trẻ',
        mainImage: 'https://i1-vnexpress.vnecdn.net/2023/12/26/ec6703b7f17ccf85f9bbbc4d4baf6a-4360-1587-1703574621.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=_8NQnEmCv9a_wal-DKmx8Q',
        content: '<p>Các khảo sát gần đây cho thấy những người trẻ từ 22 đến dưới 39 tuổi đang trở thành nhóm khách hàng có nhu cầu mua nhà chủ lực, thay thế nhóm trung lưu trên 40.</p>',
        location: '',
        date: new Date().toISOString().split("T")[0],
        isHot: true,
        category: 'Bất động sản',
        topic: 'Thị trường',
        tags: tagsArray.join(" / "),
    });

    const [error, setError] = useState({
        title: '',
        mainImage: '',
        content: '',
        date: '',
        category: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setArticle((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
    
        if (file) {
        const reader = new FileReader();
    
        reader.onloadend = () => {
            // Khi đọc xong file ảnh, cập nhật state để hiển thị ảnh
            setArticle((prev) => ({...prev, mainImage: reader.result}));
        };
    
        reader.readAsDataURL(file);
        }
    };

    const handleEditorChange = (value) => {
        setArticle((prev) => ({
            ...prev,
            content: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const onlySpaceRegex = /^\s*$/;

        if (article.title.trim() === '') setError((prev) => ({...prev, title: 'Bạn chưa nhập tiêu đề'}));
        else setError((prev) => ({...prev, title: ''}));

        if (article.mainImage === '') setError((prev) => ({...prev, mainImage: 'Bạn chưa chọn ảnh đại diện'}));
        else setError((prev) => ({...prev, mainImage: ''}));

        const strippedContent = article.content.replace(/<[^>]*>/g, '');
        if (article.content.trim() === '' || onlySpaceRegex.test(strippedContent) || article.content === '<p><br></p>') setError((prev) => ({...prev, content: 'Bạn chưa nhập nội dung'}));
        else setError((prev) => ({...prev, content: ''}));

        if (new Date(article.date) < new Date(new Date().toISOString().split("T")[0])) {
            setError((prev) => ({...prev, date: 'Không được chọn ngày đã qua'}));
        }
        else setError((prev) => ({...prev, date: ''}));

        if (article.category === '') setError((prev) => ({...prev, category: 'Bạn chưa chọn danh mục'}));
        else setError((prev) => ({...prev, category: ''}));
    };
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div className='edit-article-page'>
            <h2 className="name-page">Chỉnh sửa bài báo</h2>
            <form onSubmit={handleSubmit}>
                <div className='title-field'>
                    <div className='label'>Tiêu đề:</div>
                    <input
                        type='text'
                        className='title-input'
                        value={article.title}
                        name='title'
                        autoComplete='off'
                        onChange={handleInputChange}
                    />
                    <div className='error'>{error.title}</div>
                </div>
                <div className='main-image-field'>
                    <div className='label'>Ảnh đại diện:</div>
                    <input
                        type='file'
                        accept='image/*'
                        onChange={handleImageChange}
                        name='mainImage'
                    />
                    {article.mainImage && (
                    <>
                        <div>
                            <img src={article.mainImage} alt="mainImage" className='selected-main-image' />
                        </div>
                        <div className='remove-image-btn' onClick={() => setArticle((prev) => ({ ...prev, mainImage: '' }))}>Bỏ ảnh</div>
                    </>
                    )}
                    <div className='error'>{error.mainImage}</div>
                </div>
                <div className='content-field'>
                    <div className='label'>Nội dung:</div>
                    <ReactQuill
                        className='quill'
                        value={article.content}
                        name='content'
                        theme='snow'
                        onChange={handleEditorChange}
                        modules={{
                            toolbar: {
                            container: [
                                [{ header: "1" }, { header: "2" }],
                                [{ size: [] }],
                                ["bold", "italic", "underline", "strike", "blockquote"],
                                [
                                { list: "ordered" },
                                { list: "bullet" },
                                { indent: "-1" },
                                { indent: "+1" },
                                ],
                                ["link", "image", "video"],
                                ["code-block"],
                                ["clean"],
                                ],
                            },
                        }}
                    />
                    <div className='error'>{error.content}</div>
                </div>
                <div className='location-field'>
                    <div className='label'>Địa điểm:</div>
                    <input
                        type='text'
                        className='location-input'
                        value={article.location}
                        name='location'
                        autoComplete='off'
                        onChange={handleInputChange}
                    />
                </div>
                <div className='date-field'>
                    <div className='label'>Ngày:</div>
                    <input
                        type="date"
                        className='date-input'
                        name="date"
                        value={article.date}
                        onChange={handleInputChange}
                    />
                    <div className='error'>{error.date}</div>
                </div>
                <div className='is-hot-field'>
                    <div className='label'>Tin nóng:</div>
                    <div>
                        <input
                            type="checkbox"
                            className='is-hot-checkbox'
                            checked={article.isHot}
                            onChange={() => {
                                setArticle((prev) => ({
                                    ...prev,
                                    isHot: !article.isHot,
                                }));
                            }}
                        />
                    </div>
                </div>
                <div className='category-field'>
                    <div className='label'>Danh mục:</div>
                    <select value={article.category} className='select-field' name='category' onChange={handleInputChange}>
                        <option value="">Lựa chọn danh mục</option>
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
                    <div className='error'>{error.category}</div>
                </div>
                <div className='topic-field'>
                    <div className='label'>Chủ đề:</div>
                    <select value={article.topic} className='select-field' name='topic' onChange={handleInputChange}>
                        <option value="">Không</option>
                        <option value="Chính sách">Chính sách</option>
                        <option value="Thị trường">Thị trường</option>
                        <option value="Không gian sống">Không gian sống</option>
                    </select>
                </div>
                <div className='tags-field'>
                    <div className='label'>Tags: (các tag cách nhau bởi ký tự '/', ví dụ: A / B / C)</div>
                    <input
                        type='text'
                        className='tags-input'
                        value={article.tags}
                        name='tags'
                        autoComplete='off'
                        onChange={handleInputChange}
                    />
                </div>

                <div className='submit-container'>
                    <button className='action-btn' onClick={() => navigate(-1)}>Hủy</button>
                    <button className='action-btn' type='submit'>Cập nhật</button>
                </div>
            </form>
        </div>
        </>
    );
};

export default EditArticlePage;