import './App.css';
import ColoredUserPic from "./ColoredUserPic";

function App() {
  return (
    <div className="App">
        <ColoredUserPic
            src={'./images/ava.png'}
            size={150}
            colors={['blue', 'green']}
            hoverColors={['green', 'blue']}
            colorWidth={10}
            backgroundColor={'red'}
            margin={16}
        />
    </div>
  );
}

export default App;
