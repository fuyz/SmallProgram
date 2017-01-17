# SmallProgram
微信小程序是什么 ？
    小程序是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或者搜一下即可打开应用。也体现了“用完即走”的理念，用户不用关心是否安装太多应用的问题。应用将无处不在，随时可用，但又无需安装卸载
                                                                                                       --- 张小龙
触手可得，不用安装 

微信小程序开发工具： https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html?t=2017112
  
AppID:  https://mp.weixin.qq.com/wxopen/devprofile?action=get_profile&token=688810615



一、配置项列表 ：

    属性         类型     必填    描述
    pages       Array     是    设置页面路径， 每个新建的页面都得在里面配置
    window      Object    否    window 设置默认页面的窗口表现，用于设置小程序的状态栏、导航条、标题、窗口背景色。
    tabBar      Object    否    设置底部 tab 菜单
    networkTimeout  Object  否  设置网络超时时间
    debug       Boolean   否  设置是否开启 debug 模式
   
   
    微信小程 pages  页面启动顺序配置：
    
    app.json 配置文件 想把那个页面放在启动页面只需要把这个页面放在第一位
        {
            "pages":[
                "pages/news/news",
                "pages/index/index",
                "pages/logs/logs"
            ]
        } 
        
        
    utils  中自定义模块 module.exports：
    
    微信小程序中 中， utils  下面 个 一个 JavaScript  文件中定义的变量、函数，都只在这个文件内部有效。当需要从此 JS 文件外部引用这些变量、函数时，必须使用 exports 对象进行暴露。使用者要用 require()命令引用这个 JS 文件。
        module.exports = {
            formatTime: formatTime
        }
        var Api = require('../../utils/api.js')    
        
        
        
   ..........................
   
    更多详细配置请参照：https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html?t=2017112


二、逻辑层：https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/?t=2017112

微信小程序 pages  逻辑层 .js 

pages:   js 逻辑层 配置

    逻辑层使用 Page() 函数用来注册一个页面。接受一个 object 参数，其指定
    页面的初始数据、生命周期函数、事件处理函数等。
    
注意：Page()首字母大写。

Page()里面的 object 参数说明：

        属性  类型  描述
        data  Object  页面的初始数据
        onLoad  Function  生命周期函数--监听页面加载
        onReady  Function  生命周期函数--监听页面初次渲染完成
        onShow  Function  生命周期函数--监听页面显示
        onHide  Function  生命周期函数--监听页面隐藏
        onUnload  Function  生命周期函数--监听页面卸载，当 redirectTo 或navigateBack 的时候调用
        onPullDownRefreash  Function  页面相关事件处理函数--监听用户下拉动作，  后期详细讲
        其他 任意方法   Function/ object  开发者可以添加任意的函数或数据到 object参数中，用 this 可以访问可以点击触发。
    
    
1.data  初始化数据 属性：

    初始化数据将作为页面的第一次渲染。data 将会以 JSON 的形式由逻辑层传至渲染层，所以其数据必须是可以转成 JSON 的格式：字符串，数字，布尔值，对象，数组。
    
说明 ：data 属性里面传入对象用于绑定数据，在视图层显示。有点类似 angualrjs 里面的$scope ，但是有些区别。 如下：

    Page({
        data: {
            text: 'init data',
            array: [{msg: '1'}, {msg: '2'}]
        }
    })
    
视图层绑定显示数据： view 放在.wxml 中 把他当做 div 就可以了。

    <view>{{text}}</view>
    <view>{{array[0].msg}}</view>
    
1.  Page  中添加事件处理函数  （ 也就是自定义方法 ）
    除了初始化数据和生命周期函数，Page 中还可以定义一些特殊的函数：事件处理函数。在渲染层可以在组件中加入事件绑定，当达到触发事件时，就会执行 Page 中定义的事件处理函数 。示例代码：
    <view bindtap="viewTap"> click me </view>
    Page({
        viewTap: function() {
            console.log('view tap')
        }
    })
