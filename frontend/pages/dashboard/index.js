import Head from "next/head";
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from "react";
import arrow from '../../public/arrow.svg';
import deleteIcon from '../../public/delete.svg';
import icon from '../../public/icon.svg';
import logout from '../../public/logout.svg';
import reply from '../../public/reply.svg';
import styles from '../../styles/Dashboard.module.scss';
import { useSelector } from "react-redux";
import RequestService from "../../services/RequestService"
import inputIcon from "../../public/inputIcon.svg"

const Reply = () => {
    return (
        <div>
            <input placeholder="Write your reply"
                className={styles.input} type="password" />

            <img src={inputIcon.src} alt="reply icon" />
        </div>
    )
}
export function Page() {

    const [form, setForm] = React.useState({
        amount: "",
        meter: "",
    });


    const router = useRouter();

    const [requests, setRequests] = useState([])
    const handleSetRequests = () => {

    }
    useEffect(async () => {
        try {
            const res = await RequestService.getAll();
            setRequests(res.data.data);
        } catch { e => console.log(e) }
    }, [])

    const [reply, setReply] = useState(false);

    return (
        <Fragment>

            <Head>
                <title>waiterbolt</title>
            </Head>

            <div className='container-fluid'>

                <div className='row'>

                    <div className={'col-12 d-flex ' + styles.navBar}>
                        <div>
                            <img src={icon.src} alt="" className={styles.image} />
                            Waiter bolt
                        </div>
                        <div className={styles.logout}>
                            <img src={logout.src} alt="" />
                            Logout
                        </div>
                    </div>
                    <div className={'col-12 text-center'}>
                        <div className={styles.title}>Hello Makuza !</div>
                        <div className={styles.subtitle}>Here are the orders from your clients</div>
                    </div>
                    <div className={'col-12 mb-4'}>
                        {
                            [0, 1, 2, 3, 4].map((item) => <div className={'d-md-flex ' + styles.order} key={item}>
                                <div className={'d-flex col-md-11 ' + styles.orderContentContainer}>
                                    <div>
                                        <img src={arrow.src} alt="" onClick={() => setReply(true)} />
                                    </div>
                                    <div className={styles.orderContent}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend vel ipsum proin. Et facilisi vitae metus, mattis et sed etiam et. Augue nibh urna, nunc faucibus quisque nibh. Nulla scelerisque convallis risus molestie sed. Proin sem suscipit nisl ultrices.
                                    </div>
                                </div>
                                <div className={'col-md-1 d-flex ' + styles.orderActions}>
                                    <div><img src={reply.src} alt="" /></div>
                                    <div><img src={deleteIcon.src} alt="" /></div>
                                </div>
                              
                            </div>)
                        }
                        {/*                        
                        <div className={styles.order + ' d-md-flex ' + styles.repliedOrder}>
                            <div className={'d-flex col-md-11 ' + styles.orderContentContainer}>
                                <div>
                                    <img src={arrow.src} alt="" />
                                </div>
                                <div className={styles.orderContent + ' ' + styles.orderContentReplied}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend vel ipsum proin. Et facilisi vitae metus, mattis et sed etiam et. Augue nibh urna, nunc faucibus quisque nibh. Nulla scelerisque convallis risus molestie sed. Proin sem suscipit nisl ultrices.
                                </div>
                            </div>
                            <div className={'col-md-1 d-flex ' + styles.repliedOrderActions}>
                                <div><img src={deleteIcon.src} alt="" /></div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default Page
