import { loadConfigFromEnv } from '../utils/config';
import { createLogger } from '../utils/logging';
import { getGitHubContextFromEnv } from '../github/context';

export async function runComposite(): Promise<void> {
  const config = loadConfigFromEnv();
  const logger = createLogger('action', config.debug);
  const githubContext = getGitHubContextFromEnv();

  logger.info('Composite action entrypoint initialized', {
    repo: `${githubContext.repo.owner}/${githubContext.repo.repo}`,
    pullNumber: githubContext.pullNumber,
    baseBranch: githubContext.baseBranch,
    model: config.model,
    filePattern: config.filePattern,
    concurrencyLimit: config.concurrencyLimit,
  });
}

if (require.main === module) {
  runComposite().catch((error: unknown) => {
    const logger = createLogger('action', true);
    logger.error('Unhandled error in composite runner', { error });
    process.exitCode = 1;
  });
}

