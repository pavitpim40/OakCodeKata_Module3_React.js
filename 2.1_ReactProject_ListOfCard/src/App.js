import React from 'react'
import Card from './component/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import photo1 from './photo/1.png';
import photo2 from './photo/2.png';
import photo3 from './photo/3.jfif';
import './App.css';

function App() {
  
  
  return (
    <div className="row">
      <div className="col-sm-4">
        <Card
        image={photo1}
        title='How To Make Interactive ReactJS Form'
        description="let's write some interactive form with React"
        />
      </div>
      <div className="col-sm-4">
        <Card
        image={photo2}
        title='Babelify your JavaScript code' 
        description='Babel make JavaScript code browser-compatible'/>
      </div>
      <div className="col-sm-4">
        <Card
        image={photo3}
        title='JavaScript Basics Before You Learn React' 
        description='Learn the prerequisites of learning React fast'/>
      </div>
    </div>
  );
}

export default App;
