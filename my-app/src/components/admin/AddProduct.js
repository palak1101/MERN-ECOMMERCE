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
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../actions/productAction';

const AddProduct = () => {

    const [name, setname] = useState('')
    const [imageUrl, setimageUrl] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')
    const [color, setcolor] = useState('')
    const [listingPrice, setlistingPrice] = useState('')
    const [actualPrice, setactualPrice] = useState('')
    const [compatibleWith, setcompatibleWith] = useState('')
    const [stock, setstock] = useState(0)
    const [categories, setCategories] = useState([])
    const dispatch = useDispatch()


    // function responsible to get categories from database
    const getCategories = async () => {
        const res = await axios.get('https://palak-ecommerce-api.herokuapp.com/api/v1/category/all')
        const { categories, message } = res.data
        setCategories(categories)
    }

    useEffect(() => {
        getCategories()
    }, [])



    const handleAddProduct = () => {
        dispatch(addProduct(
            name, actualPrice, listingPrice, description, color, compatibleWith, category, imageUrl, stock
        ))

        console.log({
            name, actualPrice, listingPrice, description, color, compatibleWith, category, imageUrl, stock
        })
    }

    return (
        <Box m={4}>
            <Heading>Add Product</Heading>
            <FormControl>

                <FormLabel>Product Name</FormLabel>
                <Input onChange={(e) => { setname(e.target.value) }} type="text" />

                <FormLabel>Image URL </FormLabel>
                <Input onChange={(e) => { setimageUrl(e.target.value) }} type="text" />

                <FormLabel>Product Description</FormLabel>
                <Input onChange={(e) => { setdescription(e.target.value) }} type="text" />

                <FormLabel>Compatible With</FormLabel>
                <Input onChange={(e) => { setcompatibleWith(e.target.value) }} type='text' />

                <FormLabel>Category</FormLabel>
                <Select onChange={(e) => {
                    const { _id } = categories.find(category => category.name == e.target.value)
                    setcategory(_id)
                }} placeholder="Select product's category">
                    {
                        categories && categories.map(category => {
                            return <option id={category._id} >{category.name}</option>
                        })
                    }
                </Select>

                <FormLabel>Product Color</FormLabel>
                <Input onChange={(e) => { setcolor(e.target.value) }} type="text" />

                <FormLabel>Actual Price</FormLabel>
                <Input onChange={(e) => { setactualPrice(e.target.value) }} type="number" />

                <FormLabel>Listing Price</FormLabel>
                <Input onChange={(e) => { setlistingPrice(e.target.value) }} type="number" />

                <FormLabel>Stock</FormLabel>
                <Input onChange={(e) => { setstock(e.target.value) }} type="number" />

                <Button onClick={handleAddProduct} marginTop={4} color={'white'} bg={'blue.400'}>Submit</Button>

            </FormControl>
        </Box>
    );
}

export default AddProduct;