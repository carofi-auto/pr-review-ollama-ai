import { promises as fs } from 'node:fs';

export async function readFileSafely(path: string): Promise<string | null> {
  try {
    return await fs.readFile(path, 'utf8');
  } catch {
    return null;
  }
}

