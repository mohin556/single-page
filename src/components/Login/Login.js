import React from 'react';
import styles from './Login.css'
const Login = () => {
    return (
       <section>
          <div className={styles.card}>
      <div className={styles.loginForm}>
        <h2>Login</h2>
        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>



       </section>
    );
};

export default Login;