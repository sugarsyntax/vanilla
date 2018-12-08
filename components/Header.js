import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
                        <a>contact</a>
                    </Link>
                </Nav>
            </div>
            );
        }
    }

export default Header