"use client";

import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BookKey,
  Check,
  ChevronRight,
  CircleDollarSign,
  Fingerprint,
  LayoutGrid,
  LockKeyhole,
  Menu,
  ShieldCheck,
  Sparkles,
  WalletCards,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

type AppItem = {
  id: string;
  name: string;
  category: string;
  version: string;
  tagline: string;
  description: string;
  accent: string;
  accentSoft: string;
  icon: typeof BookKey;
  features: { icon: typeof ShieldCheck; title: string; text: string }[];
  stats: { label: string; value: string }[];
};

const apps: AppItem[] = [
  {
    id: "codebook",
    name: "Codebook",
    category: "安全工具",
    version: "v1.0.0",
    tagline: "把重要密码，交给真正属于你的保险库。",
    description:
      "一款专注隐私与离线安全的密码管理 App。用清晰、安静的方式保存账户、密码和私密笔记。",
    accent: "#a6ff4d",
    accentSoft: "rgba(166, 255, 77, .12)",
    icon: BookKey,
    features: [
      { icon: LockKeyhole, title: "本地加密", text: "敏感数据仅保存在你的设备中" },
      { icon: Fingerprint, title: "生物识别", text: "指纹或面容快速安全解锁" },
      { icon: ShieldCheck, title: "隐私优先", text: "不追踪、不分析、不出售数据" },
    ],
    stats: [
      { label: "适用系统", value: "Android" },
      { label: "安装包", value: "28.6 MB" },
      { label: "当前版本", value: "1.0.0" },
    ],
  },
  {
    id: "ledger",
    name: "轻账",
    category: "效率工具",
    version: "v0.9.2",
    tagline: "每一笔都清楚，生活自然更从容。",
    description:
      "去掉复杂报表和冗余操作的极简记账 App。三秒完成记录，让日常财务变得轻盈可控。",
    accent: "#ffca58",
    accentSoft: "rgba(255, 202, 88, .12)",
    icon: WalletCards,
    features: [
      { icon: Zap, title: "极速记账", text: "金额、分类、备注一步完成" },
      { icon: CircleDollarSign, title: "收支洞察", text: "用简单图表看懂资金去向" },
      { icon: ShieldCheck, title: "离线可用", text: "没有网络也能随时记录" },
    ],
    stats: [
      { label: "适用系统", value: "Android" },
      { label: "安装包", value: "19.4 MB" },
      { label: "当前版本", value: "0.9.2" },
    ],
  },
  {
    id: "vland",
    name: "Vland",
    category: "数字生态",
    version: "Concept",
    tagline: "进入一片由所有权、创造力与共识构成的新大陆。",
    description:
      "Vland 生态的移动入口，集中呈现土地权益、NFT 资产与生态成长路径。当前为概念展示版本。",
    accent: "#9ea7ff",
    accentSoft: "rgba(158, 167, 255, .12)",
    icon: Sparkles,
    features: [
      { icon: LayoutGrid, title: "资产总览", text: "集中查看土地与生态 NFT" },
      { icon: Zap, title: "生态探索", text: "清晰了解每一种权益与关系" },
      { icon: ShieldCheck, title: "社区共识", text: "参与生态发展与治理决策" },
    ],
    stats: [
      { label: "产品阶段", value: "概念版" },
      { label: "开放平台", value: "Web / App" },
      { label: "更新时间", value: "2026.08" },
    ],
  },
];

function AppIcon({ app, small = false }: { app: AppItem; small?: boolean }) {
  const Icon = app.icon;
  return (
    <span
      className={small ? "app-icon app-icon-small" : "app-icon"}
      style={{ background: app.accentSoft, color: app.accent }}
    >
      <Icon strokeWidth={1.7} />
    </span>
  );
}

