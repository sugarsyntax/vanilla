import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 4rem 8rem;
    font-size: 2.8rem;
    a {
        text-decoration: none;
        color: #233FA2;
    }
`;

class Header extends React.Component {
    render() {
        return (
            <div>
                <Nav>
                    <Link href="/index.js">
                        <a>Home</a>
                    </Link>
                    <Link href="/about.js">
                        <a>About</a>
                    </Link>
                    <Link href="/portfolio.js">
                        <a>Portfolio</a>
                    </Link>
                    <Link href="/contact.js">
                        <a>Contact</a>
                    </Link>
                </Nav>
            </div>
            );
        }
    }

export default Header