# 公司风格个人官网（静态版）

这是一个像公司官网一样的简洁个人网站模板：首页横幅、关于、项目、简历、联系 + Impressum/Datenschutz。
你可以直接在本地打开 `index.html` 预览，然后上传到 GitHub Pages/Netlify/Vercel 上线。

## 一步一步上线（GitHub Pages）
1. 注册 GitHub（已有可跳过），新建一个公开仓库，比如 `my-site`。
2. 点击 **Add file → Upload files**，把本文件夹里的所有文件上传。
3. 进入仓库的 **Settings → Pages**：
   - **Source** 选择 `Deploy from a branch`。
   - **Branch** 选择 `main` 和 `/ (root)`，保存。
4. 等 1 分钟左右刷新，页面上会显示你的网站网址，形如：`https://你的用户名.github.io/my-site/`。
5. 修改 `index.html` 里的内容（名字、简介、项目、社交链接等）。

## 表单（联系我）
- 使用 Formspree：在 Formspree 新建表单后，复制 ID，替换 `index.html` 中
  `https://formspree.io/f/YOUR_FORMSPREE_ID` 的 `YOUR_FORMSPREE_ID`。

## 自定义域名（可选）
- 购买域名后，在域名服务商里添加 CNAME，把 `www.你的域名` 指向 `你的用户名.github.io.`
- 在仓库 **Settings → Pages → Custom domain** 填上你的域名。

## 德国合规提示
- 个人站也建议提供 `Impressum` 与 `Datenschutz` 页面（已含模板）。
- 若使用 Cookies/分析工具，请增加 Cookie 横幅与隐私说明。

---

祝你搭建顺利！