2. 微信小程序通过setData() 将数据从逻辑层发送到视图层 ， 同时改变对应的this.data  的值
    Page.prototype.setData()
    setData 函数用于将数据从逻辑层发送到视图层，同时改变对应的 this.data 的值。
    
注意：

    1.直接修改 this.data 无效，无法改变页面的状态，还会造成数据不一致。
    2.单次设置的数据不能超过 1024kB，请尽量避免一次设置过多的数据。
    viewTap: function() {
        this.setData({
            text: 'Set some data for updating view.'
        })
    }
    
    

三、视图层：https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/?t=2017112

1.数据绑定：
 
  数据绑定使用 Mustache 语法（双大括号）将变量包起来，可以作用于：
  
    <view> {{ message }} </view>
    Page({
        data: {
             message: 'Hello MINA!'
        }
    })
    
 组件属性( 需要在双引号之内)
 
    <view id="item-{{id}}"> </view>
    Page({
        data: {
            id: 0
        }
    })
    
 控制属性( 需要在双引号之内)
 
    <view wx:if="{{condition}}"> </view>
    Page({
        data: {
            condition: true
        }
    })
    
    

2.条件渲染 wx:if wx:elif wx:else：

 wx:if
在框架中，我们用 wx:if="{{condition}}" 来判断是否需要渲染该代码块：

    <view wx:if="{{condition}}"> True </view>
    
也可以用 wx:elif 和 wx:else 来添加一个 else 块：

    <view wx:if="{{length > 5}}"> 1 </view>
    <view wx:elif="{{length > 2}}"> 2 </view>
    <view wx:else> 3 </view>
    
 block wx:if
因为 wx:if 是一个控制属性，需要将它添加到一个标签上。但是如果我们想一次性判断多个组件标签，
我们可以使用一个 <block/> 标签将多个组件包装起来，并在上边使用 wx:if 控制属性。

    <block wx:if="{{true}}">
        <view> view1 </view>
        <view> view2 </view>
    </block>
    
注意： <block/> 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。
 
 
3.列表循环

  wx:for
在组件上使用 wx:for 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该 组件。
默认数组的当前项的下标变量名默认为 index，数组当前项的变量名默认为 item:

     使用 wx:for-item 可以指定数组当前元素的变量名;
     
     使用 wx:for-index 可以指定数组当前下标的变量名.
 
 <view>
 
    <b>循环语句</b>
    <!--循环语句里:
           数组：index代表索引；item代表元素；
           对象：index代表key值；item代表value；-->
           
    <block wx:for="{{people}}" wx:for-index="i" wx:for-item="item">
      <span> {{i+1}}.姓名：{{item.name}},年龄：{{item.age}}</span> 
    </block>
    <block wx:for="{{listObj}}">
      <span>{{index}}:{{item}}</span> 
    </block>

    <b>循环嵌套</b>
    <block wx:for="{{news}}" >
        <text class="source">{{item.source}}</text>
        <text wx:for="{{item.list}}" wx:for-index="key" wx:for-item="val">
            {{val.title}}-----------({{val.time}})
        </text>
    </block>

  </view>
 
 
4.template模板：

   模板 WXML  提供模板（template ） ，可以在模板中定义代码片段，然后在不同的地方调用：

    1)使用当前页面的模板：直接定义并使用
    <!--定义模板  name模板名称-->
    <template name="header">
            <view>{{title}}</view>
            <view>{{name}}</view>
    </template>
    <!--使用模板  is=“模板的名称”   data传值（可以传自定义对象，也可以引用对应页面js中的对象）-->
    <template is="header" data="{{title,name}}"></template>

    2）引入外部模板：先引入再使用

    i.通过import方法：
    <import src='../nav/nav.wxml' />
    <template is='nav' data='{{navTitle}}'></template>

    ii.通过include方法：
    <include src='../nav/nav.wxml' />
    <template is='nav' ></template>

