import { Provider } from "@/components/ui/provider";
import { AppProvider } from "@/contexts/AppContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FutureME",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="pt-BR">
      <body className={inter.className}>
        <Provider>
          <AppProvider>
            {children}
            <Toaster richColors position="top-center" closeButton />
          </AppProvider>
        </Provider>
      </body>
    </html >
  );
}
