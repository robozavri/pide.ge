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
        icon: 'all_out',
        url: '/admin/walkers',
      },
      {
        id: 'stories',
        title: 'Stories',
        type: 'item',
        icon: 'all_out',
        url: '/admin/stories',
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
