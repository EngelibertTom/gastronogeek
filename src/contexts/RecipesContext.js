'use client'
import { createContext, useContext, useState, useEffect } from 'react';

const RecipesContext = createContext();

export const useRecipes = () => {
    const context = useContext(RecipesContext);
    if (!context) {
        throw new Error('useRecipes must be used within a RecipesProvider');
    }
    return context;
};

export const RecipesProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('https://api-gastronogeek.vercel.app/api/recipes/', { cache: 'no-store' });
            const data = await response.json();
            setRecipes(data);
        };

        fetchRecipes();
    }, []);

    return (
        <RecipesContext.Provider value={{ recipes }}>
            {children}
        </RecipesContext.Provider>
    );
};
