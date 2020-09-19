import React from 'react';

// eslint-disable-next-line react/prop-types
function Dashboard({ id }) {
  return (
    <div>
      <p>This is a dashboard with the id of:</p>
      <p>{id}</p>
    </div>
  );
}

export default Dashboard;
