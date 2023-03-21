import Card from '../components/Card';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { fetchAPI } from '../lib/api';

export default function Home({ articles, categories, homepage }) {
  return (
    <>
      <Layout>
        <Seo seo={homepage.attributes.seo} />
        <div className='my-16 w-full max-w-4xl mx-auto'>
          <div className='mb-5 text-xl leading-10'>
            <div className='text-justify'>
              <p className="mb-4">Hi, I am <strong>Thouhedul Islam</strong>. I am a <strong>Laravel Developer</strong> with a passion for web development. I specialize in PHP, particularly Laravel, as well as Javascript, MySql, and other cutting-edge web technologies. </p>
              <p className="mb-4">During the day, I work for <a className="font-bold underline decoration-pink-600" href="https://www.gleif.org/en/">GLEIF</a>, where I apply my skills and experience to develop innovative web applications. At night, I enjoy contributing to the community and solving problems. You can often find me on <a className="font-bold underline decoration-pink-600" href="https://laracasts.com">Laracasts</a>, where I love to stay active and keep up-to-date with the latest trends in web development.</p>
              <p className="mb-4">I am excited about the potential of technology and its power to transform people's lives.</p>
            </div>
            <p className="py-8 text-gray-400 text-lg">
              <a href="mailto:tisuchi@gmail.com" className="pr-8 hover:text-sky-500 hover:underline">
                Email me
              </a>
              <a href="https://laracasts.com/@tisuchi" className="pr-8 hover:text-sky-500 hover:underline">
                Laracasts
              </a>
              <a href="https://www.facebook.com/laravelschool" className="pr-8 hover:text-sky-500 hover:underline">
                Facebook
              </a>
            </p>
          </div>
          <div className="flex items-center flex-wrap -m-2">
            <div className="flex items-center text-gray-500 uppercase text-xs tracking-widest m-2" title="">
              <svg className="mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
              </svg>
              <div className="mt-0.5">
                96 articles
              </div>
            </div>

            <div className="flex items-center text-gray-500 uppercase text-xs tracking-widest m-2" title="May 2nd, 2022">
              <svg className="mr-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <div className="mt-0.5">
                3 weeks ago
              </div>
            </div>
          </div>
        </div>
        <div className='w-full max-w-4xl mx-auto'>
          <div className='space-y-4'>
            {articles.map((article, i) => {
              return (
                <Card
                  article={article}
                  key={article.attributes.slug}
                />
              )
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}
