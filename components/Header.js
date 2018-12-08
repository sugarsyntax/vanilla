import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    text-align: stretch;
`;

const Header = () => (
    <div>
        <Nav>
            <Link href="../pages/index.js">
                <a>Home</a>
            </Link>
            <Link href="../pages/about.js">
                <a>About</a>
            </Link>
            <Link href="../pages/portfolio.js">
                <a>Portfolio</a>
            </Link>
            <Link href="../pages/contact.js">
                <a>contact</a>
            </Link>
        </Nav>
    </div>
)

export default Header