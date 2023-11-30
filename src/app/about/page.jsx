"use client";

import styles from "./about.module.css";
import { skills } from "../../app/constants";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";

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
                    سلام..امید عبیدزاده هستم جویای کارآموزی در حوزه برنامه نویسی
                    با سابقه حدودا یک سال کار در زمینه برنامه نویسی آشنا به زبان
                    نشانه گذاری html و css...آشنا با کتابخانه‌ها و فریمورک‌های
                    فرانت اند Javascript مثل reactjs و nextjs و همچنین
                    apiنویسی سمت سرور که با nodejs و express پیاده سازی
                    میشه...تجربه کار با دیتابیس های mysql و mongodb در زبان
                    جاوااسکریپت...آشنا با معماری mvc...تا حدودی کدنویسی شی
                    گرا..دارای سابقه کار با سیستم مدیریت محتوای وردپرس و تجربه
                    کار با فوتوشاپ(در حد تراکت)
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
        </>
    );
};

export default page;
