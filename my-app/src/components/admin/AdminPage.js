import { Box, Heading } from '@chakra-ui/react'
import AddProduct from './AddProduct';
import ProductsTable from './ProductsTable'


const AdminPage = () => {
  return (
      <Box p={4}>
        <Heading>ADMIN</Heading>

        <Box m={4}>
            <ProductsTable />
            <AddProduct />
        </Box>

      </Box>
  );
}

export default AdminPage;