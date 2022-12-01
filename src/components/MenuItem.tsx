export function MenuItem(props: { selected: boolean, href: string, text: string }) {    
    if (props.selected) {
        return (
            <div className="relative">
                <div className="w-2 h-1 bg-[#38BCDE] rounded-full absolute -bottom-2 left-1/2 -translate-x-1/2" />
                <a className="font-black">{props.text}</a>
            </div>
        )
    } else {
        return (
            <a className="hover:text-gray-4 transition-colors">{props.text}</a>
        )
    }
}