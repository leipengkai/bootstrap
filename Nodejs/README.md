[Node.js](http://nodejs.cn/)
 - 安装nodejs npm
```bash
sudo apt-get install -y nodejs npm

# 安装和更新node
sudo npm install -g n
sudo n stable  # 稳定版本  sudo n latest最新版本
n ls  # 查看Node所有版本

# 更新npm(Node.js包管理工具):
sudo npm install npm@latest -g

# 普通用户也用最新版本：
sudo chown -R $USER:$(id -gn $USER) /home/femn/.config

# 如果下载速度慢的话 可以使用淘宝镜像安装第三方包:
cd
sudo npm install -g cnpm --registry=https:registry.npm.taobao.org
cnpm --version
```
 - 测试:在服务器端运行和解释js代码
```bash
cd Nodejs
node test.js
```
 - 手动安装包:Node.js运行时所需要的第三方包
 ```bash
 # 所有的包都默认会保存在当前目录下的 node_modules这个目录下
npm install jquery
# 全局安装,则保存在/usr/local/lib/node_modules目录下
sudo npm install -g express
# -g 全局安装
 ```
 - 通过package.json安装依赖包
 ```bash
 # 生成package.json文件
 npm init
 
 # 下载所有package.json的依赖包
 npm install == npm i 
 # --save 更新package.json的生产环境下的包
 # --save-dev 开发环境
 sudo npm install gulp --save
 
 #卸载
 sudo npm uninstall gulp --save

# 更新
npm update jquery
 ```
 - [http-server](https://github.com/indexzero/http-server)
```bash
sudo npm install http-server -g
# 项目根目录
cd ../
# node启动http服务
http-server -p 8888
http-server --help
```