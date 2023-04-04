import React from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { EthDetails } from './components/EthDetails';
import { Blocks } from './components/Blocks';

import { Network, Alchemy } from 'alchemy-sdk';
import { Transactions } from './components/Transactions';

function App() {
  // Optional Config object, but defaults to demo api-key and eth-mainnet.
  const settings = {
    apiKey: process.env.ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
    network: Network.ETH_MAINNET, // Replace with your network.
  };

  const alchemy = new Alchemy(settings);
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <EthDetails alchemy={alchemy} />
      <Flex direction="row" gap='1' mt='9'>
        <Blocks alchemy={alchemy} />
        <Transactions alchemy={alchemy} />

      </Flex>
    </ChakraProvider>
  );
}

export default App;
