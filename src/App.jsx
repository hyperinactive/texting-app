import React, { useState } from 'react';
import Login from './components/Login';

function App() {
  const [id, setId] = useState();

  return (
    <div className="App">
      <>
        {id}
        {/* set id of a user */}
        <Login onIdSubmit={setId} />
      </>
    </div>
  );
}

export default App;
