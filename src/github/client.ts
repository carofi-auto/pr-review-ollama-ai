export interface GitHubRepositoryRef {
  owner: string;
  repo: string;
}

export interface PullRequestRef extends GitHubRepositoryRef {
  pullNumber: number;
}

export interface GitHubComment {
  id: number;
  path: string;
  line: number | null;
  body: string;
}

export interface GitHubReviewSummary {
  totalIssues: number;
  critical: number;
  warnings: number;
  suggestions: number;
}

export interface GitHubClient {
  listPullRequestComments(ref: PullRequestRef): Promise<GitHubComment[]>;
  createReviewComment(
    ref: PullRequestRef,
    params: { path: string; line: number; body: string }
  ): Promise<GitHubComment>;
  postSummaryComment(
    ref: PullRequestRef,
    body: string
  ): Promise<GitHubComment>;
}

