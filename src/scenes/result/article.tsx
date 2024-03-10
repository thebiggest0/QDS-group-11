import { encode } from "punycode";

interface Props {
    name: string;
    desc: string;
    icon: string;
    color: string;
    type: string;
    goal: string;
    start: Date;
    end: string;
}

const Article = ({
    name,
    type,
    icon,
    desc,
    start,
    end,
    goal
}: Props) => {
    return (
        <div className="resultCard p-10 text-left w-[800px] bg-gray-20 rounded-xl mb-5">
            <h2 className="leading-tight tracking-tight text-primary-500">{icon}{name}</h2>
            <p className="text-xl lg:text-6xl font-light leading-tight tracking-tight text-gray-500">Goal: {type} per {goal}</p>
            <p className="text-xl lg:text-6xl font-light leading-tight tracking-tight text-gray-500">{desc}</p>            
            <button
                className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white no-underline text-white border-none"
                // onClick={() => {
                //     onClick(url);
                // }}
            >
                Read More
            </button>
        </div>
    );
};

export default Article;