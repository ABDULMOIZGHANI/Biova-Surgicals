import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import axios from 'axios';
import { API_NAME } from "../constant/index.js"
import { Helmet } from 'react-helmet';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios
            .get(`${API_NAME}/api/all_blogs`)
            .then((result) => {
                setBlogs(result.data);
            })
            .catch((err) => console.log("ERROR", err));
    }, []);

    return (
        <>
            <Helmet>
                <title>Medical Blog – Healthcare News & Surgical Innovations | Biova Surgicals</title>
                <meta
                    name="description"
                    content="Read the latest blogs from Biova Surgicals covering medical innovations, surgical instruments, healthcare trends, and tips for smarter procurement."
                />
                <meta
                    name="keywords"
                    content="Biova Surgicals blog, medical equipment news, surgical innovations, healthcare supply chain, biomedical blogs, procurement tips"
                />
                <link rel="canonical" href="https://biovasurgicals.com/blog" />

                {/* Open Graph */}
                <meta property="og:title" content="Medical Blog – Healthcare News & Surgical Innovations | Biova Surgicals" />
                <meta property="og:description" content="Explore expert insights and industry updates in medical supplies, surgical instruments, and healthcare technology." />
                <meta property="og:image" content="https://biovasurgicals.com/images/og-blog.jpg" /> {/* Replace with actual OG image URL */}
                <meta property="og:url" content="https://biovasurgicals.com/blog" />
                <meta property="og:type" content="website" />

            </Helmet>

            <section className="py-10 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex items-end justify-between">
                        <div className="flex-1 text-center lg:text-left">
                            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl playfair">Latest from blog</h2>
                            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0 lato">Discover the newest innovations in medical equipment and surgical instruments. Get expert insights on healthcare technology trends and best practices for medical supply procurement.</p>
                        </div>

                    </div>

                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                        {blogs.map((blog, i) => <BlogCard blog={blog} key={i} />)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
