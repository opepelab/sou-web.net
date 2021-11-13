import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Image from 'next/image'


type StrProps = {
    theme: string;
    toggleTheme: StringConstructor;
}

export const ThemeToggler: React.FC<StrProps> = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="Logo inblo">
                <div onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}>
               <Image className="m0" src="/logogo.svg" width={40} height={40} />
            </div>
        </div>
    );
}

export default ThemeToggler;