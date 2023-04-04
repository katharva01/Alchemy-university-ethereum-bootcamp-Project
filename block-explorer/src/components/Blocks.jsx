import React, { useEffect, useState } from 'react';
import { Box, Heading, Link } from '@chakra-ui/react';
import { Block } from './Block';

export const Blocks = props => {
  const alchemy = props.alchemy;
  const [blocks, setBlocks] = useState([]);
  useEffect(() => {
    const getBlocks = async () => {
      let latest = await alchemy.core.getBlockNumber('latest');
      let ar = [];
      for (let i = 0; i < 6; i++) {
        let data = await alchemy.core.getBlock(latest - i);
        ar.push(data);
        // console.log(data);
        // console.log(data.miner);
      }
      // console.log(ar)
      setBlocks([...ar]);
    };
    getBlocks();
    console.log(blocks)
  }, []);

  return (
    <Box width="50%" m="2" mt="4">
      <Heading
        as="h3"
        fontSize="2xl"
        w="100%"
        bg="purple.400"
        color="white"
        p="3"
      >
        Latest Blocks
      </Heading>
      <Box p="2" border="1px">
        {blocks.map((block) => {
          return <Block bNum={block.number} miner={block.miner} txs={block.transactions.length} timeStamp={block.timestamp} />;
        })}
      </Box>
      <Box border="1px" borderTop='0' p="3"  textAlign='center'>
        <Link fontSize='lg'> 
            Load More Blocks ....
        </Link>
      </Box>
    </Box>
  );
};
