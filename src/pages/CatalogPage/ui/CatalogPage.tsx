import { Breadcrumbs } from "entities/Breadcrumbs"
import { Typography, TypographyVariant } from "shared/ui/Typography/Typography"
import { AppRoutes, RoutePath } from "shared/config/routeConfig/routeConfig"
import { BannersRow } from "widgets/BannersRow"
import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"
import { CatalogLinks } from "./CatalogLinks/CatalogLinks"
import styles from "./CatalogPage.module.scss"

export function CatalogPage() {
    const breadcrumbsList = [RoutePath.catalog]

    return (
        <div className={styles.wrapper}>
            <Breadcrumbs />
            <Typography variant={TypographyVariant.H1} className={styles.title}>
                Каталог товаров
            </Typography>
            <CatalogLinks />
            <ProductCarousel variant={ProductCarouselVariant.TOP_PRODUCTS} />
            <BannersRow />
        </div>
    )
}
