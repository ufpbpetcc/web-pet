export function MenuItem(props: { selected: boolean, href: string, text: string }) {
    return (
        <a className={props.selected ? "font-black" :
            "hover:text-gray-4 transition-colors"}>{props.text}</a>
    )
}