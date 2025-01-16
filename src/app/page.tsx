import Image from "next/image";
import Card from "@/components/card";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex  flex-col gap-8 row-start-2 items-center sm:items-start">
      <Card className="!p-1 !flex-row items-center justify-between rounded-3xl w-full text-sm text-neutral-500 text-center !px-1.5">
        <Header/>
       </Card>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
