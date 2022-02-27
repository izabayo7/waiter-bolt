import Head from "next/head";
import Link from "next/link";
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

            <div className='container-fluid'>

                <div className='row'>

                    <div className={'col-5 ' + styles.bgLeft}>
                        <img src={icon.src} alt="" />
                        Waiter bolt
                        <div className='mt-5'>
                            <p className='h3'>Lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                        <div>
                            <p className={styles.minParText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nibh elit..</p>
                        </div>
                        <div className='mt-5'>
                            <button className={"btn px-4 py-2 text-white " + styles.getStartedButton}>Get Started</button>
                        </div>
                        <div />
                    </div>
                    <div className='col-7'>

                        <div className='float-right mt-4'>
                            <span className='mr-3'> Signin</span>
                            <Link href="/order" className={'btn px-4 py-2 text-white ' + styles.getStartedButton}>Order Now</Link>
                        </div>

                        <div className='mt-4'>
                            <img src='background.png' />
                        </div>
                        <div />
                    </div>
                </div>
            </div>

        </Fragment>

    )
}

export default Page
