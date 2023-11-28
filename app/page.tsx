import Image from "next/image";
import KeyBlock from "./keyBlock";

export default function Home() {
  return (
    <>
      <KeyBlock />
      <main>
        <h2>これはキーボード操作をブロックするためのサイトです。</h2>
        <p>
          このサイトではキー操作の殆どをブロックします。また、PWAを使用することで一部のシステムキーも無効化できます。
        </p>
      </main>
    </>
  );
}
