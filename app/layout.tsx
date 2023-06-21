import { Toaster } from "react-hot-toast";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({
    subsets: ["latin"],
});

export const metadata = {
    title: "staycasa",
    description: "Home away from Home",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <Toaster />
                <RegisterModal />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
