## 部署文档

config->index.js 是配置文件

```javascript
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

下面的三项换成自己的 <br />city 换成自己的城市 <br />first_date 换成第一天的日期。<br />key去高德地图注册自己的api，如果嫌麻烦直接用我的也可以，不过高德地图有使用次数限制，大家都用我的人多的话可能会限额。（不过应该没有那么多人用）

---


模板标题 -> 你们自己随便写<br />模板内容 -> 天下面内容

```
{{nowDate.DATA}}

城市：{{city.DATA}} 

天气： {{weather.DATA}} 

白天气温： {{daytemp.DATA}}

夜间气温： {{nighttemp.DATA}}

今天是我们恋爱的 {{loveDate.DATA}} 天

{{text.DATA}}
```
<a name="guSmb"></a>
#### 我的微信
![_cgi-bin_mmwebwx-bin_webwxgetmsgimg__&MsgID=8416387224450029090&skey=@crypt_39357739_d6942d700d4537fd8a2a8d8f9a7c96b0&mmweb_appid=wx_webfilehelper.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/32661060/1669812294473-a68488d7-4b67-42c9-8eaa-9ef22ae1c4d3.jpeg#averageHue=%23a4a3a2&clientId=u8a1e329b-00d3-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=u2912b9a6&margin=%5Bobject%20Object%5D&name=_cgi-bin_mmwebwx-bin_webwxgetmsgimg__%26MsgID%3D8416387224450029090%26skey%3D%40crypt_39357739_d6942d700d4537fd8a2a8d8f9a7c96b0%26mmweb_appid%3Dwx_webfilehelper.jpg&originHeight=430&originWidth=430&originalType=binary&ratio=1&rotation=0&showTitle=false&size=42685&status=done&style=none&taskId=ud0a4e243-5056-4956-be49-e78ec89dea5&title=)
