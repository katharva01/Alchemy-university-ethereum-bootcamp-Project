import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Box, Flex,HStack,Heading,Input,IconButton,Text } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'

export const Navbar = () => {
  return (
    <Box bg='white.200'>
    <Flex justify='space-between' px='12' pt='2' bg=''>
        <Heading as='h2' size='lg' color='purple.300'>B-Explorer</Heading>
        <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
    <Box  maxWidth='350px' margin='auto' align='center'>
        <HStack pt='12'>
        <Input placeholder='Enter an Address ....' size='lg' />
        <IconButton aria-label='Search database' colorScheme='purple'  icon={<SearchIcon/>}  />
        </HStack>
        <Box pt='4'>
        <Text as='i'>
            Search Details of Accounts, Transactions, Smart Contracts ...
        </Text>
        </Box>
    </Box>
    </Box>
  )
}
