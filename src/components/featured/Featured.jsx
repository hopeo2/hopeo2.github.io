import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { skills } from "../../app/constants";

const Featured = () => {
    return (
        <div className={styles.container}>
            <section className="max-container">
                <div className="flex justify-center items-center">
                    <Image
                        src="/assets/images/photo-me.png"
                        alt="lama blog"
                        width={150}
                        height={150}
                    />
                </div>
                <h1 className="head-text">سلام ..</h1>

                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>hopeo2</p>
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
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img
                                class="rounded-t-lg"
                                src="/assets/images/movie-hope.png"
                                alt=""
                            />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Movie react-19
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                این پروژه با استفاده از تکنولوژی ری اکت ساخته
                                شده{" "}
                            </p>
                            <a
                                href="https://movie-react19.vercel.app/"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                دیدن آنلاین
                                <svg
                                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                            <div class="px-6 pt-4 pb-2">
                                <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                                    javascript#
                                </span>
                                <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                                    react-19#
                                </span>
                                <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                                    fetch#
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img
                                class="rounded-t-lg"
                                src="/assets/images/image-leili-pic.png"
                                alt=""
                            />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Leili Khorsand
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                این پروژه ریدایرکت شده
                            </p>
                            <a
                                href="https://leilikhorsand.com"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                دیدن آنلاین
                                <svg
                                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
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
                        </div>
                    </div>

                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img
                                class="rounded-t-lg"
                                src="/assets/images/githubfetch.png"
                                alt=""
                            />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    github api
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                این پروژه با استفاده از تکنولوژی ری اکت ساخته
                                شده
                            </p>
                            <a
                                href="https://github-api-app-zeta.vercel.app/"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                دیدن آنلاین
                                <svg
                                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
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
                        </div>
                    </div>
                </div>
                <div className={styles.projectss}>
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img
                                class="rounded-t-lg"
                                src="/assets/images/xora-ex.png"
                                alt=""
                            />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Xora Website Example
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                این پروژه با استفاده از تکنولوژی ری اکت ساخته
                                شده
                            </p>
                            <a
                                href="https://xora-website-react.vercel.app/"
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                دیدن آنلاین
                                <svg
                                    class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
