

Page({
    data:{
        a: 10,
        b: 30,
        flag: true,
        length: 22,
        score: 89,
        header: "基本语法",
        footer: "版权为个人所有@http://github.com/fuyz",

        people:[
            {name:'张三',age:12},
            {name:'李四',age:14},
            {name:'王五',age:25},
            {name:'老六',age:32},
            {name:'小七',age:22}
        ],
        listObj: {
            name: "付颖志",
            age: 23,
            job: "工程师"
        },

        news: [
            {
                source:"国内新闻",
                list:[
                    {title:"新闻一",time:'2016-12-16'},
                    {title:"新闻二",time:'2016-12-15'},
                    {title:"新闻三",time:'2016-12-14'}
                ]
            },
            {
                source:"国外新闻",
                list:[
                    {title:"new1",time:'2017-1-16'},
                    {title:"new2",time:'2017-1-15'},
                    {title:"new3",time:'2017-1-14'}
                ]
            }
        ]

    }
    
})