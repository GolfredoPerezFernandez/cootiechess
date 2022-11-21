import React, { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import MoralisDappContext from './MoralisCotext';
import GameContract from '../contracts/GameContract.json';
import NFTContract from '../contracts/NFT.json';
import MarketPlaceContract from '../contracts/MarketPlace.json';

function MoralisDappProvider({ children }) {
  const { web3, Moralis, user } = useMoralis();
  const [walletAddress, setWalletAddress] = useState();
  const [chainId, setChainId] = useState();

  const [gameAddress, setGameAddress] = useState(
    '0x2d54CEf941A32D0EC17b8d96Ae8792B098c2B945',
  );
  const [nftContract, setNftContract] = useState(
    '0x6D0c3F945866f8E020D1998942599aB75BBff076',
  );
  const [marketPlace, setMarketPlace] = useState(
    '0x340989070Af3825Eb7F493B4D2c9843862A8e181',
  );

  const [gameContractABI, setGameContractABI] = useState(GameContract.abi);
  const [nftContractABI, setNftContractABI] = useState(NFTContract.abi);
  const [marketPlaceAbi, setMarketPlaceAbi] = useState(MarketPlaceContract.abi);

  useEffect(() => {
    Moralis.onChainChanged(function (chain) {
      setChainId(chain);
    });

    Moralis.onAccountsChanged(function (address) {
      setWalletAddress(address[0]);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setChainId(web3.givenProvider?.chainId));
  useEffect(
    () =>
      setWalletAddress(
        web3.givenProvider?.selectedAddress || user?.get('ethAddress'),
      ),
    [web3, user],
  );

  return (
    <MoralisDappContext.Provider
      value={{
        walletAddress,
        chainId,
        gameAddress,
        setGameAddress,
        gameContractABI,
        setGameContractABI,
        nftContract,
        nftContractABI,
        marketPlace,
        marketPlaceAbi,
      }}
    >
      {children}
    </MoralisDappContext.Provider>
  );
}

function useMoralisDapp() {
  const context = React.useContext(MoralisDappContext);
  if (context === undefined) {
    throw new Error('useMoralisDapp must be used within a MoralisDappProvider');
  }
  return context;
}

export { MoralisDappProvider, useMoralisDapp };
