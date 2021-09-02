import style from './Footer.module.css'
import logo from './images/logo.png'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'

const Footer = (props) => {
    return (
        <footer>
            <div className={style.footWrap}>
                <img src={logo} alt="" />
                <div className={style.hrefs}>
                    <p>КОМПАНИЯ</p>
                    <a href="">О нас</a>
                    <a href="">Вакансии</a>
                    <a href="">For the Record</a>
                </div>
                <div className={style.hrefs}>
                    <p>СООБЩЕСТВА</p>
                    <a href="">Для испольнителей</a>
                    <a href="">Для разработчиков</a>
                    <a href="">Реклама</a>
                    <a href="">Для инвесторов</a>
                    <a href="">Для вендоров</a>
                </div>
                <div className={style.hrefs}>
                    <p>ПОЛЕЗНЫЕ ССЫЛКИ</p>
                    <a href="">О нас</a>
                    <a href="">Вакансии</a>
                    <a href="">For the Record</a>
                </div>
                <div className={style.mess}>
                    <a href=""><img src={facebook} alt="" /></a>
                    <a href=""><img src={instagram} alt="" /></a>
                    <a href=""><img src={twitter} alt="" /></a>
                </div>
            </div>
            <div className={style.lowFoot}>
                <a href="">Юридическая информация</a>
                <a href="">Конфиденциальность</a>
                <a href="">Политика конфиденциальности</a>
                <a href="">Файлы coocie</a>
                <a href="">О рекламе</a>
            </div>
        </footer>
    )
}

export default Footer;