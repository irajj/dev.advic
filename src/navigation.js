import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [    
    {
      text: 'Company',
      links: [
        {
          text: 'About Us',
          href: getPermalink('/homes/aboutus'),
        },
        {
          text: 'Life At Advic',
          href: getPermalink('/homes/lifeatadvic'),
        },
        {
          text: 'Careers',
          href: getPermalink('/homes/career'),
        },
      ],
    },
    {
      text: 'Our Work',
      links: [
        {
          text: 'Success Stories',
          href: getPermalink('/homes/succuss-story'),
        },
        {
          text: 'Case Studies',
          href: getPermalink('/homes/case-study'),
        },
      ],
    },
    {
      text: 'Technology',
      links: [
        {
          text: 'MICROSOFT DYNAMICS',
          href: getPermalink('/homes/platformservice'),
        },
        {
          text: 'SALESFORCE',
          href: getPermalink('/homes/sales-force-service'),
        },
        {
          text: 'AI',
          href: getPermalink('/homes/ai'),
        },
      ],
    },
    {
      text: 'Capabilities',
      links: [
        {
          text: 'Talent Services',
          href: getPermalink('/homes/talent-service'),
        },
        {
          text: 'IT SUPPORT & IT STRATEGY CONSULTANCY',
          href: getPermalink('/homes/it-support'),
        },
        {
          text: 'CRM DEVELOPING AND TESTING',
          href: getPermalink('/homes/crm-dev-test'),
        },
      ],
    },
  ],
  actions: [{ text: `Let's Connect`, href: getPermalink('/contactus') }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
