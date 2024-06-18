import {useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import styles from '../styles/login.module.css'
import UsersMock from '@/mocks/usersMock'
import UserController from '@/controllers/UserController'
import Link from 'next/link'

export default function Login() {

  const router = useRouter()

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')


  const handleLogin = (e) => {
    e.preventDefault()
    const user = UsersMock.find(user => user.username === username && user.password === password)
    if (!user) {
      alert('Usuário ou senha não encontrados')
      return
    }
    setUsername('')
    setPassword('')
    UserController.currentUser = user
    router.push('/')
  }

  // TODO: Use bootstrap to handle sizing, and only use styles/login.module.css to change colors and shapes

  return (
      <>
        <Head>
          <title>Login</title>
          <meta name="description" content="Home Screen"/>
          <link rel="icon" href="/logo.png"/>
          <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
          <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </Head>

        <div className={styles.main}>

          <div className={styles.formBoxLogin}>

            <Link className={styles.formBoxLoginClose} href="#">
              <span>
                <ion-icon name="chevron-back-outline"></ion-icon>
              </span>
            </Link>  
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
              
              <div className={styles.inputbox}>
                
                <input
                    type="email"
                    name="txtemail"
                    value={username}
                    onChange={(text) => setUsername(text.target.value)}
                    required/>

                <label>Email</label>

              </div>

              <div className={styles.inputbox}>

                <input
                    type="password"
                    name="txtpassword"
                    value={password}
                    onChange={(text) => setPassword(text.target.value)}
                    required/>

                <label>Senha</label>

              </div>

              <div className={styles.rememberForgot}>

                <label>
                  <input type="checkbox"/> Lembrar-me
                </label>

                <a href="#">Esqueceu a senha?</a>

              </div>

              <button type="submit" className={styles.btn}>
                Logar
              </button>

              <div className={styles.loginRegister}>

                <p>
                  Não possui uma conta?{' '}
                  <a href="#" >
                    Registrar
                  </a>
                </p>

              </div>

            </form>

          </div>

        </div>

      </>
  )
}
