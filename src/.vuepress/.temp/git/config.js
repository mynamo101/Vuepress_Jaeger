import { Contributors } from "/var/www/vhosts/soundjaeger.com/class.soundjaeger.com/my-docs/node_modules/@vuepress/plugin-git/lib/client/components/Contributors.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", Contributors);
  },
};
