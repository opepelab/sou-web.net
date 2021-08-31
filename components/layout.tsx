import Metatxt from './Metatxt'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import PictureHigh from './PictureHigh'
import Sidebar from './Sidebar'
// すべてのコンポーネントをこのファイルが作動する starting components this file.
const Layout: React.FC = ({ children }) => {
    return (
      <div className="resp body">
        <Metatxt />
        <Header />
        <PictureHigh />
        <Sidebar />
        { children }
        <Footer />
      </div> 
    );
}

export default Layout;