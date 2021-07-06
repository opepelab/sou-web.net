import Metatxt from './Metatxt'
import Footer from './Footer'
import Navbar from './Navbar'
import PictureHigh from './PictureHigh'
// すべてのコンポーネントをこのファイルが作動する starting components this file.
const Layout = ({ children }) => {
    return (
      <div className="content">
        <Metatxt />
        <PictureHigh />
        <Navbar />
        { children }
        <Footer />
      </div> 
    );
}

export default Layout;