import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

// import Seo from "../../components/seo";
import Layout from "../../components/Layout";

import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Seo from "../../components/Seo";
import NextImage from "../../components/Common/Image";

const Article = ({ article, categories }) => {

    const seo = {
        metaTitle: article.attributes.title,
        metaDescription: article.attributes.description,
        shareImage: article.attributes.image,
        article: true,
    };

    return (
        <Layout>
            <Seo seo={seo} />
            <div className="container">
                <article className="container mx-auto mb-32">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-center mt-20 mb-32 md:mb-40 mx-auto w-4/5">
                        <div className="relative w-full max-w-xl lg:max-w-md xl:max-w-xl -ml-4 sm:-ml-8 mt-24 lg:mt-0 lg:mr-24 xl:mr-28">
                            <div className="absolute inset-0 rounded-xl transform origin-bottom rotate-6 bg-gradient-primary"></div>
                            <figure>
                                <NextImage
                                    image={article.attributes?.image}
                                />
                            </figure>
                        </div>
                        <div className="flex-1 w-full">
                            <h1 className="leading-tight sm:leading-tight lg:leading-tight xl:leading-tight font-display font-bold mb-5 text-4xl sm:text-5xl lg:text-4xl xl:text-5xl">
                                {article.attributes?.title}
                            </h1>
                            <div className="flex items-center flex-wrap -m-2">
                                <div className="flex items-center text-gray-500 uppercase text-xs tracking-widest m-2" title="December 3rd, 2021">
                                    <svg className="mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    <div className="mt-0.5">
                                        7 months ago
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-500 uppercase text-xs tracking-widest m-2" title="">
                                    <svg className="mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <div className="mt-0.5">
                                        746 views
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="prose sm:prose-large xl:prose-xlarge text-xl max-w-prose leading-10 w-full max-w-content mx-auto">
                        <div className="container">
                            {article.attributes.content}
                        </div>
                    </div>
                </article>
            </div>
        </Layout>
    );
};

export async function getStaticPaths() {
    const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

    return {
        paths: articlesRes.data.map((article) => ({
            params: {
                slug: article.attributes.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const articlesRes = await fetchAPI("/articles", {
        filters: {
            slug: params.slug,
        },
        populate: ["image", "category", "author.picture"],
    });
    const categoriesRes = await fetchAPI("/categories");

    return {
        props: { article: articlesRes.data[0], categories: categoriesRes },
        revalidate: 1,
    };
}

export default Article;