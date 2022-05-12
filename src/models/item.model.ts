export interface Item {
  by: string;
  descendants: number;
  id: number;
  kids?: number[];
  score: number;
  time: number;
  title: string;
  type: 'story' | 'job' | 'comment';
  url: string;
  parent?: number;
  text?: string;
}
