<h1>Responsiv Full Screen Slider with props</h1>



<h4>react-slider-hor is a React component to build  simple and responsive Slider .</h4>



## Installation

<h5>Use the npm package manager to install react-slider-hor</h5>

</br>





```bash
npm i react-slider-hor
```
<h4>React-icons must be installed</h4>

```bash
npm install react-icons --save
```

</br>


[Link with Example](https://goranivankovic.github.io/react-slider-hor/)



</br>




  <img src="https://media.giphy.com/media/khgnBDJEMU8RKet3o3/giphy.gif" heigt="500" width="50%" />
  
  
  <h4>
  Responsive Slider with props.</br>
  Technologies use: react, react-hooks, react-icons, css.</br>
  Don't waste your time building your own Slider, just simple downloaded with npm.</br>
  Required: Node.js, NPM, React.</br>
  Simple to use send props in your main component. </br>
  Add colors of: arrow_color, text_color, textColorHover.<br/>
  Add img src with props minimum 3 elements </br> 
  Add imgText with props.</br>
  
  I hope you liked and feel happy to enjoy and download.
  

  </h4>
  
  
  
  ## Usage

```javascript

import SliderBar from 'react-slider-hor';

//Import images from folders or links

import man1 from './image/man-1.jpg'
import man2 from './image/man-2.jpg'
import man3 from './image/man-3.jpg'
import man4 from './image/man-4.jpg'
import man5 from './image/man-5.jpg'


function App() {
  return (
    <div>

      <SliderBar

      //Set images items to img prop .Minimum 3 items .
      img={[man1,man2,man3,man4,man5]}

     //Set image text to img item .
      imgText={["First text image slider","Second text image slider","Threed text image slider","Four text image slider","Five text image slider"]}

     //Change arrow colors not required default white.
      arrow_color=""
      
     //Change text color not required default white.
      text_color=""
      
     //Change hover text color not required default red.
      textColorHover=''

    
  

 />
   
 

     
    </div>
  );
}

export default App;




```

</br>

</br>

<img  align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png" alt="npm" />https://www.npmjs.com/package/react-slider-hor

</br>


<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />https://github.com/goranivankovic/react-slider-hor


</br>
## License

[MIT](https://choosealicense.com/licenses/mit/)

<hr></hr>

##
[developed](https://github.com/goranivankovic)

