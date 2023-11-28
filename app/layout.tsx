import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "block-key-inputs | chakkun1121",
    template: "%s | block-key-inputs | chakkun1121",
  },
  description:
    "キー入力をブロックするアプリです。PWAを使用することでシステムキーの一部も無効化できます。このアプリを使用することで電源をつけたままキーボードを清掃できます",
  manifest: "./manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
