import type { GitHubClient } from '../github/client';
import type { GitHubContext } from '../github/context';
import type {
  OllamaClient,
  ReviewIssue,
  ReviewSeverity,
} from '../ollama/client';
import type { ReviewChunk } from './chunker';
import { summarizeSeverities, type SeveritySummary } from './severity';

export interface ReviewerConfig {
  filePattern: string;
  concurrencyLimit: number;
  maxFileBytes: number;
  maxTotalBytes: number;
  maxIssuesPerFile: number;
}

export interface ReviewResult {
  issues: ReviewIssue[];
  summary: SeveritySummary;
  filesReviewed: number;
}

export interface ReviewerDependencies {
  githubClient: GitHubClient;
  ollamaClient: OllamaClient;
}

export interface ReviewerContext {
  github: GitHubContext;
  chunks: ReviewChunk[];
}

export async function runReview(
  _config: ReviewerConfig,
  _deps: ReviewerDependencies,
  _context: ReviewerContext
): Promise<ReviewResult> {
  const emptyIssues: ReviewIssue[] = [];
  const severities: ReviewSeverity[] = [];

  const summary = summarizeSeverities(
    severities.map((severity) => ({ severity }))
  );

  return {
    issues: emptyIssues,
    summary,
    filesReviewed: 0,
  };
}

