import CodeDemo from "/var/www/vhosts/soundjaeger.com/class.soundjaeger.com/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/var/www/vhosts/soundjaeger.com/class.soundjaeger.com/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
