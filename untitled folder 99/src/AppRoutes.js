import React from 'react'
import {Routes, Route, useParams, Outlet, useNavigate} from 'react-router-dom'
import UserPage from './pages/userpage/userPage';
import NotFoundPage from './pages/notfoundpage/notfoundpage';
import PostsPage from './pages/posts/postsPage';
import LogIn from "./pages/LogIn/Login";
import PrivateRoute from "./PrivateRoute";
import {useSelector} from "react-redux";



const AppRoutes = () => {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    let {nickName } =  useParams()
    const handleLogIn = () => {
        //   dispatch(logIn());
        navigate("/");
    };
    return (

        <Routes>
            <Route element={<PrivateRoute auth={isLoggedIn} token = {token} />}>
            <Route path='/' element={<Outlet />} >
             <Route index element = {<PostsPage/>}/>
           <Route  path={"/:nickName"} element={<UserPage nickName ={nickName} />} />
          </Route>

            <Route path='*' element={<NotFoundPage />} />
            </Route>
            <Route
                path="/login"
                element={<LogIn isLoggedIn={isLoggedIn} onClick={handleLogIn} />}
            />
        </Routes>

    )
}
export default AppRoutes; 
