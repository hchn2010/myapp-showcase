import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "我的 App 展示中心",
  description: "HCHN LAB 独立开发作品集：探索产品、了解功能并下载最新版本。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
