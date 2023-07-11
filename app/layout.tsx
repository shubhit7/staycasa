import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Nunito } from "next/font/google";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";

const font = Nunito({
    subsets: ["latin"],
});

export const metadata = {
    title: "staycasa",
    description: "Home away from Home",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const currentUser = await getCurrentUser();
    return (
        <html lang="en">
            <body className={font.className}>
                <Toaster />
                <LoginModal />
                <RegisterModal />
                <RentModal />
                <Navbar currentUser={currentUser} />
                {children}
            </body>
        </html>
    );
}
