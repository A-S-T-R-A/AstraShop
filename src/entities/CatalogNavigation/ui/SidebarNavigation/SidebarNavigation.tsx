import { getNavigationTree } from "entities/CatalogNavigation/model/selectors/sidebarNavigationSelectors"
import { fetchNavigationTree } from "entities/CatalogNavigation/model/services/fetchNavigationTree/fetchNavigationTree"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink/AppLink"
import { navigationSubcategory, navigationTreeType } from "../../model/types/list"
import styles from "./SidebarNavigation.module.scss"

interface SubMenuProps {
    list: navigationSubcategory[]
    isOpen: boolean
    onLinkClick?: () => void
}

function SubMenu({ list, isOpen, onLinkClick }: SubMenuProps) {
    if (!isOpen) return null

    return (
        <div className={styles.subMenu}>
            {list.map(item => {
                const { id, name } = item
                return (
                    <AppLink key={id} to={RoutePath.sub_category + id} onClick={onLinkClick}>
                        {name}
                    </AppLink>
                )
            })}
        </div>
    )
}

export function SidebarNavigation() {
    const [hovered, setHovered] = useState(-1)

    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    function mouseEnterHandler(id: number) {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }

        setHovered(id)
    }

    function mouseLeaveHandler() {
        timeoutRef.current = setTimeout(() => {
            setHovered(-1)
        }, 200)
    }

    const dispatch = useDispatch()
    const navigationTree: navigationTreeType = useSelector(getNavigationTree)

    useEffect(() => {
        dispatch(fetchNavigationTree())
    }, [dispatch])

    return (
        <>
            <div className={classNames(styles.overlay, { [styles.overlayOn]: hovered !== -1 })} />
            <div className={styles.container}>
                {navigationTree.map(item => {
                    const { id, categories: subCategories } = item
                    return (
                        <div
                            key={id}
                            onMouseEnter={() => mouseEnterHandler(id)}
                            onMouseLeave={mouseLeaveHandler}
                            className={styles.linkContainer}
                        >
                            <AppLink
                                to={RoutePath.category + id}
                                onClick={() => setHovered(-1)}
                                className={styles.link}
                            >
                                <img src={item.icon} alt="svg" />
                                {item.name}
                            </AppLink>
                            <SubMenu
                                list={subCategories}
                                isOpen={
                                    hovered === id && !!subCategories && subCategories?.length > 0
                                }
                                onLinkClick={() => setHovered(-1)}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
