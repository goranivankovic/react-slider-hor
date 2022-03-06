import logo from './logo.svg';
import './App.css';
import SliderBar from './components/SliderBar';


import man1 from './image/man-1.jpg'
import man2 from './image/man-2.jpg'
import man3 from './image/man-3.jpg'
import man4 from './image/man-4.jpg'
import man5 from './image/man-5.jpg'


function App() {
  return (
    <div>

      <SliderBar

      img={[man1,man2,man3,man4,man5]}

      imgText={["First text image slider","Second text image slider","Threed text image slider","Four text image slider","Five text image slider"]}

      arrow_color="red"

      text_color=""

      textColorHover='red'

    
   
  


 />
   
 

     
    </div>
  );
}

export default App;
