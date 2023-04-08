import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Breadcrumbs } from "entities/Breadcrumbs"
import { ProductDetails } from "entities/Product"
import { useDispatch, useSelector } from "react-redux"
import { AppRoutes } from "shared/config/routeConfig/routeConfig"
import { BannersRow } from "widgets/BannersRow"
import { ProductCarousel, ProductCarouselVariant } from "widgets/ProductCarousel"
import { ToggleProductInBasket, ToggleProductInBasketVariant } from "features/basketFeatures"
import { catalogNavigationActions } from "entities/CatalogNavigation/model/slice/catalogNavigationSlice"
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
    getProductParents,
} from "../model/selectors/productDetailsSelectors"

export function ProductDetailsPage() {
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

    const productParentsData = useSelector(getProductParents)

    useEffect(() => {
        const parents =
            productParentsData?.map(parent => ({
                id: parent.id,
                name: parent.name,
                type: parent.parent_category_id === null ? "category" : "sub_category",
            })) || []

        dispatch(
            catalogNavigationActions.setCurrentTree([
                ...parents,
                {
                    id: id !== undefined ? +id : 0,
                    name: productName,
                    type: "product",
                },
            ])
        )
    }, [id, dispatch, productName, productParentsData])

    const product = {
        id: productId || 0,
        name: productName || "",
        images: productImages || [],
        price: productPrice || 0,
    }

    return (
        <div>
            <Breadcrumbs />
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
