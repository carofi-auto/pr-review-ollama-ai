import type { ReviewIssue, ReviewSeverity } from '../ollama/client';

export function normalizeSeverity(
  value: unknown
): ReviewSeverity | undefined {
  if (typeof value !== 'string') {
    return undefined;
  }

  const normalized = value.trim().toLowerCase();

  if (normalized === 'critical') {
    return 'Critical';
  }

  if (normalized === 'warning') {
    return 'Warning';
  }

  if (normalized === 'suggestion') {
    return 'Suggestion';
  }

  return undefined;
}

export function isReviewIssue(value: unknown): value is ReviewIssue {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Partial<ReviewIssue>;

  if (
    typeof candidate.filePath !== 'string' ||
    typeof candidate.line !== 'number' ||
    !Number.isFinite(candidate.line) ||
    candidate.line <= 0
  ) {
    return false;
  }

  if (typeof candidate.type !== 'string' || typeof candidate.message !== 'string') {
    return false;
  }

  if (!candidate.severity) {
    return false;
  }

  return normalizeSeverity(candidate.severity) !== undefined;
}

