export type SupportedModelId =
  | 'codellama'
  | 'deepseek-coder'
  | 'phi'
  | 'mistral'
  | (string & {});

export interface ModelConfig {
  id: SupportedModelId;
  maxPromptChars: number;
  temperature: number;
  topK?: number;
  topP?: number;
}

const DEFAULT_MODELS: Record<string, ModelConfig> = {
  codellama: {
    id: 'codellama',
    maxPromptChars: 16000,
    temperature: 0.1,
    topK: 10,
    topP: 0.9,
  },
  'deepseek-coder': {
    id: 'deepseek-coder',
    maxPromptChars: 12000,
    temperature: 0.1,
  },
  phi: {
    id: 'phi',
    maxPromptChars: 8000,
    temperature: 0.2,
  },
  mistral: {
    id: 'mistral',
    maxPromptChars: 12000,
    temperature: 0.2,
  },
};

export function getModelConfig(modelName: string): ModelConfig {
  const key = modelName.toLowerCase();
  const preset = DEFAULT_MODELS[key];

  if (preset) {
    return preset;
  }

  return {
    id: modelName as SupportedModelId,
    maxPromptChars: 16000,
    temperature: 0.1,
  };
}

