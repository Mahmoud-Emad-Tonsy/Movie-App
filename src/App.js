
import './App.css';
import Header from './component/Header';
import Add from './component/Add';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import WatchedList from './component/WatchedList';
import Watched from './component/Watched';

import ContextProvider from './component/Context/GlobalContext';
function App() {
  return (
    <Router>
    <ContextProvider>

   
    <Header/>
<Routes>

<Route path='/' element={<WatchedList/>}/>
<Route path='/watched' element={<Watched/>}/>
<Route path='/add' element={<Add/>}/>

</Routes>

</ContextProvider>
    </Router>
  );
}

export default App;
