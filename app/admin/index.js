import Dashboard from './pages/home';
import About from './pages/about';

export default {
  pages: () => [
    {
      label: 'Home',
      path: '_',
      component: Dashboard,
    },
    {
      label: 'About this project',
      path: '_/about',
      component: About,
    },
    {
      label: 'Domains',
      children: ['Domain', 'WhoisServer'],
    },
    {
      label: 'Reporting',
      children: ['History'],
    },
    {
      label: 'People',
      children: ['User'],
    },
    {
      label: 'Settings',
      children: ['Config'],
    },
  ],
};
