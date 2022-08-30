import React from 'react';
import '../styles/App.scss';

function App() {
  return (
    <div>
      <div className="container1">
         <div className="box1">Positioned respect to container-1</div>
      </div>
      <div className="container2">
         <div className="box2">positioned respect to initial position of box2</div>
      </div>
      <div className="container3">
         <div className="box3">positioned respect to container-3 which itself is positioned with respect to body.</div>
      </div>
      <div className="container4">
         <div className="box4">positioned with respect to body.</div>
      </div>
    </div>
  )
}

export default App;