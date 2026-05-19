import React, { useEffect, useState } from 'react';
import './App.css';
import { AccordionItem } from './types/accordion';
import Accordion from './components/Accordion';
import ToastContainer from './components/ToastContainer';
import useToast from './hooks/useToast';
import ModalUI from './components/Modal';
import './components/Modal.css'
import SearchBar from './components/SearchBar';
import { SearchProps } from './types/searchBar';

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

  const { toastData, addToast, removeToast } = useToast()

  const [isOpen, setIsOpen] = useState(false)
  const handleConfirm = () => {
    alert("confirmed!")
    setIsOpen(false)
  }
  // let data = [{id:'1',name:"ayesha",email:"a@gmail.com",phone:"123234"}]
  const [data, setData] = useState<SearchProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(()=>{
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then(data=>{setData(data);setIsLoading(false)})
  },[])

  return (
    // <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
    //   <h1>FAQ</h1>
    //   <Accordion data={items}/>
    // </div>
    // <div style={{ padding: '40px' }}>
    //   <h1>Toast Demo</h1>
    //   <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
    //     <button onClick={() => addToast({ message: 'Profile saved successfully!', type: 'success' })}>
    //       Success
    //     </button>
    //     <button onClick={() => addToast({ message: 'Something went wrong!', type: 'error' })}>
    //       Error
    //     </button>
    //     <button onClick={() => addToast({ message: 'New update available!', type: 'info' })}>
    //       Info
    //     </button>
    //   </div>
    //   <ToastContainer toastData={toastData} removeToast={removeToast} />
    // </div>
    // <div>
    //   <button onClick={() => setIsOpen(true)}>Open Modal</button>
    //   <ModalUI title={'Modal title'} isOpen={isOpen} onClose={()=>setIsOpen(false)} onConfirm={handleConfirm}><p>This is modal content</p></ModalUI>
    // </div>
    <div>
      <SearchBar data={data} isLoading={isLoading} />
    </div>
  );
}

export default App;
