import React, { useState, useEffect, useRef } from 'react';
import {
  DarkSwitch,
  Hamburger,
  HeaderS,
  Logo,
  Navbar,
  Sidebar,
  SideItem,
  SideLink,
  SideMenu,
} from './style';

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const openMenu = (e: React.MouseEvent) => {
    setMenu(!menu);
  };

  let sidebarRef = useRef(null);

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      document.addEventListener('mousedown', (event) => {
        if (!ref.current.contains(event.target)) {
          setMenu(false);
        }
      });
    });
  };

  useOutsideAlerter(sidebarRef);

  return (
    <HeaderS>
      <Sidebar ref={sidebarRef} menu={menu}>
        <SideMenu>
          <Hamburger onClick={openMenu}></Hamburger>
          <SideItem>
            <SideLink>Home</SideLink>
          </SideItem>
          <SideItem>
            <SideLink>Home</SideLink>
          </SideItem>
          <SideItem>
            <SideLink>Home</SideLink>
          </SideItem>
          <SideItem>
            <SideLink>Home</SideLink>
          </SideItem>
        </SideMenu>
      </Sidebar>
      <Navbar>
        <Hamburger onClick={openMenu} />
        <Logo>Caique Tech</Logo>
        <DarkSwitch />
      </Navbar>
    </HeaderS>
  );
};

export default Header;
