import {Montserrat} from 'next/font/google';
import Header from "@/components/header/Header";
import './globals.css';
import Footer from "@/components/footer/Footer";

const montserrat = Montserrat({ subsets: ['latin'], weight: ["400", "700"] });

export const metadata = {
    title: "Delicious",
    description: "Site proposant de nombreuses recettes à réaliser, pour tous les niveaux.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
        <body className={montserrat.className}>
        <Header />
        <main style={{paddingTop:90}}>
        {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
