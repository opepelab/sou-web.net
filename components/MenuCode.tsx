import React from 'react';

type Props = {
    open: boolean;
    setOpen: any;
};


export const MenuCode: React.FC<Props> = ({
    open,
    setOpen,
}) => {
    return (     
        <>
        <div>
            <button
                type="button"
                className="button Line"
                aria-controls="global-nav"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
            >
                <div />
                <div />
            </button>
        </div>
        </>
    );
};

export default MenuCode;