import React from 'react';
import Sidebar from './Sidebar';

// eslint-disable-next-line react/prop-types
function Dashboard({ id }) {
  return (
    <div className="d-flex" style={{height: '100vh'}}>
      <Sidebar id={id} />
    </div>
  );
}

export default Dashboard;
