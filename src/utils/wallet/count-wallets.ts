import fs from 'fs';

/**
 * Iterate over all the wallets file in the /wallets folder
 * and count file with `.wallet` extension, if total number of wallets is equal to the number of wallets in the config
 * return true if they are equal, false otherwise
 *
 * @returns {Promise<number>}
 */
export async function CountWallets(): Promise<number> {
  const wallets = fs.readdirSync('./wallets');
  const walletFiles = wallets.filter((file) => file.endsWith('.wallet'));
  const walletCount = walletFiles.length;

  return walletCount;
}
