import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/Home";
import UserBlogs from "./pages/blogs/UserBlogs";
import CreateBlog from "./pages/blogs/CreateBlog";
import UpdateBlog from "./pages/blogs/UpdateBlog";
import BlogDetails from "./pages/blogs/BlogDetails";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";


function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/blogs/me' element={<UserBlogs />} />
        <Route path='/blogs/new' element={<CreateBlog />} />
        <Route path='/blogs/:blogId' element={<UpdateBlog />} />
        <Route path='/blogs/info/:blogId' element={<BlogDetails />} />
      </Routes>
    </>
  );
}

export default App;
