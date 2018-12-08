import styled from 'styled-components'

const Rect = styled.div`
    background-color: rgba(0, 0, 0, 0.05);
    margin: 0;
    padding 2.5rem 0rem;
    text-align: center;
`;

class Title extends React.Component {
    render() {
        return (
            <div>
                <Rect>
                    <h1>Title</h1>
                </Rect>
            </div>
            );
        }
    }

export default Title