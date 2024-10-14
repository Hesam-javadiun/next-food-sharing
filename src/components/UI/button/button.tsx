import type { ReactNode, ComponentPropsWithoutRef, } from "react"

type ButtonHTMLProps = ComponentPropsWithoutRef<"button">

type AnchorHTMLProps = ComponentPropsWithoutRef<"a">

type ButtonProps = AnchorHTMLProps | ButtonHTMLProps

const Button = function(props: ButtonProps) {

}

export default Button