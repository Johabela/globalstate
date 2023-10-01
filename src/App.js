import './App.css';
import ApiTester from './ApiTester';
import UserGlobalData from './context/UserContext';
import UserDisplay from './UserDisplay';
import ConnectionProvider from './context/ConnectionContext';

function App() {
  
  return (
    <div className="App">

      <UserGlobalData>
        {/* */}
         {/* Render or access the context data from the  child component ApiTester
//       it is child because it is inside Context */}
        {/* bring data from connection */}
        <ConnectionProvider>
          <ApiTester />
          {/* the grand child component userDiplay , 
//           there are not props because there is a file with the data   */}

          <UserDisplay />
        </ConnectionProvider>
      </UserGlobalData>

      {/* long way to write the above block of components */}
      {/* 
      <UserGlobalData>
        <ConnectionContext.Provider value={defaultConnectionData}>
          <ApiTester />
            <UserDisplay />
        </ConnectionContext.Provider>
      </UserGlobalData> 
      */}

      
    </div>
  );
}

export default App;