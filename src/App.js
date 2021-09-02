import style from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';

const App = (props) => {
  return (
    <div className={style.AppWrap}>
      <div className={style.headerWrap}>
        <Header />
      </div>
      <div className={style.contWrap}>
        <Content />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
