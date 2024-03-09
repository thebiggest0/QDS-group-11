import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/shared/types";

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const link = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage // treat this as a SelectedPage type;
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : "text-gray-500"}
            transition duration-500 hover:text-primary-300 no-underline
            `}
            href={`#${lowerCasePage}`}
            // change state of className to whatever we clicked on 
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

export default link