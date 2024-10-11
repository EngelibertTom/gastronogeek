import Link from "next/link";
import styles from "./Recettes.module.scss";


const fetchRecipes = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch('https://api-gastronogeek.vercel.app/api/recipes/');
    return response.json();
};
const Recettes = async () => {

      const recipes = await fetchRecipes();
    return (
        <div className={styles.containerRecipes}>
            <h1>Recettes</h1>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.slug}>
                        <Link href={`/recettes/${recipe.slug}`}>
                            <h2>{recipe.title}</h2>
                        </Link>
                        <p>{recipe.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recettes;
