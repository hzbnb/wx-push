config->index.js 是配置文件
```json
appid: "wx71941f6106ae1072",
appsecret: "b4b2ad8a8d4a94e403831886ac10c646",
template_id: "TUgz8f5zkdTYWmwyTC_akIPhbEUyzMiNc0O2JicK8Rk",
touser: "oonWJ5slWuS2OrJdgCLM3GmNdxVk",

key: "201c93c2e2b34bdeecdbf9f5265eb84e",
city: "邢台",
first_date: "2022-11-10",
```

---

上面四项从 [https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login) 这里获取

---

下面的三项换成自己的 
city 换成自己的城市 
first_date 换成第一天的日期。
key去高德地图注册自己的api，如果嫌麻烦直接用我的也可以，不过高德地图有使用次数限制，大家都用我的人多的话可能会限额。（不过应该没有那么多人用）

---


模板标题 -> 你们自己随便写
模板内容 -> 天下面内容

```
{{nowDate.DATA}}

城市：{{city.DATA}} 

天气： {{weather.DATA}} 

白天气温： {{daytemp.DATA}}

夜间气温： {{nighttemp.DATA}}

今天是我们恋爱的 {{loveDate.DATA}} 天

{{text.DATA}}
```

