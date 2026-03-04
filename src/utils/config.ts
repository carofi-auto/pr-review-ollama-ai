export interface ReviewActionConfig {
  filePattern: string;
  model: string;
  concurrencyLimit: number;
  baseBranch: string;
  maxFileBytes: number;
  maxTotalBytes: number;
  debug: boolean;
}

export function loadConfigFromEnv(
  env: NodeJS.ProcessEnv = process.env
): ReviewActionConfig {
  const filePattern = env.FILE_PATTERN ?? '**/*.{ts,tsx}';
  const model = env.MODEL ?? env.OLLAMA_MODEL ?? 'codellama';
  const concurrencyLimit = Number(env.CONCURRENCY_LIMIT ?? '5') || 5;
  const baseBranch = env.BASE_BRANCH ?? 'origin/develop';
  const maxFileBytes =
    Number(env.MAX_FILE_BYTES ?? String(512 * 1024)) || 512 * 1024;
  const maxTotalBytes =
    Number(env.MAX_TOTAL_BYTES ?? String(5 * 1024 * 1024)) || 5 * 1024 * 1024;
  const debug = env.DEBUG === 'true';

  return {
    filePattern,
    model,
    concurrencyLimit,
    baseBranch,
    maxFileBytes,
    maxTotalBytes,
    debug,
  };
}

