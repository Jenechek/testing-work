import style from './Block1.module.css'

const Block1 = (props) => {
    return (
        <div className={style.block1}>
            <div className={style.blockText}>
                <a href="">О КОМПАНИИ</a>
                <p>УЗНАЙТЕ БОЛЬШЕ О НАС</p>
            </div>
        </div>
    )
}

export default Block1;