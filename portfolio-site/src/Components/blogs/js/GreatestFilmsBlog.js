import GreatestFilmsBlogFormat from "./GreatestFilmsBlogFormat";
import Header from '../../js/Header';
import Footer from '../../js/Footer';
import '../../../styles/App.css';
import '../css/BlogStyle.css';
import './films';

const GreatestFilmsBlog = () => {
    return (
        <div className="App" id='no-sticky-header'>
          <Header />
          <GreatestFilmsBlogFormat />
          <Footer />
        </div>
      );
}

export default GreatestFilmsBlog;