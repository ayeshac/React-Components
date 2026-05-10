import React from 'react';
import './App.css';
import { AccordionItem } from './types';
import Accordion from './components/Accordion';

function App() {

  const items: AccordionItem[] = [
    {
      header: 'What is React?',
      body: 'React is a JavaScript library for building user interfaces, maintained by Meta.'
    },
    {
      header: 'What is TypeScript?',
      body: 'TypeScript is a strongly typed programming language that builds on JavaScript.'
    },
    {
      header: 'What is a custom hook?',
      body: 'A custom hook is a reusable function that contains React hook logic extracted from a component.'
    },
    {
      header: 'What is props drilling?',
      body: 'Props drilling is when you pass props through multiple layers of components just to reach a deeply nested child.'
    }
  ]
  
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <h1>FAQ</h1>
      <Accordion data={items}/>
    </div>
  );
}

export default App;
