import type { ReviewBatch } from './client';

export interface SeverityDefinition {
  name: string;
  description: string;
}

export interface ReviewPromptContext {
  severityLevels: SeverityDefinition[];
  languageHint?: string;
}

export function buildReviewPrompt(
  _batch: ReviewBatch,
  _context: ReviewPromptContext
): string {
  // Implementation will be added in a later phase.
  return '';
}

