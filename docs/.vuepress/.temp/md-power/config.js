import { defineClientConfig } from 'vuepress/client'
import Tabs from '/var/www/vhosts/soundjaeger.com/class.soundjaeger.com/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/var/www/vhosts/soundjaeger.com/class.soundjaeger.com/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/var/www/vhosts/soundjaeger.com/class.soundjaeger.com/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeItem from '/var/www/vhosts/soundjaeger.com/class.soundjaeger.com/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeItem.vue'

import '/var/www/vhosts/soundjaeger.com/class.soundjaeger.com/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeItem', FileTreeItem)
  }
})
