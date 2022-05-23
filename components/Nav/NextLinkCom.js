import React from 'react'
import { useRouter } from "next/router"
import { NavLinkAnchor, Revealed } from "../StyledComponents/NavComponents"
import Link from 'next/link'

export function BaseLink({ href, children }) {
    const child = React.Children.only(children)
    const router = useRouter()

    return (
        <Link href={href}>
            {React.cloneElement(child, {
                "aria-current": router.pathname === href ? "page" : null
            })}
        </Link>
    )
}
export default function NavLink({ href, children }) {
    return (
        <NavLinkAnchor>
            <BaseLink href={href}>
                {children}
            </BaseLink>
        </NavLinkAnchor>)
}
export function RevealLink({ href, children }) {
    const child = React.Children.only(children)
    const router = useRouter()
    return (
        <Revealed>
            <BaseLink href={href}>
                {child}
            </BaseLink>
        </Revealed>)
}