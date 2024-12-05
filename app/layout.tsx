import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import NavBar from "@/components/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taxi Ilam",
  description: "Professionele en betrouwbare taxidiensten",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={`${inter.className}`}>
        <div className="flex w-screen h-screen justify-center items-center">
          <div className="flex flex-col gap-4 max-w-7xl w-full justify-center items-center">
            <div className="flex sticky gap-2 grow top-0 shadow-md z-10 h-16 shrink-0 w-full">
              <NavBar />
            </div>
            <main className="flex grow min-w-full h-[calc(100vh-80px)] justify-start items-start">
              {children}
            </main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
