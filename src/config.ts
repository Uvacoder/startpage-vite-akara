import {
  mdiGithub,
  mdiDevTo,
  mdiYoutube,
  mdiStackOverflow,
  mdiMicrosoftOutlook,
  mdiTwitter,
  mdiCodepen,
  mdiSemanticWeb,
  mdiTranslate,
  mdiPencilRuler,
  mdiGoogleHangouts,
  mdiNintendoSwitch,
} from '@mdi/js';

export type link = {
  name: string;
  link: string;
  icon: string;
};

export const list: list = {
  work: [
    {
      name: 'Github',
      link: 'github.com',
      icon: mdiGithub,
    },
    {
      name: 'Outlook',
      link: 'outlook.com',
      icon: mdiMicrosoftOutlook,
    },
    {
      name: 'Vercel',
      link: 'vercel.com',
      icon: mdiSemanticWeb,
    },
    {
      name: 'Figma',
      link: 'figma.com',
      icon: mdiPencilRuler,
    },
  ],
  learn: [
    {
      name: 'Juejin',
      link: 'juejin.cn',
      icon: mdiDevTo,
    },
    {
      name: 'StackOverflow',
      link: 'stackoverflow.com',
      icon: mdiStackOverflow,
    },
    {
      name: 'Codepen',
      link: 'codepen.io',
      icon: mdiCodepen,
    },
    {
      name: 'Deepl',
      link: 'deepl.com',
      icon: mdiTranslate,
    },
  ],
  entertainment: [
    {
      name: 'Youtube',
      link: 'youtube.com',
      icon: mdiYoutube,
    },
    {
      name: 'Twitter',
      link: 'twitter.com',
      icon: mdiTwitter,
    },
    {
      name: 'Telegram',
      link: 'web.telegram.org',
      icon: mdiGoogleHangouts,
    },
    {
      name: 'Nintendo',
      link: 'nintendo.com/store/games/',
      icon: mdiNintendoSwitch,
    },
  ],
};

type list = {
  [key: string]: link[];
};
