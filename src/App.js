import './App.css';
import ApiTester from './ApiTester';
import ConnectionContext, { defaultConnectionData } from './context/ConnectionContext';

function App() {

  return (
    <div className="App">
      {/*  */}
      {/* Render or access the context data from the  child component ApiTester
      it is child because it is inside Context */}
      {/* bring data from connection */}
      < ConnectionContext.Provider value ={defaultConnectionData}>
        <ApiTester />
      </ConnectionContext.Provider>
    </div>
  );
}

export default App;
