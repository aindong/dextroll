export default {
  deadAddress: '0x0000000000000000000000000000000000000000',
  tokenAddress: process.env.TOKEN_ADDRESS || '0x0000000000000000000000000000000000000000',
  walletAmount: process.env.WALLET_AMOUNT || 0,

  chain: {
    rpc: process.env.RPC_URL || 'https://data-seed-prebsc-1-s2.binance.org:8545',
    network: {
      name: process.env.NETWORK_NAME || 'BSC_TESTNET',
      id: process.env.NETWORK_ID || 97
    }
  }
};
