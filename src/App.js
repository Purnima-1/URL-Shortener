import {Grid} from '@material-ui/core'
import './App.css'
import Header from './components/Header';
import Search from './components/Search';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
  
    <Header/>
      <Grid className="App" container direction = 'column' justifyContent='center' alignItems='center'><Search/></Grid>
   
    </>
  );
}

export default App;
