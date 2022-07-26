import fs from 'fs';
import { Wallet } from './generate-wallet';

/**
 * Iterate over all the wallets file in the /wallets folder
 * and convert them to Wallet objects.
 *
 * @returns {Promise<Wallet[]>}
 */
export async function GetWallets(): Promise<Wallet[]> {
  const wallets = fs.readdirSync('./wallets');
  const walletFiles = wallets.filter((file) => file.endsWith('.wallet'));

  if (walletFiles.length === 0) {
    return [];
  }

  return walletFiles.map((file) => {
    const walletJson = fs.readFileSync(`./wallets/${file}`, 'utf8');
    return JSON.parse(walletJson);
  });
}
