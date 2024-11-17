import styles from './RecipeImage.module.scss';

const RecipeImage = ({ img, bgColor }) => {
    return (
        <div className={styles.containerRecipeImage}>
            <div className={styles.background} style={{ '--bgColor': bgColor }}></div>
            <div>
                <img
                    className={styles.recipeImage}
                    src={img}
                    alt="Image du plat"
                />
            </div>
        </div>
    );
}

export default RecipeImage;
