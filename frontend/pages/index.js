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


                    <div className='col-7'>
                        <div className='float-right mt-4'>
                            <span className='mr-3'> Signin</span>
                            <button onClick={() => router.push("/order/record")} className={'btn px-4 py-2 text-white ' + styles.getStartedButton}>Order Now</button>
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
