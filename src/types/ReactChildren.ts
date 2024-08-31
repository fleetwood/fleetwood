export type ReactNodeContent = React.ReactNode | React.ReactNode[] | string

export type ChildContentOptional = {
    children?: ReactNodeContent
}

export type ChildContent = {
    children: ReactNodeContent
}