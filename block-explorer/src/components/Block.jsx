import { Box, Flex, HStack, Text, Image, VStack, Tag, Highlight } from '@chakra-ui/react';
import React from 'react';
import block from '../images/block.png';

export const Block = (props) => {
    let ts = props.timeStamp;
    let d = new Date();
    let dt = d.getTime()/1000;
    let timeDiffSec = Math.floor(dt-ts)

  return (
    <Flex
      direction="row"
      align="center"
      justify="space-between"
      width="100%"
      py='2'
      borderBottom='1px'
    >
      <HStack gap="3">
        <Box boxSize="40px">
          <Image src={block} alt="block" />
        </Box>
        <Box>
          <Text fontSize={'md'}> {props.bNum}</Text>
          <Text fontSize="sm"> {timeDiffSec } seconds ago </Text>
        </Box>
      </HStack>
      <Box>
        <Text fontSize='md'>
          mined by 
        </Text>
        <Text fontSize='sm' color='purple.300'>
        {props.miner}
        </Text>
      </Box>
      <Box>
        <Tag>{props.txs} txns</Tag>
      </Box>
    </Flex>
  )
}
