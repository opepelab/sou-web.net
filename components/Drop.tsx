import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const Dropdown4 = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const menuRef = React.useRef<HTMLUListElement>(null!);
  React.useEffect(() => {
    isOpenMenu && menuRef.current.focus();
  }, [isOpenMenu]);
  return (
    <div className="menu-container" onClick={() => setIsOpenMenu(!isOpenMenu)}>
      <div className="menuButton">Menu 4</div>
      {isOpenMenu && (
        <ul className="menu" ref={menuRef} tabIndex={1} onBlur={() => setTimeout(() => setIsOpenMenu(false), 125)}>
          <li className="item">
            <Link href="/">
              <a>
                <button>要素が変化します</button>
              </a>
            </Link>
          </li>
          <li className="item">
            <Link href="/about">
              <a>このブログについて</a>
            </Link>
          </li>
          <li className="item">
            <Link href="/">
              <a>要素が変化します</a>
            </Link>
          </li>
          <li className="item">
            <Link href="/">
              <a>要素が変化します</a>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Dropdown4;
