import '@fontsource/montserrat/variable.css';

export function DescriptionItem(props: { title: string }) {
    let icon: string;
    switch (props.title) {
        case "Pesquisa":
            icon = "i-fa6-brands:searchengin";
            break;
        case "Ensino":
            icon = "i-fa6-solid:graduation-cap";
            break;
        case "Extensão":
            icon = "i-fa6-solid:network-wired";
            break;
        default:
            throw new Error("Título Inválido");
    }

    return (
        <div className="h-full rounded-xl w-full bg-[#040422] px-5 font-inter">
            <div className={icon + " text-[#38BCDE] text-4xl my-8"}></div>
            <div className="font-montserrat text-xl font-bold mb-8">{props.title}</div>
            <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget nisi facilisis, auctor dolor vitae, rutrum lacus. Sed congue rhoncus ex, non elementum dui tempus in. Maecenas malesuada magna ac finibus maximus.</div>
        </div>
    )
}