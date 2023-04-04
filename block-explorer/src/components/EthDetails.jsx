import React from 'react';
import { Box, HStack, Heading, Image,VStack,Text } from '@chakra-ui/react'
import  ethImg from "../images/eth-diamond-purple.png";
import { useState,useEffect } from 'react';
import { Utils } from 'alchemy-sdk';


export const EthDetails = (props) => {
  const alchemy = props.alchemy;
  const [lBlock, setLBlock] = useState('');
  const [gas,setGas]= useState('');
  const [protocolVersion,setProtocolVersion]= useState('');


  useEffect(() => {
    
    const cal= async () =>{
    const blk = await alchemy.core.getBlockNumber('finalized');
    const temp = await alchemy.core.getFeeData();
    const gasPrice = Utils.formatEther(Utils.hexValue(temp.maxFeePerGas));
    const versionTemp =await alchemy.core.send( "eth_protocolVersion");
    const version= versionTemp.toString()

    
    setLBlock(blk);
    setGas(gasPrice);
    setProtocolVersion(version)
    }
    cal()
  
    
  }, [])
  
  return (
    <VStack justify='center' mt='14' gap='120px' >
      <Box  boxSize='120px'objectFit='cover'>
        <Image src={ethImg} alt="ether"/>
      </Box>
      <HStack gap='100px' bg='purple.400' w='100%' justify='center' py='10' color='white'>
        <Box  >
          <Heading as='h5' fontSize='xl'>
            Lastest mined Block
          </Heading>
          <Text textAlign='center' mt='2'>
            {lBlock}
          </Text>
        </Box>
        <Box  >
          <Heading as='h5' fontSize='xl'>
            Estimated Gas Fees
          </Heading>
          <Text textAlign='center' mt='2'>
            {gas} eth
          </Text>
        </Box>
        <Box  >
          <Heading as='h5' fontSize='xl'>
            Current protocol version
          </Heading>
          <Text textAlign='center' mt='2'>
            {protocolVersion}
          </Text>
        </Box>
      </HStack>
    </VStack>
  );
};
