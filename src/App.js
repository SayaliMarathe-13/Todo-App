import { Heading } from '@chakra-ui/react';
import './App.css';
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
import {VStack, IconButton, useColorMode} from '@chakra-ui/react';
import {FaSun, FaMoon} from 'react-icons/fa' //fa is a folder i.e. FaAwesome
import { useState, useEffect } from 'react'




function App() {
  const initialTodos = [
    {
        id:1,
        body:'get bread',
    },

    {
        id:2,
        body:'get butter',
    },

];
const[todos, setTodos] = useState(
  () => JSON.parse(localStorage.getItem('initialTodos')) || []);

  useEffect(()=> {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos])
function deleteTodo(id){
  const newTodos = todos.filter(todo=>{
    return todo.id !== id
  });
  
  setTodos(newTodos);
}

function addTodo(todo){
  setTodos([...todos, todo]);
}




const {colorMode, toggleColorMode} = useColorMode()
  return (
    <VStack p={4}> //If we provided 1 here then padding is 1*4 bits=4 pixel , if 10 then 40
      <IconButton 
      icon={colorMode==='light'?<FaSun />:<FaMoon/>} 
      isRound="true" 
      size="lg" 
      alignSelf="flex-end"
      onClick = {toggleColorMode}
        >
      </IconButton>

         <Heading mb="8" 
         bgGradient="linear(to-r, blue.700, blue.500, purple.400, purple.600)"
         bgClip="text" pb='8'>
          Something to do!!!!
         </Heading> 

         <TodoList todos={todos} deleteTodo={deleteTodo}/>
         <AddTodo addTodo={addTodo}/>
   </VStack>
   
   
      
  );
}

export default App;
