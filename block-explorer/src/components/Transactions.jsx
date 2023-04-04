import React, { useEffect,useState } from 'react'
import { Transaction } from './Transaction';
import { Box, Heading, Link } from '@chakra-ui/react';

export const Transactions = (props) => {

  const alchemy=props.alchemy;
  const [transactions, setTransactions] = useState([])
  useEffect( () => {
    const getTransactions= async ()=>{
      let latest = await alchemy.core.getBlockNumber('latest');
      let ar=[];
      let data = await alchemy.core.getBlockWithTransactions(latest);
      ar.push(data.transactions);
      // console.log(ar)
      setTransactions([...ar[0]]);
      
    }
    getTransactions();
    // console.log(transactions)
  }, [])

  return (
    <Box width="50%"  m='2' mt='4'>

      <Heading as="h3" fontSize="2xl" w='100%' bg='purple.400' color='white' p='3'>
        Latest Transactions
      </Heading>
    <Box p="2" border="1px" >
      {transactions.map((tx,i) => {
        if(i<6)
        return <Transaction tHash={tx.hash} from={tx.from} value={tx.value}  />;
      })}
    </Box>
    <Box border="1px" borderTop='0' p="3"  textAlign='center'>
        <Link fontSize='lg'> 
            Load More Transactions ....
        </Link>
      </Box>
    </Box>

  
  )
}
