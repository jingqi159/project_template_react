# 天津鲸鳍科技有限公司官网

这是天津鲸鳍科技有限公司的官方网站，展示公司的智能养老产品、产学研融合体系和公司信息。

## 技术栈

- React 18+
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Recharts

## 如何运行网站

### 前提条件

确保您的计算机上已安装以下软件：

- Node.js (推荐 v18 或更高版本)
- pnpm (包管理器)

### 运行步骤

1. **克隆仓库**

   ```bash
   git clone <仓库地址>
   cd 项目目录
   ```

2. **安装依赖**

   ```bash
   pnpm install
   ```

3. **启动开发服务器**

   ```bash
   pnpm dev
   ```

   开发服务器将在 http://localhost:3000 启动，您可以在浏览器中访问这个地址查看网站。

4. **构建生产版本**

   ```bash
   pnpm build
   ```

   构建后的文件将位于 `dist` 目录中，可以部署到任何静态网站托管服务。

## 网站功能

- 首页：展示公司简介、愿景使命、核心产品和联系信息
- 产学研融合页面：展示公司的产学研融合体系、运作流程、成功案例和融合优势
- 响应式设计：适配不同屏幕尺寸的设备
- 深色模式支持：提供舒适的浏览体验
- 平滑滚动和动画效果：提升用户体验

## 目录结构

- `src/` - 源代码目录
  - `components/` - React 组件
  - `contexts/` - React Context
  - `hooks/` - 自定义 hooks
  - `lib/` - 工具函数
  - `pages/` - 页面组件
- `public/` - 静态资源
- `index.html` - HTML 入口文件
- `package.json` - 项目依赖和脚本