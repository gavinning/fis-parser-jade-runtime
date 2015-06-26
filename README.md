# fis-parser-replace-path

----
[jade on github](https://github.com/visionmedia/jade) 

[jade api](http://jade-lang.com/api/)

[jade中文教程](https://github.com/visionmedia/jade/blob/master/Readme_zh-cn.md)

本插件会将jade模板文件编译成浏览器客户端支持的模板js文件，依赖jade提供的 [runtime](https://github.com/visionmedia/jade/blob/master/runtime.js) 文件，并根据配置决定是否包装amd模块化代码


```
npm i fis-parser-jade-runtime -g
```


```
fis.config.merge({
    pack:{
        // 合并模板文件
        '/static/tpl.js': /\/widget\/(.*)\.(jade)$/i
    },
    ext: {
        jade: 'jade'
    },
    modules: {
        parser: {
            jade: 'jade-runtime'
        }
    },
    roadmap: {
        path: [
            {
                // 指定目录下的jade文件
                reg: /\/widget\/(.*)\.(jade)$/i,
                // 标记类js文件
                isJsLike: true,
                // 是组件化的，会被jswrapper包装
                isMod: true,
                // id是标准路径，防止和js文件冲突
                id: '$&',
                // 可以自行配置发布路径，也可以注释掉不发布只合并
                release: '${statics}/$&'
            }
        ]
    }
})

```

