"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { BounceLoader } from "react-spinners";
import styles from './Recettes.module.scss'
import RecipeCard from "@/components/ui/recipe-card/RecipeCard";

const RecettesClient = ({recipes }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [licenseFilter, setLicenseFilter] = useState("");
    const [filteredRecipes, setFilteredRecipes] = useState(recipes);
    const [loading, setLoading] = useState(true);
    const cardsRef = useRef([]);

    useEffect(() => {
        if(recipes && recipes.length > 0){
            setLoading(false)
        }
    }, [recipes])

    useEffect(() => {
        setLoading(true);
        const results = recipes.filter(recipe => {
            const matchesSearchTerm =
                recipe.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                recipe.description?.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = typeFilter ? recipe.type === typeFilter : true;
            const matchesLicense = licenseFilter ? recipe.license === licenseFilter : true;
            return matchesSearchTerm && matchesType && matchesLicense;
        });
        setFilteredRecipes(results);
        setLoading(false);
    }, [searchTerm, typeFilter, licenseFilter, recipes]);

    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: index * 0.1,
                }
            );
        });
    }, [filteredRecipes]);

    const types = [...new Set(recipes.map(recipe => recipe.type))];
    const licenses = [...new Set(recipes.map(recipe => recipe.license))];

    return (
        <>
            <div className={styles.containerFilters}>
                <input
                    type="text"
                    placeholder="Rechercher une recette..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchBar}
                />

                <div className={styles.filters}>
                    <label>Type de plat :</label>
                    <select onChange={(e) => setTypeFilter(e.target.value)} value={typeFilter}>
                        <option value="">Tous les types</option>
                        {types.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>

                    <label>Licence :</label>
                    <select onChange={(e) => setLicenseFilter(e.target.value)} value={licenseFilter}>
                        <option value="">Toutes les licences</option>
                        {licenses.map((license) => (
                            <option key={license} value={license}>{license}</option>
                        ))}
                    </select>
                </div>
            </div>

            <BounceLoader color="#EB5F55" loading={loading} />
            <ul className={styles.recipeGrid}>
                {filteredRecipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} cardsRef={cardsRef}/>
                ))}
            </ul>
        </>
    );
};

export default RecettesClient;
