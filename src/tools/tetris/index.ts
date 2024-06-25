import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Tetris',
  path: '/tetris',
  description: '',
  keywords: ['tetris'],
  component: () => import('./tetris.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2024-06-25'),
});