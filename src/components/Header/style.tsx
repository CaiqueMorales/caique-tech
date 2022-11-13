// Imports
import styled, { css } from 'styled-components';

// Icons
import { HiBars3, HiSun } from 'react-icons/hi2';

// Types
interface stylesProps {
  menu: boolean;
}

// Styled Components
export const HeaderS = styled.header`
  background-color: #262626;
  color: #ffffff;
`;

export const Navbar = styled.nav`
  width: min(80rem, 90%);
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  height: 4.5rem;
`;

export const Hamburger = styled(HiBars3)`
  font-size: 1.35rem;
  justify-self: start;
  cursor: pointer;
`;

export const Sidebar = styled.div<stylesProps>`
  position: fixed;
  width: min(20rem, 80vw);
  left: 0;
  top: 0;
  bottom: 0;
  background-color: #404040;
  transform: translateX(-100%);
  transition: 0.5s;

  ${(props) =>
    props.menu
      ? css`
          transform: translateX(0%);
        `
      : ''}

  & ${Hamburger} {
    position: fixed;
    top: 0rem;
    height: 4.5rem;
    left: 5vw;
    justify-content: center;
    align-items: center;
  }
`;

export const SideMenu = styled.ul`
  display: flex;
  margin-top: 8rem;
  margin-left: 5vw;
  flex-direction: column;
  gap: 2em;
`;

export const SideItem = styled.li``;

export const SideLink = styled.a`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Logo = styled.p`
  font-size: 1rem;
  font-weight: 300;
  pointer-events: none;
  -webkit-tap-highlight-color: transparent;
  ::selection {
    color: none;
    background: none;
  }
  /* For Mozilla Firefox */
  ::-moz-selection {
    color: none;
    background: none;
  }
`;

export const DarkSwitch = styled(HiSun)`
  font-size: 1.35rem;
  justify-self: end;
`;
