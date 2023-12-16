import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { skills } from "../../app/constants";

const Featured = () => {
    return (
        <div className={styles.container}>
            <section className="max-container">
                <h1 className="head-text">
                    سلام من
                    <span className="blue-gradient_text font-semibold drop-shadow">
                        {" "}
                        امید
                    </span>
                    &nbsp; هستم 👋
                </h1>

                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        یک توسعه دهنده در حال یادگیری ...{" "}
                        <a className={styles.touch} href="/contact">
                            با من در تماس باشید
                        </a>
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
                    پروژه های من
                </h1>
                <div className={styles.projectss}>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <Image
                            src="/assets/images/tw-scrap.png"
                            width={400}
                            height={400}
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                                Scraping Twitter
                            </div>
                            <p class="text-base">
                                این ابزار با استفاده از nodejs و nextjs ساخته
                                شده
                            </p>
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
                            <button className="bg-sky-500/100 p-1 rounded">
                                <a
                                    href="https://twitter-chi-mige.vercel.app/"
                                    target="_blank"
                                >
                                    دیدن آنلاین
                                </a>
                            </button>
                        </div>
                    </div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <Image
                            src="/assets/images/image-ai-gen-pic.png"
                            width={400}
                            height={400}
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                                Image Ai Generator
                            </div>
                            <p class="text-base">
                                در این پروژه از ری اکت برای سمت فرانت و از نود
                                جی اس و مونگو دی بی در سمت سرور استفاده شده
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                                javascript#
                            </span>
                            <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                                reactjs#
                            </span>
                            <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                                nodejs#
                            </span>
                        </div>
                        <div
                            dir="ltr"
                            style={{ fontSize: "20px", padding: "5px" }}
                        >
                            <button className="bg-sky-500/100 p-1 rounded">
                                <a
                                    href="https://ai-image-client-peach.vercel.app/"
                                    target="_blank"
                                >
                                    دیدن آنلاین
                                </a>
                            </button>
                        </div>
                    </div>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg">
                        <Image
                            src="/assets/images/image-leili-pic.png"
                            width={400}
                            height={400}
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">
                                Leili Khorsand
                            </div>
                            <p class="text-base">
                                این ویسایت با استفاده از سیستم مدیریت محتوای
                                وردپرس (wordpress) پیاده سازی شده
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
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
                            <button className="bg-sky-500/100 p-1 rounded">
                                <a
                                    href="https://leilikhorsand.com"
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
