import Link from "next/link";

const NewsPage = () => {
    return (
        <>
            <h1>News Page</h1>
            <ul>
                <li>
                    <Link href="/news/some-article">
                        Some Article
                    </Link>
                </li>
                <li>Some Article 2</li>
            </ul>
        </>

    );
}

export default NewsPage;