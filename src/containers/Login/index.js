import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import SVGImage from '../../components/SVGImage';
import Pro from '../../pro.svg';


const Login = () => {
   const [showPassword, setShowPassword] = useState(false)
   
   const handleShowPassword = () => {
      setShowPassword(!showPassword)
   }

    return (
        <>
          <div className={styles.loginPage}>
            <SVGImage pro={Pro} />
            <div className={styles.loginForm}>
                <div className={styles.loginFormText}>
                   <h1 className={styles.loginFormHeader}>Welcome Back</h1>
                   <p>Sign in with Your Nascent ID</p>
                   <form>
                     <div>
                        <input type="email" name="username" placeholder="Your Email"/>
                     </div>
                     <div className={styles.toggle}>
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="Your Password" />
                        <span><i className={showPassword ? `fa fa-eye-slash ${styles.togglePassword}` : `fa fa-eye ${styles.togglePassword}` } onClick={handleShowPassword}/></span>
                     </div>
                     <button type="submit" className={styles.signInButton}>Sign In</button>
                   </form>
                   <p className={styles.signinPolicy}>By signing up you agree to our <Link to="/" className={styles.policy}>Privacy Policy and Terms</Link></p>
                   <h4>Forget Nascent ID or Password | <Link to="/login" className={styles.forgetSignIn}>Sign In</Link></h4>
                </div>
            </div>
          </div>
        </>
    )
}

export default Login;