注意：

    1.import方法：只引入目标文件中定义的 template部分， 通过  template is="模板名"   的方式使用模板，当外部模板传入数据的时候得绑定到data="{{item}}";
    
    2.include方法：会忽略template定义的模板 ，直接引入，相当于把模板里面的内容部分复制到我们的页面；
    
    3.import  的作用域：
    
        import 有作用域的概念，即只会 import 目标文件中定义的 template，而不会 import 目标文件import 的 template。
        如：C import B，B import A，在 C 中可以使用 B 定义的 template，在 B 中可以使用 A 定义的 template，但是 C 不能使用 A 定义的 template。
        
        
        
5.事件：
  
 事件分类 ：事件分为冒泡事件和非冒泡事件：
  
    冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递。
    非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递。      
        
      
事件绑定：
  
    事件绑定的写法同组件的属性，以 key、value 的形式。
    key 以 bind 或 catch 开头，然后跟上事件的类型，如 bindtap, catchtouchstart
    
        value 是一个字符串，需要在对应的 Page 中定义同名的函数。不然当触发事件的时候会报错。
        bind 事件绑定不会阻止冒泡事件向上冒泡，catch 事件绑定可以阻止冒泡事件向上冒泡。
        
    如在下边这个例子中， 点击 inner view 会先后触发 handleTap3 和 handleTap2(因为 tap 事件会冒泡到 middle view，而 middle view 阻止了 tap 事件冒泡，不再向父节点传递)，点击 middle view 会触发 handleTap2，点击 outter view 会触发 handleTap1。

    <view id="outter" bindtap="handleTap1">
        outer view
        <view id="middle" catchtap="handleTap2">
            middle view
            <view id="inner" bindtap="handleTap3">
                inner view
            </view>
        </view>
    </view>
        
      
 事件对象：  
  如无特殊说明，当组件触发事件时，逻辑层绑定该事件的处理函数会收到一个事件对象。

        <button bindtap="changeText" data-id='123456'> 点击执行 changeText 方法 </button>

        changeText: function(e) {
            console.log(e);
            this.setData({
            text: 'changed data'
        })
    
    事件对象的属性列表：
    
        属性  类型  说明
        type  String  事件类型
        timeStamp  Integer  事件生成时的时间戳
        target  Object  触发事件的组件的一些属性值集合
        currentTarget  Object  当前组件的一些属性值集合
        touches  Array  触摸事件，触摸点信息的数组
        detail  Object  额外的信息
        
        


request  数据请求：

            wx.request({
                url: 'http://www.phonegap100.com/appapi.php?a=getPortalCate',
                data: {
                    id: '11' ,
                    name: '222'
                },
                header: {
                    'Content-Type': 'application/json'
                },
                success: function(res) {
                    console.log(res.data.result)
                    _that.setData({
                        list:res.data.result,
                        text:'12345'
                    });
                }
            })
            
        Api 接口
        
            获取文章分类 http://www.phonegap100.com/appapi.php?a=getPortalCate
            获取文章列表 http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1
            获取文章详情 http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=121



request POST  数据 提交：
      
      微信 小程序 post  提交数据
      
        wx.request({
            url: 'http://www.57lehuo.com/upload.php',
            method:"POST",
            data: {
                username: '张三 1111' ,
                age: '222'
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                console.log(res.data)
            }
        })
        
    Php  后端 接收数据：

    注意 ：收 后端程序接收 POST  数据的 几种方式 ，这里我们采用的是  接收 JSON  数据的方 式 ，因为 小程序默认就是 post 的 的 json  数据 。
        <?php
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Headers: X-Requested-With');
            $postData=file_get_contents('php://input', true);
            $d=json_decode($postData);
            $name=$d->username;
            $age=$d->age;
            $str.='姓名'.$name."\r\n";
            $str.='年龄'.$age."\r\n";
            echo $str;
            file_put_contents('upload_test/upload.txt', $str);
        ?>
       
        
        
        
