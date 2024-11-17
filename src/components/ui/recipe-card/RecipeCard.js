import styles from './RecipeCard.module.scss';

const RecipeCard = ({bgImg}) => {

    return (
        <div className={styles.circle} style={{ backgroundImage: `url(${bgImg})` }} >

        </div>
    )


}

export default RecipeCard;