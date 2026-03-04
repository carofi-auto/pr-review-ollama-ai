import type { ReviewSeverity } from '../ollama/client';

export interface SeveritySummary {
  totalIssues: number;
  counts: Record<ReviewSeverity, number>;
}

export function summarizeSeverities(
  issues: { severity: ReviewSeverity }[]
): SeveritySummary {
  const counts: Record<ReviewSeverity, number> = {
    Critical: 0,
    Warning: 0,
    Suggestion: 0,
  };

  for (const issue of issues) {
    counts[issue.severity] += 1;
  }

  const totalIssues = issues.length;

  return {
    totalIssues,
    counts,
  };
}

