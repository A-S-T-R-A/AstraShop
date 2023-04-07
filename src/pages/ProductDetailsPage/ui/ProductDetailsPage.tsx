import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Breadcrumbs } from "entities/Breadcrumbs"
import { ProductDetails } from "entities/Product"
import { useDispatch, useSelector } from "react-redux"
import { AppRoutes } from "shared/config/routeConfig/routeConfig"
import { BannersRow } from "widgets/BannersRow"
import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"
import { ToggleProductInBasket, ToggleProductInBasketVariant } from "features/basketFeatures"
import { fetchProductDetails } from "../model/services/fetchProductDetails/fetchProductDetails"
import {
    getProductDetailsAttributes,
    getProductDetailsDescription,
    getProductDetailsError,
    getProductDetailsId,
    getProductDetailsImages,
    getProductDetailsLoading,
    getProductDetailsName,
    getProductDetailsPrice,
    getProductParentId,
} from "../model/selectors/productDetailsSelectors"

export function ProductDetailsPage() {
    const breadcrumbsList = [
        AppRoutes.CATALOG,
        AppRoutes.CATEGORY,
        AppRoutes.SUB_CATEGORY,
        AppRoutes.PRODUCT_DETAILS,
    ]

    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchProductDetails(id))
    }, [dispatch, id])

    const productRequestLoading = useSelector(getProductDetailsLoading)
    const productRequestError = useSelector(getProductDetailsError)
    const productId = useSelector(getProductDetailsId)
    const productName = useSelector(getProductDetailsName)
    const productPrice = useSelector(getProductDetailsPrice)
    const productCurrency = "$" // to be changed
    const prodductIsNew = false // to be changed
    const productImages = useSelector(getProductDetailsImages)
    const productDesc = useSelector(getProductDetailsDescription)
    const productAttributes = useSelector(getProductDetailsAttributes)
    const productParentId = useSelector(getProductParentId)

    const product = {
        id: productId || 0,
        name: productName || "",
        images: productImages || [],
        price: productPrice || 0,
    }

    return (
        <div>
            <Breadcrumbs breadcrumbsList={breadcrumbsList} parentId={productParentId} />
            <ProductDetails
                isLoading={productRequestLoading}
                error={productRequestError}
                is_new={prodductIsNew}
                id={productId || 0}
                name={productName || ""}
                price={productPrice || 0}
                currency={productCurrency}
                images={productImages || []}
                description={productDesc}
                attributes={productAttributes}
                Basket={
                    <ToggleProductInBasket
                        variant={ToggleProductInBasketVariant.BUTTON}
                        product={product}
                    />
                }
            />
            <ProductCarousel variant={ProductCarouselVariant.TOP_PRODUCTS} />
            <BannersRow />
        </div>
    )
}
