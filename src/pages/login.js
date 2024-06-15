import {useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import styles from '../styles/login.module.css'
import UsersMock from '@/mocks/usersMock'
import UserController from '@/controllers/UserController'

export default function Login() {

  const router = useRouter()

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')


  const handleLogin = (e) => {
    e.preventDefault()
    const user = UsersMock.find(user => user.username === username && user.password === password)
    if (!user) {
      alert('Usuário ou senha não encontrados')
      return;
    }
    setUsername('')
    setPassword('')
    UserController.currentUser = user
    router.push('/')
  };

  // TODO: Use bootstrap to handle sizing, and only use styles/login.module.css to change colors and shapes

  return (
      <>
        <Head>
          <title>Login</title>
          <meta name="description" content="Home Screen"/>
          <link rel="icon" href="/logo.png"/>
        </Head>

        <div className={styles.main}>

          <div className={styles.formboxLogin}>

            <h2>Login</h2>

            <form className={styles.frmLogin} onSubmit={handleLogin}>

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

              <div className={styles.rememberforgot}>

                <label>
                  <input type="checkbox"/> Lembrar-me
                </label>

                <a href="#">Esqueceu a senha?</a>

              </div>

              <button type="submit" className={styles.btn}>
                Logar
              </button>

              <div className={styles.loginregister}>

                <p>
                  Não possui uma conta?{' '}
                  <a href="#" className={styles.registerlink}>
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
