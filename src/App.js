import './App.css';
import IndexPage from './pages/index.tsx';
import Box from "./components/Box";
import styled from "styled-components";

function App() {
    /*const renderBoxes = () => {
        return [...Array(9)].map((_, row) => {
            const index = row * 9 + col;
            return <Box key={index} isBoom={index % 2 === 0} />;
        });
    };*/
  return (
    <div className="App">
        <leval>
            <IndexPage />
        </leval>

        <BoxWrapper>
            <><Box /></>
        </BoxWrapper>
    </div>
  );
}

export default App;

const BoxWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  display: flex;
  justify-content: center;
  transform: translate(-50%, -50%);
`