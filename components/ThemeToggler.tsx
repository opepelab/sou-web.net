import { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import Image from 'next/image'

type StrProps = {
    theme: string;
    toggleTheme: StringConstructor;
}

export const ThemeToggler = () => {
    const [trans, setTrans] = useState(false);
    const {theme, toggleTheme} = useContext<StrProps>(ThemeContext);


    return (
        <div className="Logo inblo">
                <div aria-expanded={trans} onClick={() => {toggleTheme(theme === 'dark' ? 'light' : 'dark');setTrans(!trans)}}>
               <Image src="/aa.png" width={40} height={40} />
            </div>
        </div>
    );
}

export default ThemeToggler;