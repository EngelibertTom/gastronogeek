import styles from './Recette.module.scss';
import {Pacifico} from 'next/font/google';

const pacifico = Pacifico({subsets: ['latin'], weight: ["400"]});

const fetchRecipes = async () => {
    const response = await fetch('https://api-gastronogeek.vercel.app/api/recipes/', { cache: 'no-store' });
    if (!response.ok) {
        throw new Error("Failed to fetch recipes");
    }
    return response.json();
};

export async function generateStaticParams() {
    const recipes = await fetchRecipes();
    return recipes.map((recipe) => ({
        slug: recipe.slug,
    }));
}

const getRecipe = async (slug) => {
    const res = await fetch('https://api-gastronogeek.vercel.app/api/recipes/' + slug);
    return res.json();
};


import AddIngredientsClient from "@/components/ui/add-ingredients/AddIngredients";
import RecipeCard from "@/components/ui/recipe-card/RecipeCard";

export default async function Recette({params}) {
    const recipe = await getRecipe(params.slug);
    const allRecipes = await fetchRecipes();

    const recommendedRecipes = allRecipes
        .filter((r) => r.category === recipe.category && r.slug !== params.slug)
        .slice(0, 3);

    return (
        <div className={styles.containerRecipe}>
            <div className={styles.recipe}>
                {/* Titre principal */}
                <h1 className={`${styles.title} ${pacifico.className}`}>{recipe.title}</h1>

                {/* Header */}
                <div className={styles.recipeHeader}>
                    <img src={recipe.images[0]} alt={recipe.title} className={styles.recipeImage}/>
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
                    <div className={styles.personControls}>
                        <AddIngredientsClient
                            defaultPersons={recipe.defaultPersons}
                            ingredients={recipe.ingredients}
                        />
                    </div>

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

                <div className={styles.ingredients}>
                    <h2 className={pacifico.className}>Recettes similaires</h2>

                    <ul className={styles.recipeGrid}>
                        {recommendedRecipes.map((rec, index) => (
                            <RecipeCard key={index} recipe={rec} index={index} cardsRef={null} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
        ;
}
