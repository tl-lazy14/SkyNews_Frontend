import { useNavigate, useParams } from 'react-router-dom';
import './CategoryNav.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryNav = () => {

    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const [listCategoryTopic, setListCategoryTopic] = useState([]);
    const navigate = useNavigate();
    const { category } = useParams();

    const getListCategoryTopic = async () => {
        try {
            const response = await axios.get('http://localhost:8080/skynews/api/v1/category-topic');
            setListCategoryTopic(response.data.listCategory);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getListCategoryTopic();
    }, []);

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
                {listCategoryTopic.length > 0 && listCategoryTopic.map((categoryItem, index) => (
                <li key={index} className='category-item'>
                    <div className={`category-name ${category === categoryItem.name ? 'selected' : ''}`} onClick={() => navigate(`/category/${categoryItem.name}`)}>{categoryItem.name}</div>
                    <ul className='dropdown'>
                        {categoryItem.listTopic.length > 0 && categoryItem.listTopic.map((topic, index) => (
                        <li key={index} className='topic' onClick={() => navigate(`/category/${categoryItem.name}/${topic.name}`)}>{topic.name}</li>
                        ))}
                    </ul>
                </li>
                ))}
            </ul>
        </div>
        </>
    );
};

export default CategoryNav;