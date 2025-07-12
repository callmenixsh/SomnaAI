import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Gallery = () => {
    const [dreams, setDreams] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/api/dreams")
            .then((res) => res.json())
            .then((data) => setDreams(data))
            .catch((err) => console.error("Failed to fetch dreams:", err));
    }, []);

    const fallbackDreams = [
        {
            id: 0,
            title: "Flight Through the City",
            description: "Navigating between skyscrapers with butterfly wings",
            image:
                "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/18618d18-0f0c-46ea-8713-3b5f11ff258e.png",
            alt: "Surreal dreamscape with floating islands and pink clouds, high detail digital painting",
            timeAgo: "3 days ago",
            tags: ["Liberation", "Adventure"],
        },
        {
            id: 1,
            title: "Endless Maze",
            description: "Searching for something but can't remember what",
            image:
                "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/768841a5-70e6-4298-a252-05b5da15bfd9.png",
            alt: "Underground maze with glowing vines and mysterious doors, dark fantasy style",
            timeAgo: "1 week ago",
            tags: ["Confusion", "Search"],
        },
        {
            id: 2,
            title: "Library of Secrets",
            description: "Books whispering forgotten knowledge",
            image:
                "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f9a46858-6916-4713-b23c-edbacd926dea.png",
            alt: "Ancient library with flying books and a wise owl guardian, magical realism illustration",
            timeAgo: "2 weeks ago",
            tags: ["Wisdom", "Mystery"],
        },
    ];

    const displayDreams = dreams.length > 0 ? dreams : fallbackDreams;

    return (
        <section className="mb-16 px-4">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Your Dream Journal</h2>
                <p className="text-lg text-gray-300">
                    Explore your subconscious patterns through your visualized dream
                    archive.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayDreams.map((dream, index) => (
                    <div
                        key={index}
                        className="bg-[#1f1b36] rounded-xl overflow-hidden shadow-lg dream-glow hover:shadow-xl transition cursor-pointer"
                        onClick={() =>
                            navigate("/dream", {
                                state: {
                                    dreamId: dream.id ?? index,
                                },
                            })
                        }
                        role="button"
                        tabIndex={0}
                        onKeyDown={e =>
                            (e.key === "Enter" || e.key === " ") &&
                            navigate("/dream", {
                                state: {
                                    dreamId: dream.id ?? index,
                                },
                            })
                        }
                    >
                        <div className="relative">
                            <img
                                src={dream.image}
                                alt={dream.alt}
                                className="w-full h-48 object-cover"
                            />
                            <span className="absolute top-2 right-2 bg-[#0f0e17] bg-opacity-70 px-2 py-1 rounded-full text-xs">
                                {dream.timeAgo}
                            </span>
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold mb-1">{dream.title}</h3>
                            <p className="text-sm text-gray-300 mb-3">{dream.description}</p>
                            <div className="flex flex-wrap gap-2 text-sm">
                                {dream.tags.map((tag, i) => (
                                    <span key={i} className="px-2 py-1 bg-[#2a2438] rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8">
                <Link
                    to="/gallery"
                    className="inline-block px-6 py-3 border border-indigo-500 rounded-full text-indigo-400 hover:bg-indigo-500 hover:text-white transition"
                >
                    View All Dreams
                </Link>
            </div>
        </section>
    );
};

export default Gallery;
