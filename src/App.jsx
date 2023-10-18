import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const Greatings = () => {
  return <p> Good morning </p>;
};

const Hello() {
 return <h1>Hello World</h1>;
};
const App = () => {
  return (
  <>
  <Hello/>
  <Greatings/>
  </>
  );
};

export default App;
