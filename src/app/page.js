'use client'
import styles from './Home.module.scss';
import Button from "@/components/ui/button/Button";
import {Pacifico} from 'next/font/google';
import Carousel from "@/components/ui/carousel/Carousel";
import RecipeCard from "@/components/ui/recipe-card/RecipeCard";


const pacifico = Pacifico({subsets: ['latin'], weight: ["400"]});
const Home = () => {

    return (
        <>
            <div className={styles.containerHero}>
                <div className={styles.hero}>
                    <div>
                        <div className={styles.textHero}>
                            <h1 className={pacifico.className}>Delicious</h1><br/>
                            <p>Décrouvrez de nouvelles recettes tout en vous amusant et en découvrant de nouvelles
                                facons de cuisiner !</p>
                        </div>
                        <div className={styles.containerButton}>
                            <Button color={"#EB5F55"} text={"Voir les recettes"} link={"/recettes"}/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Carousel slides={[
                                {color: '#EB5F55', img: './assets/images/poulet-grille.png'},
                                {color: '#F7B8B4', img: './assets/images/poulet-grille.png'},
                            ]}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.containerAbout}>
                <div className={styles.about}>
                    <div>
                        <img src={"./assets/images/poulet-grille.png"} alt=""/>
                    </div>
                    <div>
                        <h2 className={pacifico.className}>“Inspiré par les recettes de Gastronogeek !” </h2>
                        <p>Ce site a été conçu avec passion pour vous offrir une expérience immersive, en combinant
                            créativité culinaire et innovation technologique. Chaque recette est issue d’une API dédiée
                            et vous guide pas à pas dans la réalisation de plats qui éveilleront vos papilles.<br/><br/>
                            Le blog a été développé en Next.js, un framework moderne qui permet d’allier performance et
                            flexibilité. Notre objectif ? Créer un site non seulement visuellement appétissant, mais
                            aussi pratique et intuitif, même face aux défis techniques d’un site
                            professionnel.<br/><br/>
                            Nous espérons que ce blog deviendra votre référence pour découvrir de nouvelles recettes et
                            vous inspirer au quotidien. Bon appétit !</p>
                    </div>
                </div>
            </div>
            <div className={styles.containerRecipes}>
                <div className={styles.recipes}>
                    <h2 className={pacifico.className}>Recettes à essayer</h2>
                    <div className={styles.bestRecipes}>
                        <RecipeCard bgImg={'./assets/images/poulet-grille.png'}/>
                        <RecipeCard bgImg={'./assets/images/poulet-grille.png'}/>
                        <RecipeCard bgImg={'./assets/images/poulet-grille.png'}/>
                    </div>
                    <div className={styles.button}>
                    <Button color={"#EB5F55"} text={"Voir toutes les recettes"} link={"/recettes"}/>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Home;
