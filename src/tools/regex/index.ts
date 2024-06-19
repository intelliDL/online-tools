import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.random-port-generator.title'),
  path: '/regex',
  description: translate('tools.random-port-generator.description'),
  keywords: ['regex'],
  component: () => import('./regex.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2024-06-19'),
});