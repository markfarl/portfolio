import { SetStateAction } from "react"

export type ColorSchemeProviderType = {
    colorSchemeData: ColorSchemeType,
    setColorSchemeData: React.Dispatch<SetStateAction<ColorSchemeType>>,
    colorSchemeClass: colorClassType[ColorSchemeType]
}

export type ColorSchemeType = "normal" | "dark" | "light" | "solar"

export type colorClassType = {
    [key in ColorSchemeType]: {
        img: string
        textColor: string
        textColorLine: string
        gradientBK: string
        borderLine: string
        tilesBk: string
        mainContent: string
        selectColor: string
        headerBk: string
    }
}