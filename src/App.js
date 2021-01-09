import React from 'react';
import './App.css';
import LazyImage from './components/image.jsx';

export default function App() {
  return (
    <div className="imgContainer">
      <LazyImage thumbnail="https://forge-homework.s3.amazonaws.com/thumb.jpg" src="https://forge-homework.s3.amazonaws.com/fullsize.jpg" height="600px" width="800px" />
    </div>
  );
}