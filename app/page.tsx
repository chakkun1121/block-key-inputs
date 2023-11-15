import Image from "next/image";
import KeyBlock from "./keyBlock";

export default function Home() {
  return (
    <>
      <KeyBlock />
      <main>
        <h2>これはキーボード操作をブロックするためのサイトです。</h2>
      </main>
    </>
  );
}
