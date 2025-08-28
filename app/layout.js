import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar";
import BootstrapSetup from "@/components/BootstrapSetup";

export const metadata = {
    title: "Following Islam",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {" "}
                <BootstrapSetup />
                <Navbar />
                {children}
            </body>
        </html>
    );
}
