"use client";

import { useState } from 'react';


export default function AddIngredientsClient({ defaultPersons, ingredients }) {
    const [personCount, setPersonCount] = useState(defaultPersons);

    const adjustedIngredients = ingredients.map((ingredient) => ({
        ...ingredient,
        quantity: ingredient.quantity
            ? (ingredient.quantity / defaultPersons) * personCount
            : null,
    }));

    return (
        <div>
            <div >
                <button onClick={() => setPersonCount((prev) => Math.max(1, prev - 1))}>-</button>
                <span>{personCount} personnes</span>
                <button onClick={() => setPersonCount((prev) => prev + 1)}>+</button>
            </div>
            <ul>
                {adjustedIngredients.map((ingredient, index) => (
                    <li key={index}>
                        <span >
                            {ingredient.quantity ? `${ingredient.quantity.toFixed(2)} ${ingredient.unit || ''}` : ''}
                        </span>{' '}
                        {ingredient.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
