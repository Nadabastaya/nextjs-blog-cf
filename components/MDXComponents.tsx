import Link, { LinkProps } from 'next/link'

const CustomLink = (props: React.ComponentProps<"a"> & LinkProps) =>    {
    const href = props.href
    const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"))

    if (isInternalLink) {
        return (
            <Link href={ href }>
                <a { ...props }/>
            </Link>
        )
    }

    return <a target='_blank' rel='noopener noreferrer' { ...props } />
}

const MDXComponents =   {
    a: CustomLink,
}

export default MDXComponents