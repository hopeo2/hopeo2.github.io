import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { skills } from "../../app/constants";

const Featured = () => {
    return (
        <div className={styles.container}>
            <section className="max-container">
                <div className="flex justify-center items-center">
                    <Image src="/assets/images/photo-me.png" alt="lama blog" width={150} height={150} />
                </div>
                <h1 className="head-text">
                    سلام ..
                </h1>

                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        hopeo2
                    </p>
                </div>

                <div className="py-10 flex flex-col">
                    <h3 className="subhead-text">توانایی ها</h3>

                    <div className="mt-16 flex flex-wrap gap-12">
                        {skills.map((skill) => (
                            <div
                                className="block-container w-20 h-20"
                                key={skill.name}
                            >
                                <div className="btn-back rounded-xl" />
                                <div className="btn-front rounded-xl flex justify-center items-center">
                                    <img
                                        src={skill.imageUrl}
                                        alt={skill.name}
                                        className="w-1/2 h-1/2 object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* <div className="py-16">
                <h3 className="subhead-text">Work Experience.</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        I've worked with all sorts of companies, leveling up my
                        skills and teaming up with smart people.
                    </p>
                </div>

            </div>

            <hr className="border-slate-200" /> */}
            </section>
            <div>
                <h1
                    style={{
                        fontSize: "30px",
                        padding: "20px",
                        marginBottom: "25px",
                    }}
                >
                    پروژه ها
                </h1>
                <div className={styles.projectss}>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <Image
                            src="/assets/images/tw-scrap.png"
                            width={400}
                            height={400}
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                Scraping Twitter
                            </div>
                            
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                                javascript#
                            </span>
                            <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                                nextjs#
                            </span>
                            <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                                fetch#
                            </span>
                        </div>
                        <div
                            dir="ltr"
                            style={{ fontSize: "20px", padding: "5px" }}
                        >
                            <button className="p-1 rounded">
                                <a
                                    href="https://twitter-chi-mige.vercel.app/"
                                    target="_blank"
                                >
                                    دیدن آنلاین
                                </a>
                            </button>
                        </div>
                    </div>
                    
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <Image
                            src="/assets/images/image-leili-pic.png"
                            width={400}
                            height={400}
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                Leili Khorsand
                            </div>
                            
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                                wordpress#
                            </span>
                            <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                                php#
                            </span>
                            <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                                blog#
                            </span>
                        </div>
                        <div
                            dir="ltr"
                            style={{ fontSize: "20px", padding: "5px" }}
                        >
                            <button className="p-1 rounded">
                                <a
                                    href="https://leilikhorsand.com"
                                    target="_blank"
                                >
                                    دیدن آنلاین
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        <Image
                            src="/assets/images/githubfetch.png"
                            width={400}
                            height={400}
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                github api
                            </div>
                            
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                                javascript#
                            </span>
                            <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                                api#
                            </span>
                            <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                                fetch#
                            </span>
                        </div>
                        <div
                            dir="ltr"
                            style={{ fontSize: "20px", padding: "5px" }}
                        >
                            <button className="p-1 rounded">
                                <a
                                    href="https://github-api-app-zeta.vercel.app/"
                                    target="_blank"
                                >
                                    دیدن آنلاین
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
