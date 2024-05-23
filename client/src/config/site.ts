import { NavItem } from '@/types';

export const siteConfig = {
  name: 'Funds Me',
  url: '',
  ogImage: '',
  description: '',
  mainNav: [
    {
      title: 'Home',
      href: '/home'
    },
    {
      title: 'Committee-List',
      href: '/'
    },
    {
      title: 'Features',
      href: '/'
    },
    {
      title: 'About us',
      href: '/'
    }
  ],
  sideNav: [
    {
      title: 'Home',
      href: '/home',
      icon: 'GameController'
    },
    {
      title: 'Committees',
      href: '/committees',
      icon: 'PuzzlePiece'
    },
    {
      title: 'Transactions',
      href: '/sme/info/123',
      icon: 'Medal'
    },
    {
      title: 'Profile',
      href: '/sme/profile/123',
      icon: 'Alien'
    },
  ] satisfies NavItem[],
  links: {
    twitter: '',
    discord: '',
    telegram: ''
  },
  nfts: [
    {
      image: '/images/nft-list.png',
      nftId: 12,
      owner: 'Alice',
      type: 'Blue',
      time: '2024-05-03 11:43:42'
    },
    {
      image: '/images/nft-list.png',
      nftId: 1,
      owner: 'Bob',
      type: 'Green',
      time: '2024-05-03 11:43:43'
    },
    {
      image: '/images/nft-list.png',
      nftId: 2,
      owner: 'Carol',
      type: 'Blue',
      time: '2024-05-03 11:43:44'
    },
    {
      image: '/images/nft-list.png',
      nftId: 3,
      owner: 'Dave',
      type: 'Green',
      time: '2024-05-03 11:43:45'
    },
    {
      image: '/images/nft-list.png',
      nftId: 4,
      owner: 'Eve',
      type: 'Blue',
      time: '2024-05-03 11:43:46'
    },
    {
      image: '/images/nft-list.png',
      nftId: 5,
      owner: 'Frank',
      type: 'Green',
      time: '2024-05-03 11:43:47'
    },
    {
      image: '/images/nft-list.png',
      nftId: 6,
      owner: 'Grace',
      type: 'Blue',
      time: '2024-05-03 11:43:48'
    },
    {
      image: '/images/nft-list.png',
      nftId: 13,
      owner: 'Harry',
      type: 'Green',
      time: '2024-05-03 11:43:49'
    }
  ]
};

export type SiteConfig = typeof siteConfig;
