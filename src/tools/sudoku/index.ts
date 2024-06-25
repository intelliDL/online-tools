import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Sudoku',
  path: '/sudoku',
  description: '',
  keywords: ['sudoku'],
  component: () => import('./sudoku.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2024-06-25'),
});