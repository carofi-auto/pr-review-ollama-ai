export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export type LogFields = Record<string, unknown>;

export interface Logger {
  debug(message: string, fields?: LogFields): void;
  info(message: string, fields?: LogFields): void;
  warn(message: string, fields?: LogFields): void;
  error(message: string, fields?: LogFields): void;
}

function formatFields(fields?: LogFields): string {
  if (!fields) {
    return '';
  }

  const parts: string[] = [];

  for (const [key, value] of Object.entries(fields)) {
    const serialized =
      typeof value === 'string' ? value : JSON.stringify(value ?? null);
    parts.push(`${key}=${serialized}`);
  }

  return parts.length > 0 ? ` ${parts.join(' ')}` : '';
}

export function createLogger(
  namespace: string,
  debugEnabled = false
): Logger {
  const log = (level: LogLevel, message: string, fields?: LogFields): void => {
    if (!debugEnabled && level === 'debug') {
      return;
    }

    const timestamp = new Date().toISOString();
    const prefix = `${level.toUpperCase()} [${namespace}]`;
    const suffix = formatFields(fields);

    // eslint-disable-next-line no-console
    console.log(`${timestamp} ${prefix} ${message}${suffix}`);
  };

  return {
    debug: (message, fields) => log('debug', message, fields),
    info: (message, fields) => log('info', message, fields),
    warn: (message, fields) => log('warn', message, fields),
    error: (message, fields) => log('error', message, fields),
  };
}

