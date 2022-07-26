import fs from 'fs';
import { ethers } from 'ethers';
import crypto from 'crypto';

export type Wallet = {
  address: string;
  privateKey: string;
};

export async function GenerateNewWallet(): Promise<Wallet> {
  const hexStr = crypto.randomBytes(32).toString('hex');
  const privateKey = `0x${hexStr}`;

  const wallet = new ethers.Wallet(privateKey);

  const walletJson: Wallet = {
    address: wallet.address,
    privateKey
  };

  // Save wallet to file
  await SaveWallet(walletJson);

  return walletJson;
}

async function SaveWallet(wallet: Wallet): Promise<void> {
  // Save file to /wallets/ directory
  try {
    const walletFile = `./wallets/${wallet.address}.wallet`;
    await fs.promises.writeFile(walletFile, JSON.stringify(wallet));
  } catch (error) {
    throw new Error(`Error saving wallet to file: ${error}`);
  }
}
