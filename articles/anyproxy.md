#anyproxy


## 安装

```cmd
npm install -g anyproxy

anyproxy --root

anyproxy -i
```
代理服务器：localhost:8001

web监控：localhost:8002

## 规则编写



## 问题解决
参考教程中，说明了 Windows 和 Mac 系统的配置，这里补充一下移动端（Android、iOS）的配置

生成RootCA > 下载 rootCA.cr > 启动 AnyProxy 服务，与参考教程一致。

移动端安装时遇到一些问题：

Android 端
问题：以小米手机为例，浏览器访问 http://anyproxy_ip:8002/qr_root 下载或扫描二维码下载rootCA.crt文件后，不自动安装，手动点击，提示： “无法安装该证书，因为无法读取证书文件。”

解决方案：设置 > 更多设置 > 系统安全 > 从存储设备安装 > 选择rootCA.crt文件 > 弹出为证书命名弹框，随便命名 > 弹出提示框：您需要先设置锁定屏幕密码才能使用凭据存储。 > 设置手机锁屏密码 > 安装证书成功。之前安装证书的时候，测试机没有设置锁屏密码，所以一直失败，不知道证书跟锁屏密码有什么关系/(ㄒoㄒ)/~~

iOS端
iOS端比较顺利，步骤：也是浏览器或二维码下载rootCA.crt文件 > 自动跳转到 AnyProxy 的安装描述文件页 > 一路点击安装。

后续步骤
证书安装成功后，手机连接 WiFi （与 AnyProxy 同一局域网），设置代理：IP 为 AnyProxy 所在 PC 的 IP，端口默认为 8801。操作手机，PC 端浏览器访问 http://localhost:8002，即可查看移动端的代理请求。