export default function Home() {
  const [activeId, setActiveId] = useState(apps[0].id);
  const app = apps.find((item) => item.id === activeId) ?? apps[0];

  return (
    <SidebarProvider
      style={{ "--sidebar-width": "19rem" } as React.CSSProperties}
      className="site-shell"
    >
      <Sidebar className="portfolio-sidebar" collapsible="offcanvas">
        <SidebarHeader className="brand-block">
          <div className="brand-mark">H</div>
          <div>
            <p className="brand-name">HCHN LAB</p>
            <p className="brand-caption">独立产品实验室</p>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup className="app-nav">
            <SidebarGroupLabel>我的作品 · {String(apps.length).padStart(2, "0")}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="app-list">
                {apps.map((item, index) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      size="lg"
                      isActive={activeId === item.id}
                      onClick={() => setActiveId(item.id)}
                      className="app-nav-button"
                    >
                      <span className="app-index">0{index + 1}</span>
                      <AppIcon app={item} small />
                      <span className="app-nav-copy">
                        <strong>{item.name}</strong>
                        <span>{item.category}</span>
                      </span>
                      <ChevronRight className="app-nav-arrow" />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="sidebar-note">
          <span className="status-dot" />
          <p>持续构建中</p>
          <span>Last update · 2026.08</span>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset className="detail-panel" style={{ "--app-accent": app.accent, "--app-accent-soft": app.accentSoft } as React.CSSProperties}>
        <header className="mobile-header">
          <SidebarTrigger className="menu-trigger"><Menu /></SidebarTrigger>
          <span>HCHN LAB</span>
          <span className="mobile-count">{apps.findIndex((item) => item.id === activeId) + 1} / {apps.length}</span>
        </header>

        <div className="detail-wrap" key={app.id}>
          <section className="hero-section">
            <div className="hero-copy">
              <div className="eyebrow">
                <span>{app.category}</span><i />
                <span>{app.version}</span>
              </div>
              <AppIcon app={app} />
              <h1>{app.name}</h1>
              <h2>{app.tagline}</h2>
              <p>{app.description}</p>
              <div className="hero-actions">
                <Button className="download-button" size="lg">
                  <ArrowDownToLine /> 下载 Android APK
                </Button>
                <Button className="secondary-button" variant="outline" size="lg">
                  查看开发故事 <ArrowUpRight />
                </Button>
              </div>
            </div>

            <div className="device-stage" aria-label={`${app.name} 界面效果展示`}>
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="phone-frame">
                <div className="phone-island" />
                <div className="phone-screen">
                  <div className="screen-top">
                    <span>9:41</span><span>● ◒</span>
                  </div>
                  <div className="screen-heading">
                    <span>欢迎回来</span>
                    <strong>{app.name}</strong>
                  </div>
                  <div className="screen-card screen-card-primary">
                    <span>{app.id === "ledger" ? "本月结余" : app.id === "vland" ? "生态资产" : "安全评分"}</span>
                    <strong>{app.id === "ledger" ? "¥ 8,420" : app.id === "vland" ? "12 NFTs" : "98 / 100"}</strong>
                    <div className="screen-line"><i /><i /><i /><i /><i /></div>
                  </div>
                  <div className="screen-label">最近使用</div>
                  {[0, 1, 2].map((row) => (
                    <div className="screen-row" key={row}>
                      <span className="screen-row-icon"><Check /></span>
                      <span><strong>{["个人空间", "重要项目", "私密收藏"][row]}</strong><small>已安全同步</small></span>
                      <ChevronRight />
                    </div>
                  ))}
                </div>
              </div>
              <div className="stage-label"><span /> MADE WITH CARE</div>
            </div>
          </section>

          <section className="feature-section">
            <div className="section-intro">
              <span>WHY {app.name.toUpperCase()}</span>
              <h3>少一点复杂，<br />多一点真正有用。</h3>
            </div>
            <div className="feature-grid">
              {app.features.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <article key={feature.title}>
                    <span className="feature-number">0{index + 1}</span>
                    <FeatureIcon />
                    <h4>{feature.title}</h4>
                    <p>{feature.text}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="download-section" id="downloads">
            <div>
              <span>GET THE APP</span>
              <h3>准备好体验 {app.name} 了吗？</h3>
              <p>下载最新 Android 版本，安装前请允许浏览器下载 APK 文件。</p>
            </div>
            <div className="download-card">
              <AppIcon app={app} small />
              <div className="download-meta">
                <strong>{app.name} · {app.version}</strong>
                <span>{app.stats.map((stat) => stat.value).join("  ·  ")}</span>
              </div>
              <Button className="download-round" aria-label={`下载 ${app.name}`}><ArrowDownToLine /></Button>
            </div>
          </section>

          <footer className="page-footer">
            <span>© 2026 HCHN LAB</span>
            <span>为真实需求，做简单产品。</span>
          </footer>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
