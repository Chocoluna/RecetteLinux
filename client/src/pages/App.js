import logo from '../assets/chocolate-bar.png';
import MenuAppBar from '../components/Header';
import { Stage, Layer, Star, Text, Rect } from 'react-konva';
import '../css/App.css';


var classes;

function App() {


  return (
      <div className="App">
        <MenuAppBar />
      
      <Stage width={170} height={170}>
        <Layer>
        <Text text="Some text on canvas" fontSize={15} />
          <Rect
            x={20}
            y={50}
            width={100}
            height={100}
            fill="red"
            shadowBlur={10}
          />
        </Layer>
      </Stage>
      </div>
    
  );
}

export default App;
