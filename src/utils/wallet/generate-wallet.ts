import { ethers } from 'ethers';
import crypto from 'crypto';

type Wallet = {
  address: string;
  privateKey: string;
};

export async function GenerateNewWallet(): Promise<Wallet> {
  const hexStr = crypto.randomBytes(32).toString('hex');
  const privateKey = `0x${hexStr}`;

  const wallet = new ethers.Wallet(privateKey);

  return {
    address: wallet.address,
    privateKey
  };
}
