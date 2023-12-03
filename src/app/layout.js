import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Hope-O2",
    description: "hope o2 app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fa">
            <head>
                <link
                    href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
                    rel="stylesheet"
                    type="text/css"
                />
            </head>
            <body className={inter.className}>
                <ThemeContextProvider>
                    <ThemeProvider>
                        <div className="container">
                            <Navbar />
                            <div className="wrapper">
                                {children}
                                <Footer />
                            </div>
                        </div>
                    </ThemeProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
