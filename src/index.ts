import chalk from 'chalk';
import { GenerateNewWallet, CountWallets, Wallet, GetWallets } from '@/utils/wallet';
import Sleep from '@/utils/sleep';
import Config from '@/config';
import inquirer from 'inquirer';

async function viewWallets(): Promise<void> {
  const readWallets = await GetWallets();
  for (const wallet of readWallets) {
    console.log(chalk.green(`Wallet: ${wallet.address}`));
  }
}

async function generateWallets(walletsCount: number): Promise<void> {
  const walletGeneratorPromises: Promise<Wallet>[] = [];
  for (let i = walletsCount; i < Config.walletAmount; i++) {
    walletGeneratorPromises.push(GenerateNewWallet());
  }

  const wallets = await Promise.all(walletGeneratorPromises);
  console.log(chalk.green(`Generated ${wallets.length} wallets.`));
}

async function viewTokenBalance() {
  // View Token Balance of a Wallet
}

async function run() {
  let exitProcess = false;

  while (!exitProcess) {
    const inquire = await inquirer.prompt([
      {
        type: 'list',
        name: 'mainMenu',
        message: 'What do you want to do?',
        choices: ['View Wallets', 'View a Wallet Token Balance', 'Generate More Wallets', 'Exit']
      }
    ]);

    if (inquire.mainMenu === 'Exit') {
      exitProcess = true;
    }

    if (inquire.mainMenu === 'View Wallets') {
      await viewWallets();
    }

    if (inquire.mainMenu === 'View a Wallet Token Balance') {
      // View Token Balance of a Wallet
      await viewTokenBalance();
    }

    if (inquire.mainMenu === 'Generate More Wallets') {
      // Generate More Wallets
      await generateWallets(0);
    }
  }
}

async function main() {
  console.log(chalk.green('Welcome to DexTrolls! This is a dex bot for the EVM based blockchain.'));

  console.log('Checking for wallets...');
  await Sleep(1000);

  const walletsCount = await CountWallets();
  console.log(
    `Found ${walletsCount < Config.walletAmount ? chalk.red(walletsCount) : chalk.green(walletsCount)} wallets.`
  );

  if (walletsCount < Config.walletAmount) {
    // Generate Wallets
    console.log(chalk.yellow('Not enough wallets found. Generating new wallets...'));

    await generateWallets(walletsCount);
  }

  console.log(chalk.green('----------------------------------------------------'));

  // View Wallets
  await viewWallets();

  // Run the main program
  await run();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
