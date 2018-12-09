import styled from 'styled-components'

const Rect = styled.div`
    background-color: rgba(0, 0, 0, 0.05);
    margin: 0;
    padding 3rem 0rem;
    text-align: center;
    height: 16em;
    h1 {
        color: #000;
        text-align: center;
    }
`;

const Diamond = styled.div`
    margin: 0;
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#55ff32+16,9dff5b+27,d894ef+59,ff00d0+88 */
    background: rgb(85,255,50); /* Old browsers */
    background: -moz-linear-gradient(45deg, rgba(85,255,50,1) 16%, rgba(157,255,91,1) 27%, rgba(216,148,239,1) 59%, rgba(255,0,208,1) 88%); /* FF3.6-15 */
    background: -webkit-linear-gradient(45deg, rgba(85,255,50,1) 16%,rgba(157,255,91,1) 27%,rgba(216,148,239,1) 59%,rgba(255,0,208,1) 88%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(45deg, rgba(85,255,50,1) 16%,rgba(157,255,91,1) 27%,rgba(216,148,239,1) 59%,rgba(255,0,208,1) 88%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#55ff32', endColorstr='#ff00d0',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
    height: 30px;
    transform:rotate(45deg);
      width:30px;
    filter: blur(0.5px);
`;

class Title extends React.Component {
    render() {
        return (
            <div>
                <Rect>
                    <h1>
                    <Diamond>
                    </Diamond>
                        Title
                    </h1>
                </Rect>
            </div>
            );
        }
    }

export default Title