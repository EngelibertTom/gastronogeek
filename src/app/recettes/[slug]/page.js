import styles from './Recette.module.scss';

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
        <h1>{recipe.title}</h1>

    </div>
    )
}
