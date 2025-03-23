import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_NAME } from "../constant/index.js";

const SingleBlog = () => {
    const { title } = useParams(); // Get title from URL
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${API_NAME}/api/all_blogs`)
            .then((result) => {
                setBlogs(result.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("ERROR", err);
                setLoading(false);
            });
    }, []);

    // Find the blog that matches the title from URL
    const blog = blogs.find(blog => blog.blog_title.toLowerCase() === title.toLowerCase());

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            {blog ? (
                <div className="p-6 bg-white shadow-lg rounded-lg">
                    <img
                        src={blog.blog_img}
                        alt={blog.blog_title}
                        className="w-full h-64 object-cover rounded-lg"
                    />
                    <h2 className="text-2xl font-bold mt-4">{blog.blog_title}</h2>
                    <span className="text-sm bg-[#02BBB6] text-white px-3 py-1 pb-1.5 block w-fit mt-[10px] rounded-full">
                        {blog.tag}
                    </span>
                    <p className="text-gray-600 mt-4">{blog.description}</p>
                    <p className="text-gray-700 mt-4">{blog.second_description}</p>
                    <p className="mt-4 text-gray-500 text-sm">
                        Published on: {new Date(blog.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                </div>
            ) : (
                <p className="text-center text-gray-500">No blog found for "{title}".</p>
            )}
        </div>
    );
};

export default SingleBlog;
