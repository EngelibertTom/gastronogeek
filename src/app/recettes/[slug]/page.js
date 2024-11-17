import styles from './Recette.module.scss';
import {Pacifico} from 'next/font/google';

const pacifico = Pacifico({subsets: ['latin'], weight: ["400"]});
const fetchRecipes = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch('https://api-gastronogeek.vercel.app/api/recipes/');
    return response.json();
}

export async function generateStaticParams() {
    const recipes = await fetchRecipes();
    return recipes.map((recipe) => ({
        slug: recipe.slug,

    }));
}

const getRecipe = async (slug) => {

    const res = await fetch('https://api-gastronogeek.vercel.app/api/recipes/' + slug);
    return res.json();
}


export default async function Recette({params}) {

    const recipe = await getRecipe(params.slug)

    return (
        <div className={styles.containerRecipe}>
            <div className={styles.recipe}>
            {/* Titre principal */}
            <h1 className={`${styles.title} ${pacifico.className}`}>{recipe.title}</h1>

            {/* Header */}
            <div className={styles.recipeHeader}>
                <img src={recipe.images[0]} alt={recipe.title} className={styles.recipeImage} />
                <div className={styles.recipeInfo}>
                    <p className={styles.category}>
                        {recipe.category} - {recipe.license}
                    </p>
                    <p>Type : {recipe.type}</p>
                    <p>Difficulté : {recipe.difficulty}/5</p>
                    <p>Temps de préparation : {recipe.prepTime}</p>
                </div>
            </div>

            {/* Description */}
            <div className={styles.recipeDescription}>
                <p>{recipe.desc}</p>
            </div>

            {/* Ingrédients */}
            <div className={styles.ingredients}>
                <h2 className={pacifico.className}>Ingrédients (pour {recipe.defaultPersons} personnes)</h2>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>
                            <span className={styles.quantity}>
                                {ingredient.quantity ? `${ingredient.quantity} ${ingredient.unit || ''}` : ''}
                            </span>{' '}
                            {ingredient.name}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Étapes */}
            <div className={styles.steps}>
                <h2 className={pacifico.className}>Préparation</h2>
                <ol>
                    {recipe.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>

            {/* Dressage */}
            <div className={styles.dressing}>
                <h2 className={pacifico.className}>Dressage</h2>
                <p>{recipe.dressing}</p>
            </div>
            </div>
        </div>
    );
}
