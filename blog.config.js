/**
 * @type {import('~/types').BlogConfig}
 */
const BLOG = {
  title: 'Title',
  author: 'Author',
  email: 'email@example.com',
  description: 'Description',
  lang: 'en-US',
  link: 'https://example.com',

  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // If leave this empty, current year will be used.
  postsPerPage: 10,
  sortByDate: false,
  showAbout: true,
  showArchive: true,

  seo: {
    keywords: ['Website', 'Portfolio'],
  },

  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS!
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public

  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};

// export default BLOG
module.exports = BLOG;
