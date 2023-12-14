"use client";

import styles from "./about.module.css";
import { skills } from "../../app/constants";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";
import { FaLink } from "react-icons/fa6";

const json = {
    name: "Omid Obeidzadeh",
    age: 25,
    email: "omidobeidzadeh@gmail.com",
    phone: "09100140535",
    website: "hopeo2.github.io",
    location: {
        address: "Babai highway, Alborz town (Shahparian), block 9, unit 54",
        city: "Tehran",
    },
};

const page = () => {
    return (
        <>
            <div className={styles.myabout} dir="rtl">
                <h1>درباره من</h1>
                <p>
                    توسعه دهنده نرم افزارهای تحت وب
                </p>
            </div>
            <div className={styles.about}>
                <pre>{JSON.stringify(json, null, 2)}</pre>
            </div>
            <div className={styles.progressbar}>
                <div style={{ marginBottom: "5px" }}>
                    <ProgressBar
                        bgColor="#0571F1"
                        height="30px"
                        completed={85}
                        customLabel={
                            <Image
                                src={skills[3].imageUrl}
                                width={40}
                                height={40}
                            />
                        }
                    />
                </div>
                <div style={{ marginBottom: "5px" }}>
                    <ProgressBar
                        completed={80}
                        customLabel={
                            <Image
                                src={skills[0].imageUrl}
                                width={40}
                                height={40}
                            />
                        }
                        height="30px"
                    />
                </div>
                <div style={{ marginBottom: "5px" }}>
                    <ProgressBar
                        bgColor="#009452"
                        completed={70}
                        customLabel={
                            <Image
                                src={skills[4].imageUrl}
                                width={40}
                                height={40}
                            />
                        }
                        height="30px"
                    />
                </div>
                <div style={{ marginBottom: "5px" }}>
                    <ProgressBar
                        bgColor="red"
                        completed={62}
                        customLabel={
                            <Image
                                src={skills[6].imageUrl}
                                width={40}
                                height={40}
                            />
                        }
                        height="30px"
                    />
                </div>
                <div style={{ marginBottom: "5px" }}>
                    <ProgressBar
                        bgColor="#FEE101"
                        completed={58}
                        customLabel={
                            <Image
                                src={skills[7].imageUrl}
                                width={40}
                                height={40}
                            />
                        }
                        height="30px"
                    />
                </div>
                <div style={{ marginBottom: "5px" }}>
                    <ProgressBar
                        bgColor="black"
                        completed={62}
                        customLabel={
                            <Image
                                src={skills[8].imageUrl}
                                width={40}
                                height={40}
                            />
                        }
                        height="30px"
                    />
                </div>
            </div>
            <div className={styles.certi}>
                <h1 style={{ fontSize: "30px", padding: "20px" }}>
                    گواهی های من
                </h1>
                <div className={styles.certipic}>
                    <div>
                        <h1 style={{ padding: "5px" }}>
                            <Image
                                src="/assets/images/quera-logimage.png"
                                width={100}
                                height={35}
                            />
                        </h1>
                        <div>
                            <Image
                                src="/assets/images/5e7b6c3bd4074bbc80d8d8ff88991651.jpg"
                                width={400}
                                height={35}
                            />
                            <a
                                style={{
                                    textDecoration: "underline",
                                    padding: "20px",
                                    display: "flex",
                                }}
                                href="https://quera.org/media/public/quera_certificate/5e7b6c3bd4074bbc80d8d8ff88991651.jpg"
                                target="_blank"
                            >
                                <div
                                    style={{
                                        fontSize: "25px",
                                        paddingLeft: "5px",
                                    }}
                                >
                                    <FaLink width={50} height={50} />
                                </div>
                                آموزش طراحی وب (Front-End)
                            </a>
                            <div>
                                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                    quera#
                                </span>
                                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                    front#
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 style={{ padding: "5px" }}>
                            <Image
                                src="/assets/images/Screenshot from 2023-12-03 06-08-17.png"
                                width={200}
                                height={75}
                            />
                        </h1>
                        <div>
                            <Image
                                src="/assets/images/fromdesign.png"
                                width={400}
                                height={35}
                                className="p-2"
                            />
                            <a
                                style={{
                                    textDecoration: "underline",
                                    padding: "10px",
                                    display: "flex",
                                }}
                                href="https://www.freecodecamp.org/certification/hopeo2/responsive-web-design"
                                target="_blank"
                            >
                                <div
                                    style={{
                                        fontSize: "25px",
                                        paddingLeft: "5px",
                                    }}
                                >
                                    <FaLink width={50} height={50} />
                                </div>
                                Responsive Web Design
                            </a>
                            <div>
                                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                    design#
                                </span>
                                <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                                    responsive#
                                </span>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/assets/images/fromjs.png"
                                width={400}
                                height={35}
                                className="p-2"
                            />
                            <a
                                style={{
                                    textDecoration: "underline",
                                    padding: "10px",
                                    display: "flex",
                                }}
                                href="https://www.freecodecamp.org/certification/hopeo2/javascript-algorithms-and-data-structures"
                                target="_blank"
                            >
                                <div
                                    style={{
                                        fontSize: "25px",
                                        paddingLeft: "5px",
                                    }}
                                >
                                    <FaLink width={50} height={50} />
                                </div>
                                JavaScript Algorithms and Data Structures
                            </a>
                            <div>
                                <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                                    javascript#
                                </span>
                                <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                                    npm#
                                </span>
                                <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                                    algorithms#
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
