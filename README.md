# 简记账 · Serene Ledger (Kinetic Neo-Fintech)

<p align="center">
  <b>新一代个人财务全景管理系统 · 极客风格与现代金融美学的深度融合</b>
</p>

---

## 📌 项目简介

**简记账 (Serene Ledger)** 是一套面向追求高效管理、极简美学与数据透明的极客及现代数字游民打造的个人财务面板。
设计灵感源自 **Kinetic Neo-Fintech** 设计系统，将瑞士平面网格排版的严谨秩序与高对比度黑曜石暗黑风、发光流光霓虹微交互（Electric Lime & Vivid Emerald）及 Specular Glassmorphism 毛玻璃质感完美融合。

本项目已标准化拆分为两大跨端实现：
1. **🖥️ PC 桌面端 (`serene-ledger-web`)**：基于 **React 18 + Vite + TypeScript + Tailwind CSS** 构建，原生支持一键部署到 **Cloudflare Pages**。
2. **📱 移动端 (`serene-ledger-mobile`)**：基于 **React Native + Expo SDK 51 + Expo Router** 构建，提供原生丝滑的手势与便携记账体验。

---

## 🎨 视觉与设计系统 (Kinetic Neo-Fintech)

- **Bento 模块化便当盒布局**：信息单元以层次分明的卡片形式呈现，降低视觉负荷。
- **暗黑高反差底色**：深度黑曜石（`#0d0e11` / `#121316`）衬底，极光电绿（`#c3f400`）聚焦核心操作与正向流动，薄荷翡翠（`#00ffa3` / `#01e599`）标注入账。
- **微光质感与边缘光晕 (Rim Light)**：精细的半透明边框与毛玻璃背景模糊滤镜。
- **专业金融排版字系**：
  - **数字与代码**：`JetBrains Mono`（支持 `tabular-nums`，消除数字抖动）
  - **大标题与主标**：`Space Grotesk`
  - **正文与控件**：`Manrope`

---

## 📂 项目结构

```bash
├── base/                                # 原始 HTML 视觉原型与设计系统规范
│   ├── _1/                              # PC 端页面原型 (code.html, screen.png)
│   ├── _2/                              # 移动端页面原型 (code.html, screen.png)
│   └── kinetic_neo_fintech/DESIGN.md    # 完整的 Design System 规范文件
│
├── serene-ledger-web/                   # 🖥️ PC 桌面端 (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/                  # 侧边栏 (Sidebar) 与顶栏 (Header)
│   │   │   ├── dashboard/               # 财务全景大卡、KPI 指标卡、走势图、快捷记账、分类环形图
│   │   │   └── ui/                      # 基础 BentoCard 与 FilterTabs 组件
│   │   ├── data/mockData.ts             # 结构化 Mock 流水与图表数据
│   │   └── styles/index.css             # 霓虹电网网格背景与发光样式
│   ├── tailwind.config.ts               # 定制 Design Tokens
│   ├── wrangler.toml                    # Cloudflare Pages 配置文件
│   └── package.json
│
└── serene-ledger-mobile/                # 📱 移动端 (React Native + Expo)
    ├── app/
    │   ├── _layout.tsx                  # 根路由及 Google 字体加载器
    │   └── (tabs)/
    │       ├── _layout.tsx              # 底部 5 键 Tab 栏 + 居中悬浮突出记账 FAB
    │       ├── index.tsx                # 移动端明细主页
    │       ├── analytics.tsx            # 统计报表
    │       ├── create.tsx               # 记账弹窗/表单
    │       ├── accounts.tsx             # 资产管理
    │       └── settings.tsx             # 极客配置
    ├── components/                      # 原生 FinanceHeroCard、TrendMiniChart、CategoryBreakdown 等
    ├── constants/                       # Colors、Typography、MockData
    ├── app.json
    └── package.json
```

---

## 🚀 快速上手

### 1. PC 桌面端 (React + Vite)

```bash
cd serene-ledger-web

# 安装依赖
npm install

# 启动本地开发服务器
npm run dev

# 打包构建生产版本
npm run build
```
本地预览地址：`http://localhost:5173`

#### 部署至 Cloudflare Pages

本项目已内置 `wrangler.toml` 配置：
```toml
name = "serene-ledger-web"

[site]
bucket = "./dist"

[build]
command = "npm run build"
```

- **方式一：通过 GitHub 自动构建（推荐）**
  1. 打开 [Cloudflare Dashboard](https://dash.cloudflare.com/) -> **Workers & Pages** -> **Create application** -> **Pages**。
  2. 选择关联当前 Git 仓库。
  3. 配置构建参数：
     - **Framework Preset**: `Vite`
     - **Root Directory**: `serene-ledger-web`
     - **Build Command**: `npm run build`
     - **Build Output Directory**: `dist`
  4. 点击 **Save and Deploy**，即可自动生成全球加速访问链接。

- **方式二：通过 Wrangler CLI 直接发布**
  ```bash
  cd serene-ledger-web
  npm run build
  npx wrangler pages deploy dist --project-name=serene-ledger-web
  ```

---

### 2. 移动端 (React Native + Expo)

```bash
cd serene-ledger-mobile

# 安装依赖
npm install

# 启动 Expo 开发服务
npm start
```

- 终端按 `i` 启动 **iOS 模拟器**
- 终端按 `a` 启动 **Android 模拟器**
- 或使用手机下载 **Expo Go** App 扫描终端出现的二维码进行真机实时调试。

---

## 🛠️ 技术栈清单

| 维度 | PC 桌面端 (`serene-ledger-web`) | 移动端 (`serene-ledger-mobile`) |
| :--- | :--- | :--- |
| **框架基底** | React 18, Vite | React Native, Expo SDK 51 |
| **路由方案** | 单页仪表盘架构 | Expo Router (文件路由系统) |
| **语言规范** | TypeScript 5 | TypeScript 5 |
| **样式体系** | Tailwind CSS + 自定义 CSS 变量 | React Native StyleSheet + 线性渐变 |
| **图标与字体** | Material Symbols Outlined, Google Fonts | @expo/vector-icons, @expo-google-fonts |
| **部署托管** | Cloudflare Pages / Vercel | Expo Application Services (EAS) / App Store / APK |

---

## 📄 许可证

本项目遵循 MIT 协议开源。
