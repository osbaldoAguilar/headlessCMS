import styled from "styled-components";

export default function NavLink({ href, children }) {
  return (
    <NavLinkAnchor href={href}>
      {children}
      <Revealed aria-hidden={true}>
        {children}
      </Revealed>
    </NavLinkAnchor>
  );
}
const NavLinkAnchor = styled.a`
    display: block;
    position: relative;
    text-decoration: none;
    color: inherit;
    font-weight: 700;
    font-size: 1.25rem;
    color: transparent;
    background: #666666;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    text-shadow: 0px 3px 3px rgba(255,255,255,0.5);
  `;
const Revealed = styled.span`
    color: #79a6ff;
    position: absolute;
    top: 0;
    left: 0;
    filter: drop-shadow(0px 0px 4px white);
    clip-path: polygon(
      0% 100%,
      100% 100%,
      100% 100%,
      0% 100%
    );
    transition: clip-path 1500ms;
    ${NavLinkAnchor}:hover & {
      clip-path: polygon(
        0% 0%,
        100% 0%,
        100% 100%,
        0% 100%
      );
      transition: clip-path 1000ms;
    }
  `;