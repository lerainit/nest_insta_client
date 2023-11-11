import { useNavigate, useLocation } from "react-router-dom"
import styles from './notfoundpage.module.scss'

const NotFoundPage = () => {
const {pathname} = useLocation()
const navigate = useNavigate()


    return (
        <div> 
            <h2 className={styles.title}> This page <span className={styles.path}>{pathname}</span> is not found </h2>
            <img className={styles.notFoundImg} src='https://www.ecommerce-nation.com/wp-content/uploads/2018/10/404-error.jpg.webp' alt="not-found" />
            <button className={styles.back_button} onClick={()=>{navigate('/')}}>Back to Home</button> 
        </div>
    )
}

export default NotFoundPage