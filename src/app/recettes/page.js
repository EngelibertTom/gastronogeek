import styles from './Recettes.module.scss'
import { Pacifico } from 'next/font/google';
import RecettesClient from "@/app/recettes/RecettesClient";
const pacifico = Pacifico({ subsets: ['latin'], weight: ["400"] });


const fetchRecipes = async () => {
    const response = await fetch('https://api-gastronogeek.vercel.app/api/recipes/', { cache: 'no-store' });
    if (!response.ok) {
        throw new Error("Failed to fetch recipes");
    }
    return response.json();
};


export default async function RecettesPage() {
    const recipes = await fetchRecipes();

    return (
        <div className={styles.containerRecipes}>
            <div className={styles.recipes}>
                <div className={styles.containerFilters}>
                    <h1 className={pacifico.className}>Recettes</h1>
                </div>

                <RecettesClient  styles={styles} recipes={recipes} />
            </div>
        </div>
    );
}
