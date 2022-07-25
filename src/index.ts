import Config from '@/config';

async function main() {
  console.log('Hello World!');
  console.log(`Token address: ${Config.tokenAddress}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
