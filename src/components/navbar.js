import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import UserController from '@/controllers/UserController'

export default function Navbar() {

  const router = useRouter()

  const handleLogout = () => {
    UserController.currentUser = null
    router.reload()
  }

  return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark">

          <div className="container-fluid">

            <Link className="navbar-brand" href="#">
              <Image src="/logo.png" alt="logo" width={100} height={50}/>
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                {UserController.currentUser == null
                    ?
                    <li className="nav-item">

                      <Link className="nav-link text-light" aria-current="page" href="/login">
                        Login
                      </Link>

                    </li>
                    :
                    <>
                      <li className="nav-item">

                        <Link className="nav-link text-light" aria-current="page" href="/people">
                          Pessoas
                        </Link>

                      </li>

                      <li className="nav-item">

                        <Link className="nav-link text-light" aria-current="page" href="/places">
                          Lugares
                        </Link>

                      </li>

                      <li className="nav-item">

                        <Link className="nav-link text-light" aria-current="page" href="/events">
                          Eventos
                        </Link>

                      </li>

                      <li className="nav-item dropdown">

                        <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Minha Conta
                        </a>

                        <ul className="dropdown-menu">

                          <li>
                            <Link className="dropdown-item" href="#">Perfil</Link>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#" onClick={handleLogout}>Sair</a>
                          </li>

                        </ul>
                      </li>

                    </>
                }
              </ul>
            </div>
          </div>
        </nav>
      </>
  )
}
