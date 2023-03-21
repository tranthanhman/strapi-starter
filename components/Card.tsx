import Link from 'next/link'
import React from 'react'
import NextImage from './Common/Image'

const Card = ({ article }) => {
    return (
        <Link href={`/article/${article.attributes.slug}`} className='group block'  >
            <div className='p-3'>
                <div className='flex items-center'>
                    <div className="flex-shrink-0 hidden md:block w-48 lg:w-52">
                        <div className="aspect-auto">
                            <NextImage
                                image={article.attributes.image}
                            />
                        </div>
                    </div>
                    <div className='flex-1 mx-6 md:mx-8 my-8 overflow-hidden'>
                        <h2 className='mb-6 pb-2 text-2xl font-bold truncate text-black'>
                            {article.attributes.title}
                        </h2>
                        <div>
                            <p className="text-lg lg:text-base line-clamp-3 lg:line-clamp-2 leading-4" title="">
                                {article.attributes.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card