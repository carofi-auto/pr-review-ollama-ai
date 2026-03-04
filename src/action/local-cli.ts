import { createLogger } from '../utils/logging';

export async function runLocalCli(
  argv: string[] = process.argv.slice(2)
): Promise<void> {
  const logger = createLogger('cli', true);

  logger.info('Local review CLI is not yet implemented', { argv });
}

if (require.main === module) {
  runLocalCli().catch((error: unknown) => {
    const logger = createLogger('cli', true);
    logger.error('Unhandled error in local CLI', { error });
    process.exitCode = 1;
  });
}

