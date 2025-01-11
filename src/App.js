
import { Container } from 'semantic-ui-react';
import './App.css';    //uygulama stili buradan geliyor
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main"> 
      <Dashboard/> 
      </Container>
                            
    </div>
  );
}
//<Dashboard/>  bu gösterim ile <Dashboard></Dashboard> bu gösterim aynıdır..!

export default App;
