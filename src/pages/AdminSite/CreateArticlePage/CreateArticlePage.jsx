import { useState, useEffect, useContext } from 'react';
import './CreateArticlePage.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { convertLocaleStringToCustomDateFormat } from '../../../utils/formatDateTime';
import api from '../../../components/axiosInterceptor';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../components/userContext';
import axios from 'axios';

const CreateArticlePage = () => {

    const accessToken = localStorage.getItem("accessToken");
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const [article, setArticle] = useState({
        title: '',
        mainImage: '',
        content: '',
        location: '',
        date: convertLocaleStringToCustomDateFormat(new Date().toLocaleString()),
        isHot: false,
        category: '',
        topic: '',
        tags: '',
    });
    const [listCategory, setListCategory] = useState([]);
    const [listTopic, setListTopic] = useState([]);

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

    const getListCategory = async () => {
        try {
            const response = await api.get("/category-topic/get-list-category", {
                headers: { token: `Bearer ${accessToken}` }
            });
            setListCategory(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const getListTopicByCategory = async (categoryName) => {
        try {
            const response = await axios.get(`http://localhost:8080/skynews/api/v1/category-topic/get-list-topic/${categoryName}`);
            setListTopic(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (article.category !== '') {
            getListTopicByCategory(article.category);
        } else {
            setListTopic([]);
        }
    }, [article.category]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let countErr = 0;

        const onlySpaceRegex = /^\s*$/;

        if (article.title.trim() === '') {
            setError((prev) => ({...prev, title: 'Bạn chưa nhập tiêu đề'}));
            countErr++;
        }
        else setError((prev) => ({...prev, title: ''}));

        if (article.mainImage === '') {
            setError((prev) => ({...prev, mainImage: 'Bạn chưa chọn ảnh đại diện'}));
            countErr++;
        }
        else setError((prev) => ({...prev, mainImage: ''}));

        const strippedContent = article.content.replace(/<[^>]*>/g, '');
        if (article.content.trim() === '' || onlySpaceRegex.test(strippedContent) || article.content === '<p><br></p>') {
            setError((prev) => ({...prev, content: 'Bạn chưa nhập nội dung'}));
            countErr++;
        }
        else setError((prev) => ({...prev, content: ''}));

        if (new Date(article.date) < new Date(new Date().toISOString().split("T")[0])) {
            setError((prev) => ({...prev, date: 'Không được chọn ngày đã qua'}));
            countErr++;
        }
        else setError((prev) => ({...prev, date: ''}));

        if (article.category === '') {
            setError((prev) => ({...prev, category: 'Bạn chưa chọn danh mục'}));
            countErr++;
        }
        else setError((prev) => ({...prev, category: ''}));

        if (countErr > 0) return;
        else {
            try {
                // eslint-disable-next-line no-unused-vars
                await api.post('/article/create-article', {
                    title: article.title,
                    mainImage: article.mainImage,
                    content: article.content,
                    location: article.location,
                    date: article.date,
                    authorId: user.id,
                    isHot: article.isHot ? 1 : 0,
                    category: article.category,
                    topic: article.topic,
                    tags: article.tags,
                }, {
                    headers: { token: `Bearer ${accessToken}` }
                });
                toast.success(`Tạo bài báo thành công!`, {
                    position: toast.POSITION.TOP_CENTER,
                    containerId: 'handleCreateArticle',
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeButton: false,
                    theme: 'colored',
                });
                navigate('/admin/journalist/my-articles');
            } catch (err) {
                console.log(err);
            }
        }
    };

    useEffect(() => {
        getListCategory();
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <ToastContainer containerId="handleCreateArticle" limit={1}/>
        <div className='create-article-page'>
            <h2 className="name-page">Tạo bài báo mới</h2>
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
                                    isHot: !prev.isHot,
                                }));
                            }}
                        />
                    </div>
                </div>
                <div className='category-field'>
                    <div className='label'>Danh mục:</div>
                    <select value={article.category} className='select-field' name='category' onChange={handleInputChange}>
                        <option value="">Lựa chọn danh mục</option>
                        {listCategory.map((category, index) => (
                        <option key={index} value={category.name}>{category.name}</option>
                        ))}
                    </select>
                    <div className='error'>{error.category}</div>
                </div>
                <div className='topic-field'>
                    <div className='label'>Chủ đề:</div>
                    <select value={article.topic} className='select-field' name='topic' onChange={handleInputChange}>
                        <option value="">Không</option>
                        {listTopic.length > 0 && listTopic.map((topic, index) => (
                        <option key={index} value={topic.name}>{topic.name}</option>
                        ))}
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
                    <button className='save-btn' type='submit'>Lưu</button>
                </div>
            </form>
        </div>
        </>
    );
};

export default CreateArticlePage;