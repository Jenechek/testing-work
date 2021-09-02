import style from './Content.module.css'
import Block1 from './components/Block1/Block1';
import Block2 from './components/Block2/Block2';
import Block3 from './components/Block3/Block3';
import Block4 from './components/Block4/Block4';

const Content = (props) => {
    return (
        <section>
            <div className={style.block}>
                <Block1 />
                <Block2 />
            </div>
            <div className={style.block}>
                <Block3 />
                <Block4 />
            </div>
        </section>
    )
}

export default Content;