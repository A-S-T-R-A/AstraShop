import {
    BabyCarriageIcon,
    BoxIcon,
    CarIcon,
    FemaleIcon,
    HouseIcon,
    LampIcon,
    LaptopIcon,
    MaleIcon,
    ShopBagIcon,
    SoundIcon,
    TabletIcon,
} from "shared/assets/icons/list"
import { RoutePath } from "shared/config/routeConfig/routeConfig"

export interface sidebarNavigationSubMenuType {
    path: string
    text: string
    id: string
}

export interface sidebarNavigationItemsType {
    path: string
    text: string
    id: string
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
    subMenu?: sidebarNavigationSubMenuType[]
}

export const sidebarNavigationList: sidebarNavigationItemsType[] = [
    {
        id: "1",
        text: "Дом",
        Icon: HouseIcon,
        path: RoutePath.catalog,
        subMenu: [
            { id: "1.1", text: "Дом", path: RoutePath.catalog },
            { id: "1.2", text: "Дом", path: RoutePath.catalog },
            { id: "1.3", text: "Дом", path: RoutePath.catalog },
        ],
    },
    {
        id: "2",
        text: "Автомобиль",
        Icon: CarIcon,
        path: RoutePath.catalog,
        subMenu: [
            { id: "2.1", text: "Дом", path: RoutePath.catalog },
            { id: "2.2", text: "Дом", path: RoutePath.catalog },
            { id: "2.3", text: "Дом", path: RoutePath.catalog },
        ],
    },
    {
        id: "3",
        text: "Телефоны и планшеты",
        Icon: TabletIcon,
        path: RoutePath.catalog,
        subMenu: [
            { id: "3.1", text: "Дом", path: RoutePath.catalog },
            { id: "3.2", text: "Дом", path: RoutePath.catalog },
            { id: "3.3", text: "Дом", path: RoutePath.catalog },
        ],
    },
    {
        id: "4",
        text: "Компьютерная периферия",
        Icon: LaptopIcon,
        path: RoutePath.catalog,
        subMenu: [
            { id: "4.1", text: "Дом", path: RoutePath.catalog },
            { id: "4.2", text: "Дом", path: RoutePath.catalog },
            { id: "4.3", text: "Дом", path: RoutePath.catalog },
        ],
    },
    {
        id: "5",
        text: "Звуковое оборудование",
        Icon: SoundIcon,
        path: RoutePath.catalog,
        subMenu: [
            { id: "5.1", text: "Дом", path: RoutePath.catalog },
            { id: "5.2", text: "Дом", path: RoutePath.catalog },
            { id: "5.3", text: "Дом", path: RoutePath.catalog },
        ],
    },
    {
        id: "6",
        text: "Световое оборудование",
        Icon: LampIcon,
        path: RoutePath.catalog,
        subMenu: [
            { id: "6.1", text: "Дом", path: RoutePath.catalog },
            { id: "6.2", text: "Дом", path: RoutePath.catalog },
            { id: "6.3", text: "Дом", path: RoutePath.catalog },
        ],
    },
    {
        id: "7",
        text: "Мужчинам",
        Icon: MaleIcon,
        path: RoutePath.catalog,
        subMenu: [
            { id: "7.1", text: "Дом", path: RoutePath.catalog },
            { id: "7.2", text: "Дом", path: RoutePath.catalog },
            { id: "7.3", text: "Дом", path: RoutePath.catalog },
        ],
    },
    {
        id: "8",
        text: "Женщинам",
        Icon: FemaleIcon,
        path: RoutePath.catalog,
        subMenu: [
            { id: "8.1", text: "Дом", path: RoutePath.catalog },
            { id: "8.2", text: "Дом", path: RoutePath.catalog },
            { id: "8.3", text: "Дом", path: RoutePath.catalog },
        ],
    },
    {
        id: "9",
        text: "Детям",
        Icon: BabyCarriageIcon,
        path: RoutePath.catalog,
        subMenu: [
            { id: "9.1", text: "Дом", path: RoutePath.catalog },
            { id: "9.2", text: "Дом", path: RoutePath.catalog },
            { id: "9.3", text: "Дом", path: RoutePath.catalog },
        ],
    },
    {
        id: "10",
        text: "Торговля",
        Icon: ShopBagIcon,
        path: RoutePath.catalog,
        subMenu: [
            { id: "10.1", text: "Дом", path: RoutePath.catalog },
            { id: "10.2", text: "Дом", path: RoutePath.catalog },
            { id: "10.3", text: "Дом", path: RoutePath.catalog },
        ],
    },
    {
        id: "11",
        text: "Чехлы и пленки",
        Icon: TabletIcon,
        path: RoutePath.catalog,
        subMenu: [
            { id: "11.1", text: "Дом", path: RoutePath.catalog },
            { id: "11.2", text: "Дом", path: RoutePath.catalog },
            { id: "11.3", text: "Дом", path: RoutePath.catalog },
        ],
    },
    {
        id: "12",
        text: "Разное",
        Icon: BoxIcon,
        path: RoutePath.catalog,
        subMenu: [
            { id: "12.1", text: "Дом", path: RoutePath.catalog },
            { id: "12.2", text: "Дом", path: RoutePath.catalog },
            { id: "12.3", text: "Дом", path: RoutePath.catalog },
        ],
    },
]
