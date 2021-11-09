import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Image from 'next/image'

export const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')} className="Logo inblo">
               <Image className="m0" src="/logogo.png" width={40} height={40} />
        </div>
    );
}

export default ThemeToggler;