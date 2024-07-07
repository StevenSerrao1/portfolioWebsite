import GreatestFilmsBlogFormat from "./GreatestFilmsBlogFormat";
import Header from '../Header';
import Footer from '../Footer';
import '../../styles/App.css';
import './BlogStyle.css';
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