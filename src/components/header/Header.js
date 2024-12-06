'use client';

import styles from "./Header.module.scss";
import TransitionLink from "@/utils/TransitionLink";
import {useEffect, useState} from "react";
import {useRecipes} from "@/contexts/RecipesContext";

const Header = () => {
    const [bgHeader, setBgHeader] = useState('transparent');
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const recipes = useRecipes();

    document.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
            setBgHeader('transparent');
        } else {
            setBgHeader('white');
        }
    });


    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        if (query) {
            const results = Object.values(recipes.recipes).filter((recipe) =>
                recipe.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredRecipes(results);
        } else {
            setFilteredRecipes([]);
        }
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchQuery.trim()) {
            console.log("Recherche pour:", searchQuery);
        }
    };

    return (
        <header className={styles.header} style={{'--bgColor': bgHeader}}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <TransitionLink url="/">
                            <img src="/assets/images/logo.png" alt="logo"/>
                        </TransitionLink>
                    </li>
                    <li>
                        <TransitionLink className={styles.link} url="/recettes">
                            <span>Recettes</span>
                        </TransitionLink>
                    </li>
                    <li>
                        <TransitionLink className={styles.link} url="/contact">
                            <span>Contact</span>
                        </TransitionLink>
                    </li>
                    <li className={styles.searchContainer}>
                        <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                placeholder="Rechercher des recettes..."
                                className={styles.searchInput}
                            />
                        </form>
                        {searchQuery && filteredRecipes.length > 0 && (
                            <ul className={styles.searchResults}>
                                {filteredRecipes.map((recipe) => (
                                    <li key={recipe.id} className={styles.searchResultItem}>
                                        <TransitionLink url={`/recettes/${recipe.slug}`}>
                                            {recipe.title}
                                        </TransitionLink>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
