import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Image from 'next/image'


type BoolProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    trans: boolean;
    setTrans: React.Dispatch<React.SetStateAction<boolean>>;
}

type StrProps = {
    theme: string;
    toggleTheme: StringConstructor;
}

const Home: React.FC<BoolProps> = ({ open, setOpen, trans, setTrans }) => {
    const { theme, toggleTheme } = useContext<StrProps>(ThemeContext);
    return (     
        <div>
            <main className="CN">
                <br/><br/><br/><br/><br/><br/>
                <div aria-expanded={open} onClick={() => setOpen(!open)}
                aria-label="TOP Toggle menu">
                <h1 className="Home hikki">S o u  W e b</h1>
                </div>
                <br/><br/>
                <div className="LogoHome inblo">
                    <div aria-expanded={trans} onClick={() => {toggleTheme(theme === 'light' ? 'dark' : 'light');setTrans(!trans);}}>
                        <Image className="m0" src="/logogo.svg" width={100} height={100} />
                    </div>
                </div>
            </main>
        </div>
    );
}


export default Home;