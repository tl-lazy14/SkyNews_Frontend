import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./pages/Homepage/Homepage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import DetailNewsPage from "./pages/DetailNewsPage/DetailNewsPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import NewestPage from "./pages/NewestPage/NewestPage";
import MostViewedPage from "./pages/MostViewedPage/MostViewedPage";
import HotNewsPage from "./pages/HotNewsPage/HotNewsPage";
import SavedNewsPage from "./pages/SavedNewsPage/SavedNewsPage";
import ViewedNewsPage from "./pages/ViewedNewsPage/ViewedNewsPage";
import LoginPage from "./pages/AdminSite/LoginPage/LoginPage";
import RootPage from "./pages/AdminSite/RootPage";
import MyArticlesPage from "./pages/AdminSite/MyArticlesPage/MyArticlesPage";
import CreateArticlePage from "./pages/AdminSite/CreateArticlePage/CreateArticlePage";
import DetailNewsPageJournalist from "./pages/AdminSite/DetailNewsPageJournalist/DetailNewsPageJournalist";
import EditArticlePage from "./pages/AdminSite/EditArticlePage/EditArticlePage";
import PendingArticlesPage from "./pages/AdminSite/PendingArticlesPage/PendingArticlesPage";
import DetailNewsPageEditor from "./pages/AdminSite/DetailNewsPageEditor/DetailNewsPageEditor";
import ArticleManagementPage from "./pages/AdminSite/ArticleManagementPage/ArticleManagementPage";
import CategoryManagementPage from "./pages/AdminSite/CategoryManagementPage/CategoryManagementPage";
import AccountManagementPage from "./pages/AdminSite/AccountManagementPage/AccountManagementPage";
import ChangePasswordPage from "./pages/AdminSite/ChangePasswordPage/ChangePasswordPage";

function App() {
  return (
      <>
        <div className="app">
          <Router>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/category/:category/:topic?" element={<CategoryPage />} />
              <Route path="/news/:idNews" element={<DetailNewsPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/newest" element={<NewestPage />} />
              <Route path="/most-view" element={<MostViewedPage />} />
              <Route path="/hot-news" element={<HotNewsPage />} />
              <Route path="/user/saved-news" element={<SavedNewsPage />} />
              <Route path="/user/viewed-news" element={<ViewedNewsPage />} />

              <Route path="/admin/login" element={<LoginPage />} />
              <Route path="/admin/" element={<RootPage />}>
                  <Route path="journalist/my-articles" element={<MyArticlesPage />} />
                  <Route path="journalist/create-article" element={<CreateArticlePage />} />
                  <Route path="journalist/news/:idNews" element={<DetailNewsPageJournalist />} />
                  <Route path="journalist/edit-news/:idNews" element={<EditArticlePage />} />
                  <Route path="journalist/change-password" element={<ChangePasswordPage />} />
                  <Route path="editor/pending-articles" element={<PendingArticlesPage />} />
                  <Route path="editor/pending-articles/news/:idNews" element={<DetailNewsPageEditor />} />
                  <Route path="editor/pending-articles/edit-news/:idNews" element={<EditArticlePage />} />
                  <Route path="editor/list-articles" element={<ArticleManagementPage />} />
                  <Route path="editor/list-articles/news/:idNews" element={<DetailNewsPageEditor />} />
                  <Route path="editor/list-articles/edit-news/:idNews" element={<EditArticlePage />} />
                  <Route path="editor/change-password" element={<ChangePasswordPage />} />
                  <Route path="senior/category-topic" element={<CategoryManagementPage />} />
                  <Route path="senior/account-management" element={<AccountManagementPage />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </>
  );
}

export default App;
