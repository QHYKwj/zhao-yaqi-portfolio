# 赵雅祺 · 个人简历与作品集

以电影片头、纸质作品手册为视觉灵感的中文个人网站。移动端 H5 自适应，桌面端双栏排版，无需安装依赖或构建。

## 本地预览

在当前目录运行 `python -m http.server 4173`，然后打开 http://localhost:4173 。也可以直接打开 `index.html`（复制邮箱需 HTTPS 或 localhost）。

## 内容维护

- `index.html`：个人介绍、履历、项目、技能和联系方式。
- `script.js` 的 `works`：作品弹窗职责与奖项。
- `style.css`：配色、排版、手机适配与动效。
- `assets/portrait.jpg`：从所提供简历提取的原始肖像。
- `assets/zhao-yaqi-resume.pdf`：原始简历下载。

所有履历和奖项依据用户提供的简历整理，未独立核验。作品题签为 CSS 与文字排版设计，并非作品剧照或官方海报。未提供视频链接，故作品弹窗没有播放入口。

## GitHub Pages

目标账号：`QHYKwj`。建议仓库名称：`zhao-yaqi-portfolio`。

项目已配置 `.github/workflows/pages.yml`：推送到 `main` 后将静态资源发布至 GitHub Pages。在仓库 Settings → Pages → Build and deployment 中选择 GitHub Actions。

成功发布后的预期地址为 `https://qhykwj.github.io/zhao-yaqi-portfolio/`（以 GitHub 实际返回的部署地址为准）。

本站包含简历原有姓名、肖像、手机和邮箱，及原始简历下载。分享前可在上述文件中调整联系方式或移除 PDF 下载。
