import { Inter } from "next/font/google";

import Header from "@/components/header";
import Content from "@/components/content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Content/>
    </>
  );
}
