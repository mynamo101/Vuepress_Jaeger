import{_ as b,c as k,a as m,b as a,d as e,w as i,r as l,o as u,e as s}from"./app-p7eHLsFi.js";const f={};function g(y,t){const c=l("VPCard"),d=l("VPCardGrid"),r=l("Mermaid"),p=l("FlowChart"),n=l("Card"),o=l("LinkCard"),h=l("CardGrid");return u(),k("div",null,[t[7]||(t[7]=m('<div class="hint-container note"><p class="hint-container-title">簡介</p><p>想像一下，你的遊戲世界裡，風吹樹葉沙沙作響、子彈呼嘯而過、角色情緒透過聲音表達，這些都是 FMOD 可以做到的！FMOD 就像一位音訊魔法師，讓聲音在你的遊戲中活起來。</p></div><h2 id="什麽是-聲音引擎" tabindex="-1"><a class="header-anchor" href="#什麽是-聲音引擎"><span>什麽是 <mark><strong>聲音引擎?</strong></mark></span></a></h2><p>在遊戲開發中，聲音引擎是一個專門用於處理遊戲中音訊的軟體系統。</p><p>它的主要功能包括：</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 播放各種音效和背景音樂。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 管理聲音的空間定位，模擬聲音的遠近、方向等。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 實現聲音的動態變化，例如根據遊戲事件調整音量、音調等。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 優化音訊播放，提高遊戲效能。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 知名的遊戲聲音引擎包括 FMOD 和 Wwise等。</label></li></ul><h2 id="為什麽要有聲音引擎" tabindex="-1"><a class="header-anchor" href="#為什麽要有聲音引擎"><span><strong>為什麽要有聲音引擎？</strong></span></a></h2><p>很多讀者覺得好奇，常見的遊戲引擎內已經整合了聲音播放的功能，也自帶了非常多的效果和插件，為什麽還需要另外安裝一個聲音引擎作為輔助呢？ 那我們先來看看具體可以用聲音引擎做什麽：</p>',7)),a(d,null,{default:i(()=>[a(c,{title:"單純使用內建引擎",icon:"twemoji:video-game"},{default:i(()=>t[0]||(t[0]=[e("ul",{class:"task-list-container"},[e("li",{class:"task-list-item"},[e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-5",checked:"checked",disabled:"disabled"}),e("label",{class:"task-list-item-label",for:"task-item-5"}," 播放聲音事件")]),e("li",{class:"task-list-item"},[e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-6",checked:"checked",disabled:"disabled"}),e("label",{class:"task-list-item-label",for:"task-item-6"}," 調控聲音音量")]),e("li",{class:"task-list-item"},[e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-7",checked:"checked",disabled:"disabled"}),e("label",{class:"task-list-item-label",for:"task-item-7"}," 自行撰寫邏輯代碼播放複雜事件")])],-1)])),_:1}),a(c,{title:"加入聲音引擎的協助",icon:"twemoji:wrench"},{default:i(()=>t[1]||(t[1]=[e("ul",{class:"task-list-container"},[e("li",{class:"task-list-item"},[e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-8",checked:"checked",disabled:"disabled"}),e("label",{class:"task-list-item-label",for:"task-item-8"}," 包含原本內建所有的播放功能")]),e("li",{class:"task-list-item"},[e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-9",checked:"checked",disabled:"disabled"}),e("label",{class:"task-list-item-label",for:"task-item-9"}," 可視化聲音管理界面")]),e("li",{class:"task-list-item"},[e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-10",checked:"checked",disabled:"disabled"}),e("label",{class:"task-list-item-label",for:"task-item-10"}," 優良的聲學設計系統")]),e("li",{class:"task-list-item"},[e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-11",checked:"checked",disabled:"disabled"}),e("label",{class:"task-list-item-label",for:"task-item-11"}," 無需透過代碼即可設計有邏輯的事件")]),e("li",{class:"task-list-item"},[e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-12",checked:"checked",disabled:"disabled"}),e("label",{class:"task-list-item-label",for:"task-item-12"}," 透過API調用底層代碼實現特定邏輯")]),e("li",{class:"task-list-item"},[e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-13",checked:"checked",disabled:"disabled"}),e("label",{class:"task-list-item-label",for:"task-item-13"}," 完整的聲音播放性能監視")])],-1)])),_:1})]),_:1}),t[8]||(t[8]=m('<p>簡單來說，聲音引擎（FMOD、Wwise、Criware）等都是為了減輕聲音工作者的負擔而生的一種工具，透過簡單的容器來代替複雜的底層代碼，實現輕鬆的聲音交互功能。</p><h2 id="不使用會怎麽樣嗎" tabindex="-1"><a class="header-anchor" href="#不使用會怎麽樣嗎"><span><strong>不使用會怎麽樣嗎？</strong></span></a></h2><p>好問題，引擎的使用與否對整體的流程有什麽影響嗎？</p><p>當然有。</p><p>影響多大取決於你對待專案開發的用心程度，如果只是要速速開發一款實驗性的產品，使用與否就無關緊要了。 如果您是要準備製作一款需要長期維護，並能打造一個跨部門溝通協調的角色，相信我你不會想要錯過使用這些工具。</p><p>我們可以從下面的狀況來瞭解，在這些工具介入之前常常會遇到的問題：</p><h3 id="_1-時程" tabindex="-1"><a class="header-anchor" href="#_1-時程"><span><strong>1 - 時程</strong></span></a></h3><blockquote><p>聲音的製作往往是所有專案開發裏面的靠後的一個環節，如果在專案開發時程不長的情況下，非常容易被壓縮。</p></blockquote><p>如果說整個專案製作過程像是一道料理的話，那聲音的部分，就像是替已經料理好的菜色加上一點調味和風格。 但你是在戈登拉姆齊的餐廳的話，有可能會來不及調味就被迫上桌囉。（哭</p>',9)),a(r,{id:"mermaid-131",code:"eJyNUstOwkAU3fcrunLRpCt3LlwYN26NfgAqFhKCBjFuKZUIpRCDKQZDBHwWfPDUYAL6M8yjf2E708K0aQldNHPPPffMmXuvKIpcOp5ORDd4s1pEtQn8kpFR5Gz8OHFycRiLpNL83hbH8dZn1jOwn7VZypAXxU1eEEBRR/obKvxAPS8IYSxTVmF+gI0PbLgs0Cvhdp9CDgvLA7MxdPLkd3Z+IKUipzErOZvIQFXc4nEWNEe48wcbz6TYcyehRJNHfgn0W8atG1ei3LCMr+HXCi44zgi+vo0fp7NpnQS7cUmKJyVa0BzBWpdh7u8wQcB1AY/GikY1wOcd7dVtHZRajA5Qr6CSYwGmT2E3BQyBQsxTaJYBAnQ8A7BO8wLSY5qF+ghcUyd2ZGSXMRzzSxiuC78VqGYWs0KVHnhQ4P231QY6btJa1goDEAbQcqiQh+N33H6hVhiAatSeTK1LyZcdoFU9fpzJh2+5f74O07Nj/sKgPQ/heN6/kA1WcMOVaudZ7h834cl8"}),t[9]||(t[9]=m('<p>假設我們用3個月來開發一款專案，而聲音設計可以開始動工的時間往往已是最後一個月了。 除了部分素材和語音可以提前先準備，大部分的元素還是得等前面美術視覺設定完成後才能開始動工。</p><div class="hint-container tip"><p class="hint-container-title"><em><strong>使用聲音引擎帶來的改變</strong></em></p><p>在時程非常緊湊且不足的情況下，技術人員勢必得<mark class="caution">優先完成美術整合工作</mark>，進而導致 <strong>聲音設計師</strong> 製作完的素材很有可能無法接入遊戲內，無法達到心目中想要的表現效果。</p><p>加入工具的協助後，聲音設計師可以快速的在專案中得到自己要的表現效果，有效改善時程被延宕等問題。</p></div><h3 id="_2-模糊的需求" tabindex="-1"><a class="header-anchor" href="#_2-模糊的需求"><span><strong>2 - 模糊的需求</strong></span></a></h3><p>作為一個優秀的聲音製作人員，清楚<mark>企劃要什麽</mark>是極為重要的。 通常在企劃前期階段，聲音製作人就需要和遊戲設計人員盡早開始溝通，瞭解開發的專案整體的美術風格、劇情走向和競品參考，會對接下來的製作訂下更明確的方向。</p>',4)),a(d,null,{default:i(()=>[a(c,{title:"與企劃溝通要點",icon:"twemoji:artist-light-skin-tone"},{default:i(()=>t[2]||(t[2]=[e("p",null,"在專案的初期，無論是背景故事、作品受眾和開發動機都是必要的訊息，因此除了要瞭解以上幾個項目，可以明確和企劃或遊戲設計部門提出以下問題：",-1),e("ul",null,[e("li",null,[e("strong",null,"What"),s(" 這個作品需要什麽內容？")]),e("li",null,[e("strong",null,"Who"),s(" 這個作品需要給誰觀看？")]),e("li",null,[e("strong",null,"When"),s(" 作品的開發週期有多長？")]),e("li",null,[e("strong",null,"where"),s(" 作品可能會放在什麽平臺？")]),e("li",null,[e("strong",null,"Why"),s(" 這個作品的開發動機是什麽？")])],-1)])),_:1}),a(c,{title:"與技術溝通要點",icon:"twemoji:technologist"},{default:i(()=>t[3]||(t[3]=[e("p",null,"在專案執行的後期，聲音需要和技術做大量的對接與整合的工作，所以知道如何讓技術知道“如何”播放我們設計出來的聲音，便是首要的任務。",-1),e("ul",null,[e("li",null,[e("strong",null,"How"),s(" 如何播放這些聲音？")]),e("li",null,[e("strong",null,"When"),s(" 這些聲音需要何時被播放？")]),e("li",null,[e("strong",null,"Where"),s(" 這些聲音需要播放在哪裏？")])],-1)])),_:1})]),_:1}),t[10]||(t[10]=m('<div class="hint-container tip"><p class="hint-container-title">兩者的區別？</p><p><strong>和遊戲設計、企劃溝通最重要的事找到 <mark>為什麽</mark></strong>。</p><p><strong>和程式、技術溝通最重要的部分是知道 <mark>如何做</mark></strong>。</p></div><div class="hint-container warning"><p class="hint-container-title">為何常常做出來跟預期總是不太符合？</p><p>很大的原因會在於 <strong>企劃方面</strong> 是否給出了明確的風格參考和專案開發方向。 若是無法在需求的說明上給出完整的規劃，很容易在後期得到不服預期的結果。</p></div><h3 id="_3-浪費太多時間在瑣事上" tabindex="-1"><a class="header-anchor" href="#_3-浪費太多時間在瑣事上"><span><strong>3 - 浪費太多時間在瑣事上</strong></span></a></h3><p>有時候我們想要設計一些比較複雜的事件， 例如我們收到企劃方面要求如下:</p><div class="hint-container note"><p class="hint-container-title">設計需求</p><p>玩家在血量較低的時候，會出現心跳加快的聲音，並且伴隨喘氣聲， 同時背景音樂由舒緩轉變成緊張的氛圍。</p></div><p>以上的事件單純透過內建的引擎，不僅實現上需要技術的協助，還要等到功能完成才有辦法進行測試。 等到測試完成，通常會耗費大量的時間在等待上。</p>',6)),a(p,{id:"flowchart-232",code:"eJxtkM1OwkAUhfd9Cpa4YCGwIum8i8KoTcgMoVMTd/6EUAGBCCYuNFgbSBFrGzSmkba+TGc6vIWTDkYxbuZkcr97z71HJyrQUMMg2CDireT42XI9eU3fHtj9kNtREt0pdXyoVVVQxaimEQ2jSo7denQ4S6LPdOzIBhresFFfgccQiYm4AZt7EuWOyx1TQslHN1m9K4YOm7sq0I39pnDVEBRU+4lbPeq3pTEbx7Q1pb7JLDPDi9s4u/apt1ifD3joJSs7fQwzqrRNpe4ljVusc8qtEe1M+EVEX3rMHGZs+b8FWPDM5zOFYAKrR3+ARXcz6WpMO/MkWLL+dHMQVAFEte/smGvTIOCWkw5iRScFkOWXP4H6TgFkARWAdBDfXwDCop5lI6UopSSlnK/DAyKIn1blC/Yi38o=",preset:"vue"}),t[11]||(t[11]=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"自行撰寫代碼?"),e("p",null,"確實!"),e("p",null,"但作為聲音設計的一員，有許多聲音表現的功能往往需要複雜的代碼來協助實現，如果有一種工具可以減輕寫代碼的負擔和時間，何樂而不為呢?")],-1)),t[12]||(t[12]=e("h2",{id:"聲音引擎能幫到誰",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#聲音引擎能幫到誰"},[e("span",null,[e("strong",null,"聲音引擎能幫到誰?")])])],-1)),t[13]||(t[13]=e("p",null,"說了這麽多，誰會用到這個東西？我們可以用不同的角色來看這件事情：",-1)),a(n,{title:"✍企劃"},{default:i(()=>t[4]||(t[4]=[s(" 遊戲開發中需要大量的關卡編寫和劇情設計，企劃可以透過這些模塊化的聲音事件、自由的編輯關卡中需要素材，得到最及時正確的表現效果。 ")])),_:1}),a(n,{title:"🔉聲音設計師"},{default:i(()=>t[5]||(t[5]=[s(" 透過聲音引擎的協助，聲音設計師可以大幅減少和技術溝通的成本，運用將遊戲或專案中的表現和創意再提升一個層次。 ")])),_:1}),a(n,{title:"👨‍💻技術與程式"},{default:i(()=>t[6]||(t[6]=[s(" 聲音引擎大幅度簡化了播放聲音的邏輯概念，技術不再需為複雜的播放邏輯重寫代碼，能更專注再優化和執行專案內容上。 ")])),_:1}),t[14]||(t[14]=e("p",null,"簡而言之，和聲音設計接觸到的部門都能從中受益，無論其本身是否直接和製作相關。聲音引擎精簡繁複的工作流，對聲音設計的人員來說更是如魚得水。",-1)),t[15]||(t[15]=e("h2",{id:"準備開始",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#準備開始"},[e("span",null,[e("strong",null,"準備開始")])])],-1)),t[16]||(t[16]=e("p",null,"相信在閲讀以上內容後，應該都準備好開始我們的聲音之旅了！ 你可以從下方鏈接跳轉到相關的課程：",-1)),a(h,null,{default:i(()=>[a(o,{title:"FMOD",href:"/"}),a(o,{title:"Wwise",href:"/"}),a(o,{title:"CriWare",href:"/"}),a(o,{title:"Godot",href:"/"})]),_:1})])}const C=b(f,[["render",g],["__file","index.html.vue"]]),V=JSON.parse('{"path":"/article/1zha8bjg/","title":"開始前你需要瞭解的","lang":"zh-TW","frontmatter":{"title":"開始前你需要瞭解的","icon":"material-symbols:deployed-code-outline","createTime":"2024/03/20 12:38:48","copyright":"CC-BY-4.0","tags":["指南","入門"],"permalink":"/article/1zha8bjg/","description":"簡介 想像一下，你的遊戲世界裡，風吹樹葉沙沙作響、子彈呼嘯而過、角色情緒透過聲音表達，這些都是 FMOD 可以做到的！FMOD 就像一位音訊魔法師，讓聲音在你的遊戲中活起來。 什麽是 聲音引擎? 在遊戲開發中，聲音引擎是一個專門用於處理遊戲中音訊的軟體系統。 它的主要功能包括： 播放各種音效和背景音樂。 管理聲音的空間定位，模擬聲音的遠近、方向等。 實...","head":[["meta",{"property":"og:url","content":"https://class.soundjaeger.com/article/1zha8bjg/"}],["meta",{"property":"og:site_name","content":"Sound Jaeger 官方文檔"}],["meta",{"property":"og:title","content":"開始前你需要瞭解的"}],["meta",{"property":"og:description","content":"簡介 想像一下，你的遊戲世界裡，風吹樹葉沙沙作響、子彈呼嘯而過、角色情緒透過聲音表達，這些都是 FMOD 可以做到的！FMOD 就像一位音訊魔法師，讓聲音在你的遊戲中活起來。 什麽是 聲音引擎? 在遊戲開發中，聲音引擎是一個專門用於處理遊戲中音訊的軟體系統。 它的主要功能包括： 播放各種音效和背景音樂。 管理聲音的空間定位，模擬聲音的遠近、方向等。 實..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2025-03-29T00:23:30.000Z"}],["meta",{"property":"article:tag","content":"指南"}],["meta",{"property":"article:tag","content":"入門"}],["meta",{"property":"article:modified_time","content":"2025-03-29T00:23:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"開始前你需要瞭解的\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-29T00:23:30.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":7.81,"words":2344},"git":{"updatedTime":1743207810000,"contributors":[{"name":"mynamo101","username":"mynamo101","email":"mynamo101@gmail.com","commits":9,"avatar":"https://avatars.githubusercontent.com/mynamo101?v=4","url":"https://github.com/mynamo101"}],"changelog":[{"hash":"45b54041f45f7f1ef1ae93a13ab63073ee95c1c4","date":1741738491000,"email":"mynamo101@gmail.com","author":"mynamo101","message":"使用線上版本","commitUrl":"https://github.com/mynamo101/Vuepress_Jaeger/commit/45b54041f45f7f1ef1ae93a13ab63073ee95c1c4"},{"hash":"6ece9623c64b663cb0e327519731f23550da8dba","date":1741747250000,"email":"mynamo101@gmail.com","author":"mynamo101","message":"Readme","commitUrl":"https://github.com/mynamo101/Vuepress_Jaeger/commit/6ece9623c64b663cb0e327519731f23550da8dba"},{"hash":"293d16b5c6a1b617350386c1d7a747308df50327","date":1741788173000,"email":"mynamo101@gmail.com","author":"mynamo101","message":"Navbar","commitUrl":"https://github.com/mynamo101/Vuepress_Jaeger/commit/293d16b5c6a1b617350386c1d7a747308df50327"},{"hash":"a7d4c22f095f8ec0aa31c4408a1dfc986c970ebb","date":1741834648000,"email":"mynamo101@gmail.com","author":"mynamo101","message":"本地Build","commitUrl":"https://github.com/mynamo101/Vuepress_Jaeger/commit/a7d4c22f095f8ec0aa31c4408a1dfc986c970ebb"},{"hash":"e3a6595e9be29050fcd0cb2c5f4d3ef842e62629","date":1741838257000,"email":"mynamo101@gmail.com","author":"mynamo101","message":"測試","commitUrl":"https://github.com/mynamo101/Vuepress_Jaeger/commit/e3a6595e9be29050fcd0cb2c5f4d3ef842e62629"},{"hash":"355c8883e045c3727b808ac9a4154ffe05eef342","date":1741953983000,"email":"mynamo101@gmail.com","author":"mynamo101","message":"初版正常","commitUrl":"https://github.com/mynamo101/Vuepress_Jaeger/commit/355c8883e045c3727b808ac9a4154ffe05eef342"},{"hash":"bd1c1500e71eff9acd3afafbaf75e882b70713e6","date":1742003917000,"email":"mynamo101@gmail.com","author":"mynamo101","message":"第二版本","commitUrl":"https://github.com/mynamo101/Vuepress_Jaeger/commit/bd1c1500e71eff9acd3afafbaf75e882b70713e6"},{"hash":"79ed181e04eee0de935f51edce8079424641f08f","date":1742963899000,"email":"mynamo101@gmail.com","author":"mynamo101","message":"更新文檔","commitUrl":"https://github.com/mynamo101/Vuepress_Jaeger/commit/79ed181e04eee0de935f51edce8079424641f08f"},{"hash":"90ca6c38620f57bdf3cfec18f61fb85499e9adda","date":1743207810000,"email":"mynamo101@gmail.com","author":"mynamo101","message":"更新內文","commitUrl":"https://github.com/mynamo101/Vuepress_Jaeger/commit/90ca6c38620f57bdf3cfec18f61fb85499e9adda"}]},"autoDesc":true,"filePathRelative":"notes/Readme.md","categoryList":[{"id":"4358b5","sort":10000,"name":"notes"}]}');export{C as comp,V as data};
