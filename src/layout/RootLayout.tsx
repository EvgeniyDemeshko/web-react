import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidenav from "@/components/Sidenav";
import { Outlet, useLocation } from "react-router";

export function RootLayout() {
    const location = useLocation();

    return (
        <div className="layout">
            <Header />
            <Sidenav />
            <main>
                <Outlet/>
                {location.state?.from === "contact-success" && (
                    <p style={{ marginTop: "1rem" }} className="text-green-600">
                        Ви щойно надіслали форму зі сторінки "Контакти". Дані збережено.
                    </p>
                )}
            </main>
            <Footer />
        </div>
    )
}