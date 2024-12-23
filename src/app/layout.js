import {Montserrat} from 'next/font/google';
import Header from "@/components/header";
import './globals.css';
import Footer from "@/components/footer/Footer";
import GSAPWrapper from "@/components/animations/GSAPWrapper";
import PageTransition from '@/utils/PageTransition'
import {RecipesProvider} from "@/contexts/RecipesContext";


const montserrat = Montserrat({subsets: ['latin'], weight: ["400", "700"]});


export const metadata = {
    title: "Delicious",
    description: "Site proposant de nombreuses recettes à réaliser, pour tous les niveaux.",
};

export default function RootLayout({children}) {
    return (
        <html lang="fr">
        <body className={montserrat.className}>
        <PageTransition>
            <GSAPWrapper>
                <RecipesProvider>
                <Header/>
                <main>
                    {children}
                </main>
                <Footer/>
                </RecipesProvider>
            </GSAPWrapper>
        </PageTransition>
        </body>
        </html>
    );
}
