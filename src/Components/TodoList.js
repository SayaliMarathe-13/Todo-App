import React from 'react';
import {HStack,Badge, VStack ,Text, IconButton, StackDivider, Spacer} from '@chakra-ui/react';
import {FaTrash} from 'react-icons/fa';

function TodoList({todos, deleteTodo}) {

  if(!todos.length){
    return(
      <Badge colorScheme='purple' p='4'm='4' borderRadius='lg'>No Todos, Wanna Add some!!!!</Badge>
    )
  }
    
  return (
    <VStack
    divider={<StackDivider/>}
    borderColor='gray.400'
    borderWidth='2px'
    p='4'
    w='50%'
    borderRadius='lg'
    maxW={{base:'90vw', sn:'80vw', lg:'50vw', xl:'40vw'}}
    alignItems="stretch"
    >
       {todos.map((todo) =>(                          //map((element) => { /* … */ })

        <HStack key ={todo.id}>
           <Text >{todo.body}</Text>
           <Spacer />
           <IconButton icon={<FaTrash/> } isRound='true' onClick={()=>deleteTodo(todo.id)}/>
        </HStack>
       ))}
    </VStack>
  )
}

export default TodoList
