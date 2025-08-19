import Me from "@/assets/mebw.jpg"
import { colorClassType } from "@/types/ColorSchemeTypes"

export const colorClasses: colorClassType = {
  light: {
    img: Me,
    textColor: "text-black",
    textColorLine: "text-light-line",
    borderLine: "border-light-line",
    headerBk: "bg-header-bk-light",
    tilesBk: "bg-light-tiles",
    gradientBK: "bg-light-gradient",
    mainContent: "bg-light-content",
    selectColor: "bg-white",
    bgBack: "bg-back-light"
  },
  solar: {
    img: Me,
    textColor: "text-black",
    textColorLine: "text-solar-line",
    gradientBK: "bg-solar-gradient",
    borderLine: "border-solar-line",
    headerBk: "bg-header-bk-solar",
    tilesBk: "bg-solar-tiles",
    mainContent: "bg-solar-content",
    selectColor: "bg-amber-200",
    bgBack: "bg-back-solar"
  },
  normal: {
    img: Me,
    textColor: "text-white",
    textColorLine: "text-normal-line",
    gradientBK: "bg-normal-gradient",
    borderLine: "border-normal-line",
    headerBk: "bg-header-bk-normal",
    tilesBk: "bg-normal-tiles",
    mainContent: "bg-normal-content",
    selectColor: "bg-sky-700",
    bgBack: "bg-back-normal"
  },
  dark: {
    img: Me,
    textColor: "text-white",
    textColorLine: "text-dark-line",
    gradientBK: "bg-dark-gradient",
    borderLine: "border-dark-line",
    headerBk: "bg-header-bk-dark",
    tilesBk: "bg-dark-tiles",
    mainContent: "bg-dark-content",
    selectColor: "bg-black",
    bgBack: "bg-back-dark"
  },
}