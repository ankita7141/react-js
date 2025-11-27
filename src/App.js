
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/textform';//it is file name not a component name
function App() {
    return ( <>
    

<Navbar title="textUtile2" about="about us" homelink="https://www.google.com/"/>
<div className="container my-3" > 
<Textform  heading="enter the text below"/> 

</div>
    </>
    
    
    
    
    
    
    

    );
}


export default App;

//margin from top and bottom: my-3
//className="container" to make it responsive and aligned in center