import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ChangeLanguageIcon } from "shared/assets/icons/others"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonVariant } from "shared/ui/Button/Button"
import i18n from "shared/config/i18n/i18n"
import { changeLanguageActions } from "../model/slice/changeLanguageSlice"
import { getStorageLanguage } from "../model/selectors/changeLanguageSelectors"
import { Languages, languagesData } from "../config/config"
import styles from "./ChangeLanguage.module.scss"

export function ChangeLanguage() {
    const currentLanguage = useSelector(getStorageLanguage)
    const [dropdownActive, setDropdownActive] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const dropdownRef = useRef<HTMLDivElement | null>(null)
    const dispatch = useDispatch()

    function onMouseEnterHandler() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
        }
    }

    function clickHandler() {
        setDropdownActive(prev => !prev)
    }

    function languageClickHandler(languagesCode: Languages) {
        i18n.changeLanguage(languagesCode)
        dispatch(changeLanguageActions.setCurrentLanguage(languagesCode))
        setDropdownActive(false)
    }

    function mouseLeaveHandler() {
        const delay = window.innerWidth < 769 ? 0 : 400

        timeoutRef.current = setTimeout(() => {
            setDropdownActive(false)
        }, delay)
    }
    return (
        <div
            className={styles.wrapper}
            onClick={clickHandler}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <ChangeLanguageIcon className={styles.menuItem} />
            {dropdownActive && (
                <div ref={dropdownRef} className={styles.languageListContainer}>
                    {languagesData.map(language => {
                        const { id, text, languagesCode } = language

                        return (
                            <Button
                                key={id}
                                variant={ButtonVariant.CLEAR_INVERTED}
                                onClick={e => {
                                    e.stopPropagation()
                                    languageClickHandler(languagesCode)
                                }}
                                className={classNames(
                                    styles.btn,
                                    { [styles.active]: currentLanguage === languagesCode },
                                    []
                                )}
                            >
                                {text}
                            </Button>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
