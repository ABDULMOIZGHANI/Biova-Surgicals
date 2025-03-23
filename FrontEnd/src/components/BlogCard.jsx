import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({ blog }) => {
    return (

        <div className="overflow-hidden bg-[#DEFDFC] rounded shadow">
            <div className="p-5">
                <div className="relative">
                    <Link to={`${blog.blog_title}`} title="" className="block aspect-w-4 aspect-h-3">
                        <img className="object-cover w-full h-full" src={blog.blog_img} alt="" />
                    </Link>

                    <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"> {blog.tag} </span>
                    </div>
                </div>

                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">
                    {new Date(blog.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </span>

                <p className="mt-5 text-2xl font-semibold">
                    <Link to={`${blog.blog_title}`} title="" className="text-black playfair">{blog.blog_title}</Link>
                </p>

                <p className="mt-4 text-base text-gray-600 lato">{blog.description}</p>

                <Link to={`${blog.blog_title}`} title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-[#02BBB6] hover:text-[#00605f] transition-all duration-200 border-b-2 border-transparent hover:border-[#00605f] focus:border-[#00605f]">
                    Continue Reading
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                </Link>
            </div>
        </div >
    )
}

export default BlogCard
