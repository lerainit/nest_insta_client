import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import loginValidation from "./Validation/loginValidation";
import RegisterModal from "./RegisterModal";
import { useDispatch, useSelector } from "react-redux";
import {logIn} from "../../store/auth/actionCreators";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {setLogin,logOut} from "../../store/auth/actions";

import styles from './Validation/login.module.scss'


export default function LogIn() {
  const navigate = useNavigate();
  // const token = useSelector(store => store.login.token)
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  let url = window.location.href.slice(0, -6);
  const[message,setMessage] = useState(null);
  const dispatch = useDispatch();                                 

  useEffect(() => {
    // if (!readCookie("token")) {
    //  document.cookie = `token=${0}`;
   // if(!localStorage.getItem("token")){
     // localStorage.setItem("token",JSON.stringify("out"))}

     // if(loggedIn ){

     // dispatch({type:'logOut'});
   // }
  }, []);

  useEffect(() => {
    

      if(loggedIn && JSON.parse(localStorage.getItem("token")) == null){


      dispatch({type:'logOut'});
    }    
  }, [loggedIn]);

  const [registerModal, setRegisterModal] = useState(false);
  const handleRegisterModal = () => {
    setRegisterModal(!registerModal);
  };
  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: async () => {
      const email = loginForm.values.email;
      const password = loginForm.values.password;
      const auth = await  dispatch(
          logIn({
            name: loginForm.values.email,
            password: loginForm.values.password,
          })
      );

      //if(auth.type === 'Login/logIn/rejected') {
     //   setMessage("Incorrect login or password or account not activated after creation")
    //  }

      if (JSON.parse(localStorage.getItem("token"))!= "out") {
        dispatch({type:'setLogin'});
        navigate("/");
      }

      return ;
    },
  });

  const [forgotModal, setForgotModal] = useState(false);
  const handleForgot = () => {

    navigate("/forgot");
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const recentLogin = localStorage.getItem("recentLogin") || [];
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = useSelector((state) => state.auth.token);
  return (
      <>
        <Box className={styles.login_wrapper}>

        {isLoggedIn  ? null : (

            <section className={styles.login_section}>

              <Container maxWidth="xl">

                <div className={styles.login_section__wrapper}>
                  <div className={styles.login_text__wrapper}>

                    <img  src="screenshot3-2x.png" className={styles.login_img}/>
                  </div>

                  {!recentLogin
                      ? null
                      : recentLogin.map((elem, i) => {
                        <div key={i}>
                          <img src={elem.src} alt={elem.photo} />
                          <p>{elem.userName}</p>
                        </div>;
                      })}
                  <Box>
                  <h2 className={styles.login_title}>Instagram</h2>
                  <form action="#" className={styles.login_form}>
                    <TextField
                        name="email"
                        onChange={loginForm.handleChange}
                        error={!!loginForm.errors.email}
                        onBlur={loginForm.handleBlur}
                        value={loginForm.values.existingEmail}
                        id="userEmail"
                        label="Email"
                        variant={"outlined"}
                        fullWidth
                    />
                    {loginForm.touched.email && loginForm.errors.email ? (
                        <p>Неверная почта или номер телефона</p>
                    ) : null}
                    <TextField
                        name="password"
                        onChange={loginForm.handleChange}
                        onBlur={loginForm.handleBlur}
                        value={loginForm.values.existingPassword}
                        id="password"
                        label="Password"
                        error={!!loginForm.errors.password}
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        InputProps={{
                          endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end">
                                  {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                              </InputAdornment>
                          ),
                        }}
                    />
                    {loginForm.touched.password && loginForm.errors.password ? (
                        <p>Некоректный пароль</p>
                    ) : null}
                    <Button
                        className={styles.form_btn}
                        variant="contained"
                        type="submit"
                        onClick={loginForm.handleSubmit}>
                      Login
                    </Button>
                    <p className="red" >{message}</p>
                    <button className="forgot-pass-btn" onClick={handleForgot}>
                      Forgot account?
                    </button>
                    <p className={styles.div_line_wrapper}>
                      <span className={styles.div_line}>или</span>
                    </p>
                    <Button
                        onClick={handleRegisterModal}
                        className='styles.create--btn'
                        variant="contained"
                        color="success">
                      Create new account
                    </Button>

                    <br />
                  </form></Box>
                </div>
              </Container>
            </section>
        )}
        <RegisterModal modal={registerModal} handleModal={handleRegisterModal} /></Box>
      </>
  )
}

