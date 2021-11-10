import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Image from 'next/image'

type Props = {
    trans: boolean;
    setTrans: React.Dispatch<React.SetStateAction<boolean>>;
}

type StrProps = {
    theme: string;
    toggleTheme: StringConstructor;
}

export const ThemeToggler: React.FC<Props> = ({ trans, setTrans }) => {
    const { theme, toggleTheme } = useContext<StrProps>(ThemeContext);
    return (
        <div className="Logo inblo">
                <div aria-expanded={trans} onClick={() => {toggleTheme(theme === 'light' ? 'dark' : 'light');setTrans(!trans);}}>
               <Image className="m0" src="/logogo.svg" width={40} height={40} />
            </div>
        </div>
    );
}

export default ThemeToggler;