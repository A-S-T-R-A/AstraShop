import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import styles from "./CategoryPage.module.scss"

export function CategoryPage() {
    return (
        <div className={styles.wrapper}>
            <Typography variant={TypographyVariant.H3} className={styles.title}>
                Клавиатуры
            </Typography>
            <div className={styles.filter}>
                <Typography variant={TypographyVariant.P}>Фильтр</Typography>
            </div>
        </div>
    )
}
