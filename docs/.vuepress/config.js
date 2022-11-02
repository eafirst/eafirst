module.exports = {
    title: 'Lee个人技术博客',
    description: '办法总比问题多',
    base: '/eafirst/', // 这个路径名称就是你刚才所配置的项目名！！！，斜杠不能漏！！！⚠️
    theme: "reco",
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: 'Lee的博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/eafirst/eafirst' },
                    { text: 'CSDN', link: 'https://blog.csdn.net/zn740395858?spm=1010.2135.3001.5343' },
                    { text: '掘金', link: 'https://juejin.cn/user/2524134425764375' }
                ]
            }
        ],
        sidebar:[
        
            {   
                sidebarDepth: 2,
                title: "学习杂项",
                path: "/togaf/",
                collapsable: false, // 不折叠
                children: [
                    { title: "Markdown使用", path: "/togaf/test.md" },
                    { title: "Markdown使用_例子", path: "/togaf/markdown_study.md"},
                ],
            },
            {
                title:"togaf",
                path:"/togaf/",
                collapsable:false,
                sidebarDepth:2,
                children:[
                    '/togaf/7问TOGAF.md',
                    '/togaf/test.md'

                       ]
            }
     
        ]
    },
    plugins: ["vuepress-plugin-mermaidjs"]
}
