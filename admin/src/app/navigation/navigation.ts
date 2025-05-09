import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
  {
    id: 'applications',
    title: 'Applications',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    children: [
      {
        id: 'promo',
        title: 'Promo',
        type: 'item',
        icon: 'computer',
        url: '/admin/promo',
      },
      {
        id: 'contact',
        title: 'Contact',
        type: 'item',
        icon: 'contact_phone',
        url: '/admin/contact',
      },
      {
        id: 'privacy',
        title: 'Privacy',
        type: 'item',
        icon: 'verified_user',
        url: '/admin/privacy',
      },
      {
        id: 'policy',
        title: 'Policy',
        type: 'item',
        icon: 'gavel',
        url: '/admin/policy',
      },
      {
        id: 'about-us',
        title: 'About Us',
        type: 'item',
        icon: 'description',
        url: '/admin/about-us',
      },
      {
        id: 'faq-page',
        title: 'faq-page',
        type: 'item',
        icon: 'info',
        url: '/admin/faq-page',
      },
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
