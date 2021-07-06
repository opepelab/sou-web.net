import Footer from './Footer'
import Navbar from './Navbar'
import PictureHigh from './PictureHigh'

const Layout = ({ children }) => {
    return(
      <div>
        <PictureHigh />
        <Navbar />
        { children }
        <Footer />
      </div> 
    );
}

export default Layout;