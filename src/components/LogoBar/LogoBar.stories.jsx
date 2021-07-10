import React from 'react';

import LogoBar from './LogoBar';

export default {
  title: 'NewHomePage/LogoBar',
  component: LogoBar,
};

const links = [
  { href: 'https://linkedin.com', label: 'LinkedIn' },
  { href: 'https://github.com', label: 'Github' },
];

export const Default = () => <LogoBar />;

export const WithLinks = () => <LogoBar {...{ links }} />;
