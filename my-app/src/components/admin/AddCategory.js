import {
    FormControl,
    Input,
    FormHelperText,
    FormLabel,
    Box,
    Select,
    Heading,
    Button
} from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../../actions/categoryAction';


const AddCategory = () => {
    
    const [name, setname] = useState('')
    const [description, setdescription] = useState('')
    

    const dispatch = useDispatch()


    const handleAddCategory = () => {
        dispatch(addCategory(name, description))   
    }

    return (
       <Box m={4}>
           <Heading>Add Category</Heading>
           <FormControl>

               <FormLabel>Category Name</FormLabel>
               <Input onChange={(e) => { setname(e.target.value) }} type="text" />

               
               <FormLabel>Category Description</FormLabel>
               <Input onChange={(e) => { setdescription(e.target.value) }} type="text" />


                <Button onClick={handleAddCategory} marginTop={4} color={'white'} bg={'blue.400'}>Submit</Button>

           </FormControl>
       </Box> 
    );
}

export default AddCategory;