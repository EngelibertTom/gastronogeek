import Link from "next/link";
import Button from "@/components/ui/button/Button";
import styles from './RecipeCard.module.scss';

const RecipeCard = ({ recipe, index, cardsRef }) => {

    const cardRef = (el) => {
        if (cardsRef && cardsRef.current) {
            cardsRef.current[index] = el;
        } else {

        }
    };
    return (
        <li key={recipe.slug} className={styles.recipeCard}>
            <Link href={`/recettes/${recipe.slug}`}>
                <div className={styles.cardImage}>
                    <img src={recipe.images[0] || "/placeholder.jpg"} alt={recipe.title} />
                </div>
                <div className={styles.cardContent}>
                    <h2>{recipe.title}</h2>
                </div>
            </Link>
            <Button color={"#EB5F55"} text={"Voir la recette"} link={`/recettes/${recipe.slug}`} />
        </li>
    );
};

export default RecipeCard;
