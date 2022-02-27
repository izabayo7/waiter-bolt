import Head from "next/head";
import { useRouter } from 'next/router';
import React, { Fragment } from "react";
import icon from '../public/icon.svg';
import styles from '../styles/Index.module.scss';


export function Page() {

    const [form, setForm] = React.useState({
        amount: "",
        meter: "",
    });

    const handleFormChange = (property) => (event) => {
        setForm({ ...form, [property]: event.target.value });
    };

    const router = useRouter();


    return (
        <Fragment>

            <Head>
                <title>waiterbolt</title>
            </Head>

            <div style={{
                display: "flex",
            }}>
                <div>


                    <div className={'col-5 pl-0'}>
                        <div className={styles.bgLeft}></div>
                        <div className={styles.absolute}>
                            <img src={icon.src} alt="" />
                            Waiter bolt
                            <div className='mt-5 ml-md-5'>
                                <p className='h3'>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                            <div className={'ml-md-5'}>
                                <p className={styles.minParText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh elit..</p>
                            </div>
                            <div className='mt-5 ml-md-5'>
                                <button className={"btn px-4 py-2 text-white " + styles.getStartedButton} onClick={() => router.push("/auth/signin")}>Get Started</button>
                            </div>
                            <div />
                        </div>
                    </div>
                    <div className='col-7'>
                        <div className='float-right mt-4'>
                            <button onClick={()=>router.push("/auth/signin")} className={'btn px-4 py-2 text-white ' + styles.getStartedButton}>Signin</button>
                            <button className={"btn px-4 py-2 text-white ml-4 " + styles.getStartedButton} onClick={() => router.push("/order/record")}>Order Now</button>
                        </div>
                        <div className='mt-4'>
                            <img src='background.png' />
                        </div>
                        <div />
                    </div>

                    <div className={'col-5 ' + styles.bgLeft}>
                        <img src={icon.src} alt="" />
                        Waiter bolt
                        <div className='mt-5'>
                            <p className='h3'>Welcome to waiterbolt</p>
                        </div>
                        <div>
                            <p className={styles.minParText}>Place you order and let us know you need</p>
                        </div>
                        <div className='mt-5'>
                            <button className={"btn px-4 py-2 text-white " + styles.getStartedButton} onClick={() => router.push("/auth/signin")}>Get Started</button>
                        </div>
                        <div />
                    </div>

                </div>
            </div>

        </Fragment>

    )
}

export default Page
