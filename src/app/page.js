'use client'
import styles from './Home.module.scss';
import Button from "@/components/ui/button/Button";
import RecipeImage from "@/components/ui/recipe-image/RecipeImage";
import Carousel from "@/components/ui/carousel/Carousel";
const Home = () => {

  return (
      <div className={styles.containerHero}>
          <div className={styles.hero}>
              <div>
              <div className={styles.textHero}>
                  <h1>Delicious</h1><br/>
                  <p>Décrouvrez de nouvelles recettes tout en vous amusant et en découvrant de nouvelles facons de cuisiner !</p>
              </div>
              <div className={styles.containerButton}>
                  <Button color={"#EB5F55"} text={"Voir les recettes"} link={"/recettes"}/>
              </div>
              </div>
              <div>
                  <div>
                      <Carousel  slides={[
                          { color: '#EB5F55', img: './assets/images/poulet-grille.png' },
                          { color: '#F7B8B4', img: './assets/images/poulet-grille.png' },
                      ]}/>
                  </div>
              </div>
          </div>

      </div>
  )

}

export default Home;
