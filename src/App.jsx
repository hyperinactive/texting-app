import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  // hook to set user id's
  // const [id, setId] = useState();

  // useLocalStorage to pass the key(id) and write in into the local storage
  // in Dev Tools -> App -> Local Storage - key + value is created! (whats-app-clone-id ---- uuid)
  const [id, setId] = useLocalStorage('id');

  return id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />;
}

export default App;
