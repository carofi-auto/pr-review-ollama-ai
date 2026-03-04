import type { FileDiff } from './diff-loader';

export interface ReviewChunk {
  filePath: string;
  content: string;
  changedLineNumbers: number[];
}

export interface ChunkingConfig {
  maxPromptChars: number;
}

export function createBatches(
  _diffs: FileDiff[],
  _config: ChunkingConfig
): ReviewChunk[] {
  // Implementation will be added in a later phase.
  return [];
}

