import { CodeTabs } from "/var/www/vhosts/soundjaeger.com/class.soundjaeger.com/my-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/var/www/vhosts/soundjaeger.com/class.soundjaeger.com/my-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/var/www/vhosts/soundjaeger.com/class.soundjaeger.com/my-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
