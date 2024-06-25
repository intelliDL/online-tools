import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Minesweeper',
  path: '/minesweeper',
  description: '',
  keywords: ['minesweeper'],
  component: () => import('./minesweeper.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2024-06-25'),
});