import { useEffect, useState } from 'react';
import Head from 'next/head'
import styles from "../styles/login.module.css"

export default function Login() {

    return (
        <>
            <Head>
                <title>Login</title>
                <meta name="description" content="Home Screen" />
                <link rel="icon" href="/logo.png" />
            </Head>

            <div className={styles.main}>

                <div className={styles.formboxLogin}>

                <h2>Login</h2>

                    <form className={styles.frmLogin}>

                        <div className={styles.inputbox}>

                            <input type="text" name="txtemail" required />

                            <label>Email</label>

                        </div>

                        <div className={styles.inputbox}>

                            <input type="password" name="txtpassword" required />

                            <label>Senha</label>

                        </div>

                        <div className={styles.rememberforgot}>

                            <label><input type="checkbox" />Lembrar-me</label>

                            <a href="#">Esqueceu a senha?</a>

                        </div>

                        <button type="submit" className={styles.btn}>Logar</button>

                        <div className={styles.loginregister}>

                            <p>Não possui uma conta? <a href="#" className={styles.registerlink}>Registrar</a></p>

                        </div>

                    </form>

                </div>

            </div>
        </>
    )
}