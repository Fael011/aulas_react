import { List, Hamburger } from "@phosphor-icons/react"
import styles from "./Header.module.css"

function Header() {
  return (
    <header>
        <div className='mobile'>
            <div className={styles.menu_logo}>
                <button><List size={32}></List></button>

                <Hamburger size={32} />
            </div>

            <div className={styles.opcoes}>
                  <nav>
                    <a href="">Home</a>
                    <a href="">Ferramentas</a>
                    <a href="">Objetivos</a>
                    <a href="">Bibliografia</a>
                  </nav>
                </div>
        </div>
    </header>
  )
}

export default Header