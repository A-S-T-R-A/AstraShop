import { useState } from "react"
import { Breadcrumbs } from "entities/Breadcrumbs"
import { AppRoutes } from "shared/config/routeConfig/routeConfig"
import { SortProducts } from "features/SortProducts"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { ProductCard } from "entities/ProductCard"
import { ProductCardList } from "../model/list"
import { ProductFilters } from "./ProductFilters/ProductFilters"
import styles from "./SubCategoryPage.module.scss"

export function SubCategoryPage() {
    const [sortingPattern, setSortingPattern] = useState("")
    const breadcrumbsList = [AppRoutes.CATALOG, AppRoutes.CATEGORY, AppRoutes.SUB_CATEGORY]

    return (
        <div className={styles.wrapper}>
            <Breadcrumbs breadcrumbsList={breadcrumbsList} />
            <Typography variant={TypographyVariant.H3} className={styles.title}>
                Клавиатуры
            </Typography>
            <SortProducts
                sortingPattern={sortingPattern}
                setSortingPattern={setSortingPattern}
                className={styles.desktopFilters}
            />
            <ProductFilters className={styles.mobileFilters} />

            <div className={styles.products}>
                {ProductCardList.map(item => {
                    const { id } = item
                    return <ProductCard key={id} {...item} className={styles.product} />
                })}
            </div>
            <Button variant={ButtonVariant.OUTLINE} className={styles.btn}>
                Показать еще товар
            </Button>
        </div>
    )
}
