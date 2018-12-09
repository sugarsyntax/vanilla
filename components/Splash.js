import Head from 'next/head'
import Header from '../pages/Header'
import styled from 'styled-components'

const Shape = styled.div`
    position: absolute;
    width: 100%;
    min-height: 196.85px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.05);
    h2 {
        margin-top: 1rem;
        text-align: center;
        color: #919aa1;
        font-size: 3em;
    }
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 3rem;
        font-size: 1.8em;
        color: #919aa1;
    }
    li {
        list-style-type: none;
    }
    @media (max-width:920px) {
        min-height: auto;
        ul {
            flex-direction: column;
            font-size: 2em;
            margin: 0% 50%;
            list-style-type: circle;
        }
    }
`;

const Img = styled.div `
    top: 0;
    width: 100vw;
    min-height: 40em;
    z-index: -1;
    background-image: url("static/pexels-photo-1309766.jpeg");

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Wrect = styled.div `
    background-color: #fff;
    width: 100%;
    min-height: 20em;
    z-index: 1;
    img {
        margin-right: 0em;
        margin-left: 11em;
        width: 15em;
        border-radius: 100px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    p {
        float: right;
        margin-right: 6em;
        font-size: 3em;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;
const Splash = () => (
            <div>
                <Head>
                    <title>Jacquelline.io</title>
                    <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
                </Head>
                <Header />
                <Img />
                <Wrect>
                    <img src="/static/ABC.jpg" alt="my image" />
                    <p>Hi, I'm Jackie, I'm a web developer</p>
                </Wrect>
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
                {/* {props.children} */}
            </div>
)

export default Splash