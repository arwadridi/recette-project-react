import styles from "./Recipe.module.scss"
import ma9rouna from "../assets/images/ma9rouna.png"
function Recipe() {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={ma9rouna} alt="recipe" />
      </div>
      <div className={` ${styles.recipeTitle} d-flex flex-row align-items-center justify-content-center` }>
        <h3> Ma9rouna Viande</h3>
      </div>
    </div>
  )
}

export default Recipe