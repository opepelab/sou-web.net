import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Image from 'next/image'


type StrProps = {
    theme: string;
    toggleTheme: StringConstructor;
}

export const ThemeToggler: React.FC = () => {
    const { theme, toggleTheme } = useContext<StrProps>(ThemeContext);
    return (
        <div className="Logo inblo">
                <div onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}>
               <Image className="m0" src="/PNG.png" width={60} height={60} />
            </div>
        </div>
    );
}

export default ThemeToggler;