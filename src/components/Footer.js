import styles from "./Footer.module.scss"

function footer() {
  return (
    <footer className={`${styles.footer} d-flex flex-row align-items-center justify-content-center`}>
      <p>Copyright ©2023 Recette pingucoder,Inc.</p>
      </footer>
  )
}

export default footer