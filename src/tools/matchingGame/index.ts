import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'MatchingGame',
  path: '/matchingGame',
  description: '',
  keywords: ['matchingGame'],
  component: () => import('./matchingGame.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2024-06-25'),
});