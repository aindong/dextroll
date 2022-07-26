import chalk from 'chalk';
import { CountWallets } from '@/utils/wallet/count-wallets';
import Sleep from '@/utils/sleep';

async function main() {
  console.log(chalk.green('Welcome to DexTrolls! This is a dex bot for the EVM based blockchain.'));

  console.log('Checking for wallets...');
  await Sleep(1000);

  //
  const walletsAreReady = await CountWallets();
  console.log('walletsAreReady', walletsAreReady);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
