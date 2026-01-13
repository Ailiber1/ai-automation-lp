
export interface AIPackage {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  workflow: string;
  youtubeId: string;
  iconType: 'routine' | 'workflow' | 'data' | 'support' | 'manual' | 'report' | 'claude' | 'system' | 'video' | 'ads' | 'web' | 'custom';
}

export type ViewState = 'home' | 'detail' | 'form';
