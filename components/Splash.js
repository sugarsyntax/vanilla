import Head from 'next/head'
import Header from '../pages/Header'
import styled from 'styled-components'

const Shape = styled.div`
    position: absolute;
    width: 100%;
    height: 196.85px;
    color: #fff;
    background: #7A98FE;
    h2 {
        margin-top: 1rem;
        text-align: center;
    }
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 3rem;
    }
`;
const Splash = (props) => (
            <div>
                <Head>
                    <title>Jacquelline.io</title>
                    <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
                </Head>
                <Header />
                <Shape>
                    <h2>Skills</h2>
                    <ul>
                        <li>HTML5/CSS3</li>
                        <li>Javascript</li>
                        <li>Git/GitHub</li>
                        <li>Bootstrap</li>
                        <li>Unix</li>
                        <li>Ruby</li>
                    </ul>
                </Shape>
                {props.children}
            </div>
)

export default Splash