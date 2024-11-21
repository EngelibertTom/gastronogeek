'use client';
import styles from './Recette.module.scss';
import { useState } from "react";
import AddIngredients from "@/components/ui/add-ingredients/AddIngredients";


export default function RecipeClient({ recipe, pacifico}) {


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
                    <div className={styles.personControls}>
                        <AddIngredients setPersonCount={setPersonCount} personCount={personCount} />
                    </div>
                    <h2 className={pacifico.className}>Ingrédients (pour {recipe.defaultPersons} personnes)</h2>
                    <ul>
                        {adjustedIngredients.map((ingredient, index) => (
                            <li key={index}>
                                <span className={styles.quantity}>
                                    {ingredient.quantity ? `${ingredient.quantity.toFixed(2)} ${ingredient.unit || ''}` : ''}
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
