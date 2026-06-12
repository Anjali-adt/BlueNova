export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Web Development', path: '/services#web-development' },
      { label: 'Mobile App Development', path: '/services#mobile-app' },
      { label: 'Java Enterprise Solutions', path: '/services#java-enterprise' },
      { label: 'Cloud Solutions', path: '/services#cloud' },
      { label: 'AI Solutions', path: '/services#ai' },
      { label: 'SEO & Digital Marketing', path: '/services#seo' },
    ],
  },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Technologies', path: '/technologies' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
];

export const FOOTER_LINKS = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Technologies', path: '/technologies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
  services: [
    { label: 'Web Development', path: '/services#web-development' },
    { label: 'Mobile Apps', path: '/services#mobile-app' },
    { label: 'Cloud Solutions', path: '/services#cloud' },
    { label: 'AI Solutions', path: '/services#ai' },
    { label: 'Digital Marketing', path: '/services#seo' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms-conditions' },
  ],
};
