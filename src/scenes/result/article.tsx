interface Props {
    title: string;
    category: string;
    author: string;
    description: string;
    onClick: (url: string) => void;
    url: string;
}

const Article = ({
    title,
    category,
    author,
    description,
    onClick,
    url,
}: Props) => {
    return (
        <div className="resultCard p-10 text-left w-[800px] bg-gray-20 rounded-xl mb-5">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-primary-500">{title}</h2>
            <p className="text-xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-gray-500">Category: {category}</p>
            <p className="text-xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-gray-500">Author: {author}</p>
            <p className="text-xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight text-gray-500">{description}</p>
            <button
                className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white no-underline text-white border-none"
                onClick={() => {
                    onClick(url);
                }}
            >
                Read More
            </button>
        </div>
    );
};

export default Article;