import { Item } from './item.model';

export interface Comment extends Item {
  text: string;
  parent: number;
  deleted?: boolean;
  type: 'comment';
}
