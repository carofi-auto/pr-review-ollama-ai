export interface FileDiff {
  path: string;
  hunks: string;
  addedLineNumbers: number[];
  approxByteSize: number;
}

export interface DiffLoaderOptions {
  baseBranch: string;
  headSha: string;
  filePattern: string;
}

export interface DiffLoader {
  loadDiffs(options: DiffLoaderOptions): Promise<FileDiff[]>;
}

