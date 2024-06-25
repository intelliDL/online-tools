import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export const tool = defineTool({
  name: 'Minesweeper',
  path: '/minesweeper',
  description: '',
  keywords: ['minesweeper'],
  component: () => import('./minesweeper.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2024-06-25'),
});