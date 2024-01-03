import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './userContext';

// Tạo một instance Axios
const api = axios.create({
  baseURL: 'http://localhost:8080/skynews/api/v1',
});

// Tạo một interceptor để xử lý tự động gia hạn AccessToken
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Kiểm tra xem lỗi có mã trạng thái 401 (Unauthorized) hay không
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Gửi yêu cầu tới API để lấy AccessToken mới
        const response = await api.post('/auth/refresh');
        const { accessToken } = response.data;
        // Lưu AccessToken mới vào localStorage
        localStorage.setItem('accessToken', accessToken);

        // Gửi lại yêu cầu ban đầu với AccessToken mới
        originalRequest.headers['token'] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Xử lý lỗi khi không thể lấy AccessToken mới
        console.error('Error refreshing access token:', refreshError);
        // Chuyển hướng đến trang đăng nhập hoặc hiển thị thông báo lỗi
        const navigate = useNavigate();
        const { user, logout } = useContext(UserContext);
        if (user.role === 'ROLE_JOURNALIST' || user.role === 'ROLE_EDITOR' || user.role === 'ROLE_SENIOR_ADMIN') {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userID');
            logout();
            navigate('/admin/login');
        } else if (user.role === 'ROLE_USER') {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userID');
            logout();
            navigate('/');
        }
        return Promise.reject(error);
      }
    }

    // Trả về lỗi ban đầu nếu không cần gia hạn AccessToken
    return Promise.reject(error);
  }
);

export default api;