
```

### 安装依赖

在项目根目录下运行以下命令安装项目依赖：

```bash
pnpm install
```

### 启动开发服务器

运行以下命令以启动开发服务器：

```bash
pnpm dev
```

访问 [http://localhost:3001](http://localhost:3001) 查看您的应用程序。

### 构建生产版本

运行以下命令以构建生产版本：

```bash
pnpm build
```

构建后的文件将位于 `dist` 目录中。

## 容器化部署

### 构建镜像并运行容器
#### 构建镜像
在终端中进入项目根目录，并执行以下命令来构建 Docker 镜像:
```
docker build -t your-image-name .
```
确保将 `your-image-name` 替换为你自己的镜像名称

#### 运行容器
使用以下命令在 Docker 容器中运行你的应用：
```
docker run -p 3001:80 your-image-name
```
这将在容器的端口 `80` (暴露在`Dockerfile`中) 上运行你的应用，并将其映射到你主机的端口 `3001` 上。

现在，你可以通过访问 http://localhost:3001 来查看部署的应用。


### 使用docker-compose.yaml
在终端中进入项目根目录，并执行以下命令来启动 Docker Compose：
```
docker-compose up -d
```
Docker Compose 根据`docker-compose.yaml`定义的配置构建镜像并在后台运行容器.

容器运行成功后，同样可以通过访问 http://localhost:3001来查看部署的应用。

参考[.commitlint.config.js](./commitlint.config.js)

- `feat` 新功能
- `fix` 修复bug
- `docs` 文档注释
- `style` 代码格式(不影响代码运行的变动)
- `refactor` 重构
- `perf` 性能优化
- `revert` 回滚commit
- `test` 测试相关
- `chore` 构建过程或辅助工具的变动
- `ci` 修改CI配置、脚本
- `types` 类型定义文件修改
- `wip` 开发中
