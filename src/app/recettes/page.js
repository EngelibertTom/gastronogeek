'use client'
import {useState, useEffect, useRef} from "react";
import Link from "next/link";
import styles from "./Recettes.module.scss";
import {Pacifico} from 'next/font/google';
import Button from "@/components/ui/button/Button";
import gsap from "gsap";
import {BounceLoader} from "react-spinners";

const pacifico = Pacifico({subsets: ['latin'], weight: ["400"]});


const fetchRecipes = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch('https://api-gastronogeek.vercel.app/api/recipes/');
    return response.json();
};

const Recettes = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [licenseFilter, setLicenseFilter] = useState("");
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const cardsRef = useRef([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const loadRecipes = async () => {
            setIsLoading(true);
            const allRecipes = await fetchRecipes();
            setRecipes(allRecipes);
            setFilteredRecipes(allRecipes);
            setIsLoading(false)
        };
        loadRecipes();
    }, []);


    useEffect(() => {
        const results = recipes.filter(recipe => {
            const matchesSearchTerm =
                (recipe.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    recipe.description?.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchestype = typeFilter ? recipe.type === typeFilter : true;
            const matchesLicense = licenseFilter ? recipe.license === licenseFilter : true;
            return matchesSearchTerm && matchestype && matchesLicense;
        });
        setFilteredRecipes(results);
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
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        end: "top 60%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, [filteredRecipes]);


    const types = [...new Set(recipes.map(recipe => recipe.type))];
    const licenses = [...new Set(recipes.map(recipe => recipe.license))];

    return (
        <div className={styles.containerRecipes}>
            <div className={styles.recipes}>
                <div className={styles.containerFilters}>
                    <h1 className={pacifico.className}>Recettes</h1>

                    <input
                        type="text"
                        placeholder="Rechercher une recette..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchBar}
                    />


                    <div className={styles.filters}>
                        <select onChange={(e) => setTypeFilter(e.target.value)} value={typeFilter}>
                            <option value="">Tous les types</option>
                            {types.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>

                        <select onChange={(e) => setLicenseFilter(e.target.value)} value={licenseFilter}>
                            <option value="">Toutes les licences</option>
                            {licenses.map((license) => (
                                <option key={license} value={license}>{license}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <BounceLoader color="#EB5F55" loading={isLoading} />
                <ul className={styles.recipeGrid}>
                    {filteredRecipes.map((recipe, index) => (
                        <li key={recipe.slug} className={styles.recipeCard} ref={(el) => (cardsRef.current[index] = el)}>
                            <Link href={`/recettes/${recipe.slug}`}>
                                <div className={styles.cardImage}>
                                    <img src={recipe.images[0] || "/placeholder.jpg"} alt={recipe.title}/>
                                </div>
                                <div className={styles.cardContent}>
                                    <h2>{recipe.title}</h2>
                                    {/*<p>{recipe.description.substring(0, 100)}...</p>*/}
                                    <Button color={"#EB5F55"} text={"Voir la recette"} link={`/recettes/${recipe.slug}`}/>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    );
};

export default Recettes;
