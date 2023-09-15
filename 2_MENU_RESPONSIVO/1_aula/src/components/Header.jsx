import { List, Hamburger } from "@phosphor-icons/react"

function Header() {
  return (
    <header>
        <div className='mobile'>
            <div className="menu_logo">
                <button><List size={32}></List></button>

                <Hamburger size={32} />

                
            </div>
        </div>
    </header>
  )
}

export default Header