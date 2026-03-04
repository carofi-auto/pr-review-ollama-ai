export type ReviewSeverity = 'Critical' | 'Warning' | 'Suggestion';

export interface OllamaClientOptions {
  baseUrl: string;
  model: string;
  requestTimeoutMs?: number;
}

export interface OllamaGenerateOptions {
  temperature?: number;
  topK?: number;
  topP?: number;
}

export interface OllamaGenerateResult {
  response: string;
  evalCount?: number;
  evalDurationMs?: number;
  totalDurationMs?: number;
}

export interface ReviewIssue {
  filePath: string;
  line: number;
  severity: ReviewSeverity;
  type: string;
  message: string;
}

export interface ReviewBatch {
  filePath: string;
  diffHunks: string;
  changedLineNumbers: number[];
}

export interface OllamaClient {
  checkHealth(): Promise<boolean>;
  generate(
    prompt: string,
    options?: OllamaGenerateOptions
  ): Promise<OllamaGenerateResult>;
  reviewCode(batch: ReviewBatch): Promise<ReviewIssue[]>;
}

