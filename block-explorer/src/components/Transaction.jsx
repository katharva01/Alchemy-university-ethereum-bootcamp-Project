import React from 'react'
import { Box, Flex, HStack, Text, Image, Tag } from '@chakra-ui/react';
import transaction from '../images/transaction.png'
import { Utils} from 'alchemy-sdk';

export const Transaction = (props) => {
    let vEth = Utils.formatEther(Utils.hexValue(props.value));
    vEth = parseFloat(vEth).toFixed(2);

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
          <Image src={transaction} alt="block" />
        </Box>
        <Box>
          <Text fontSize={'sm'} > {props.tHash.slice(1,20)}...</Text>
        </Box>
      </HStack>
      <Box>
      <Text fontSize='md'>
          from
        </Text>
        <Text fontSize='sm' color='purple.300'>
        {props.from}
        </Text>
      </Box>
      <Box>
        <Tag p='2'>{vEth} eth</Tag>
      </Box>
    </Flex>
  )
}

