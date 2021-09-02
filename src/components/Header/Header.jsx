import style from './Header.module.css'
import logo from './images/logo.png'

const Header = (props) => {
    return (
        <header>
            <img src={logo} alt="" />
            <a href="">ГЛАВНАЯ</a>
            <a href="">О КОМПАНИИ</a>
            <a href="">ЧТО МЫ ДЕЛАЕМ</a>
            <a href="">НАША ЦЕЛЬ</a>
            <a href="">КОНТАКТЫ</a>
        </header>
    )
}

export default Header;