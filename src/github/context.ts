import type { GitHubRepositoryRef } from './client';

export interface GitHubContext {
  repo: GitHubRepositoryRef;
  pullNumber: number;
  sha: string;
  baseBranch: string;
}

export function getGitHubContextFromEnv(
  env: NodeJS.ProcessEnv = process.env
): GitHubContext {
  const {
    GITHUB_REPOSITORY,
    GITHUB_REPOSITORY_OWNER,
    PR_NUMBER,
    GITHUB_SHA,
    BASE_BRANCH,
  } = env;

  if (!GITHUB_REPOSITORY || !PR_NUMBER || !GITHUB_SHA) {
    throw new Error('Missing required GitHub environment variables.');
  }

  const [ownerFromRepo, repo] = GITHUB_REPOSITORY.split('/');
  const owner = GITHUB_REPOSITORY_OWNER || ownerFromRepo;

  const pullNumber = Number(PR_NUMBER);
  if (!Number.isFinite(pullNumber)) {
    throw new Error('Invalid PR_NUMBER environment variable.');
  }

  return {
    repo: { owner, repo },
    pullNumber,
    sha: GITHUB_SHA,
    baseBranch: BASE_BRANCH ?? 'origin/develop',
  };
}

