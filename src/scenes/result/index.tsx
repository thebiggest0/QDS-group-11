import Article from "./article";

type Props = {}

const result = (props: Props) => {

    const news = [
        {
            id: 1,
            title: "Rocket to the moon",
            category: "Science",
            author: "Bob",
            description: "Lorem1",
            url: "https://www.google.com/",
        },
        {
            id: 1,
            title: "Rocket to the sun",
            category: "Sports",
            author: "Alice",
            description: "Lorem2",
            url: "https://www.youtube.com/",
        },
    ];


    return (
        <section id="result" className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-500 leading-tight tracking-tight" >Results</h1>
            
            {
            news.map(item => (
                <div>
                    <Article
                        title={item.title}
                        category={item.category}
                        author={item.author}
                        description={item.description}
                        onClick={(url: string) => window.open(url, "_blank", "noopener,noreferrer")}
                        url={item.url}
                    ></Article>
                </div>
            ))
        }
        </section>
        )
}

export default result