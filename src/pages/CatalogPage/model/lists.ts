import { LinksListItem } from "entities/LinksList"
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
import { AppRoutes } from "shared/config/routeConfig/routeConfig"

export const catalogList: LinksListItem[] = [
    {
        id: "1",
        title: "Дом",
        Icon: HouseIcon,
        list: [
            { id: "1", text: "Часы", path: "/category" },
            { id: "2", text: "Android приставки", path: "/category" },
            { id: "3", text: "Видеорегистраторы, камеры, домофоны", path: "/category" },
            { id: "4", text: "Телевизоры", path: "/category" },
            { id: "5", text: "Обогреватели", path: "/category" },
            { id: "6", text: "Чайники", path: "/category" },
            { id: "7", text: "Тестеры мультиметры", path: "/category" },
            { id: "8", text: "Вентиляторы", path: "/category" },
        ],
    },
    {
        id: "2",
        title: "Автомобиль",
        Icon: CarIcon,
        list: [
            { id: "1", text: "Часы", path: "/category" },
            { id: "2", text: "Android приставки", path: "/category" },
            { id: "3", text: "Видеорегистраторы, камеры, домофоны", path: "/category" },
            { id: "4", text: "Телевизоры", path: "/category" },
            { id: "5", text: "Обогреватели", path: "/category" },
            { id: "6", text: "Чайники", path: "/category" },
            { id: "7", text: "Тестеры мультиметры", path: "/category" },
            { id: "8", text: "Вентиляторы", path: "/category" },
        ],
    },
    {
        id: "3",
        title: "Световое оборудование",
        Icon: LampIcon,
        list: [
            { id: "1", text: "LED ленты, Гирлянды, Контролеры", path: "/category" },
            { id: "2", text: "Лазеры, Брелки, Лампы", path: "/category" },
            { id: "3", text: "Светодиодные LED вывески", path: "/category" },
            { id: "4", text: "Фонарики", path: "/category" },
        ],
    },
    {
        id: "4",
        title: "Телефоны и планшеты",
        Icon: TabletIcon,
        list: [
            { id: "1", text: "Мобильные телефоны", path: "/category" },
            { id: "2", text: "Планшетные ПК", path: "/category" },
            { id: "3", text: "Аккумуляторы и зарядные устройства", path: "/category" },
            { id: "4", text: "Power Bank", path: "/category" },
            { id: "5", text: "Моноподы для селфи", path: "/category" },
            { id: "6", text: "Кабеля и переходники", path: "/category" },
            { id: "7", text: "Наушники и гарнитуры", path: "/category" },
            { id: "8", text: "Мобильные колонки", path: "/category" },
        ],
    },
    {
        id: "5",
        title: "Компьютерная переферия",
        Icon: LaptopIcon,
        list: [
            { id: "1", text: "Клавиатуры", path: "/category" },
            { id: "2", text: "Мыши", path: "/category" },
            { id: "3", text: "Адаптеры", path: "/category" },
            { id: "4", text: "Кабеля и переходники", path: "/category" },
        ],
    },
    {
        id: "6",
        title: "Звуковое оборудование",
        Icon: SoundIcon,
        list: [
            { id: "1", text: "Усилители звука", path: "/category" },
            { id: "2", text: "MP3 Плееры и флешки", path: "/category" },
            { id: "3", text: "Автомобильные магнитолы", path: "/category" },
            { id: "4", text: "Автомобильные колонки", path: "/category" },
            { id: "5", text: "Наушники и гарнитуры", path: "/category" },
        ],
    },
    {
        id: "7",
        title: "Мужчинам",
        Icon: MaleIcon,
        list: [
            { id: "1", text: "Бритвы, тримеры, для стрижки", path: "/category" },
            { id: "2", text: "Электронные сигареты", path: "/category" },
        ],
    },
    {
        id: "8",
        title: "Женщинам",
        Icon: FemaleIcon,
        list: [
            { id: "1", text: "Бритвы, эпиляторы, стрижки", path: "/category" },
            { id: "2", text: "Косметика", path: "/category" },
            { id: "3", text: "Фены, плойки, бигуди, утюжки", path: "/category" },
            { id: "4", text: "Швейные машинки", path: "/category" },
        ],
    },
    {
        id: "9",
        title: "Детям",
        Icon: BabyCarriageIcon,
        list: [
            { id: "1", text: "Спинер, волчок", path: "/category" },
            { id: "2", text: "Гироборды", path: "/category" },
            { id: "3", text: "Лазеры, Лампы, Брелки", path: "/category" },
            { id: "4", text: "Тетрисы, тамагочи, карманные приставки", path: "/category" },
            { id: "5", text: "Наборы резинок для плетения браслетов", path: "/category" },
        ],
    },
    {
        id: "10",
        title: "Торговля",
        Icon: ShopBagIcon,
        list: [
            { id: "1", text: "Спинер, волчок", path: "/category" },
            { id: "2", text: "Гироборды", path: "/category" },
            { id: "3", text: "Лазеры, Лампы, Брелки", path: "/category" },
        ],
    },
    {
        id: "11",
        title: "Чехлы и плёнки",
        Icon: TabletIcon,
        list: [
            { id: "1", text: "Чехлы для телефонов и планшетов", path: "/category" },
            { id: "2", text: "Защитные стёкла", path: "/category" },
        ],
    },
    {
        id: "12",
        title: "Разное",
        Icon: BoxIcon,
        list: [{ id: "1", text: "Кошельки и портмоне", path: "/category" }],
    },
]

export const breadcrumbsList = [AppRoutes.CATALOG]
