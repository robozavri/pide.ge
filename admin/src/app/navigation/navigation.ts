import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    children: [
      {
        id: 'walkers',
        title: 'Walkers',
        type: 'item',
        icon: 'people_alt',
        url: '/admin/walkers',
      },
      {
        id: 'stories',
        title: 'Stories',
        type: 'item',
        icon: 'rate_review',
        url: '/admin/stories',
      },
      {
        id: 'faqs',
        title: 'Faqs',
        type: 'item',
        icon: 'info',
        url: '/admin/faqs',
      },
      {
        id: 'meta',
        title: 'Meta',
        type: 'item',
        icon: 'all_out',
        url: '/admin/meta',
      },
    ]
  }

];
