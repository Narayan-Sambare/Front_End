import './App.css';
import Header from './Component/Header';
import Todos from './Component/Todos';
import Footer from './Component/Footer'
function App() {    
  let todos=[
    { 
      sno :1,
      title :"go to the market"
    },
    { 
      sno :2,
      title :"go to the market and come with milk and tea"
    },
    { 
      sno :3,
      title :"go to the gym"
    },
    { 
      sno :4,
      title :"go to the home"
    },
    { 
      sno :5,
      title :"go to the hell"
    }
  ]
  return (
    <>
    <Header/>
    <Todos todos={todos}/>
    <Footer/>
    </>
  );
}
export default App;
