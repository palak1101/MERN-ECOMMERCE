import { Box, Heading } from '@chakra-ui/react'
import AddCategory from './AddCategory';
import AddProduct from './AddProduct';
import ProductsTable from './ProductsTable'


const AdminPage = () => {
  return (
      <Box p={4}>
        <Heading textAlign={'center'}>ADMIN</Heading>

        <Box m={4}>
            <ProductsTable />
        </Box>

        <Box m={4}>
            <AddProduct />
        </Box>

        <Box m={4}>
            <AddCategory />
        </Box>

      </Box>
  );
}

export default AdminPage;