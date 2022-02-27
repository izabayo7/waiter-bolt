import styles from '../../styles/Dashboard.module.scss'
import React, {useEffect} from "react"
import {useRouter} from 'next/router';
import icon from '../../public/icon.svg'
import logout from '../../public/logout.svg'
import arrow from '../../public/arrow.svg'
import reply from '../../public/reply.svg'
import send from '../../public/send.svg'
import deleteIcon from '../../public/delete.svg'


export function Page() {

    const [form, setForm] = React.useState({
        amount: "",
        meter: "",
    });

    const handleFormChange = (property) => (event) => {
        setForm({...form, [property]: event.target.value});
    };

    const router = useRouter();

    const orders = [
        {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend vel ipsum proin. Et facilisi vitae metus, mattis et sed etiam et. Augue nibh urna, nunc faucibus quisque nibh. Nulla scelerisque convallis risus molestie sed. Proin sem suscipit nisl ultrices.',
            replied: false,
            isReplying: false
        },
        {
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend vel ipsum proin. Et facilisi vitae metus, mattis et sed etiam et. Augue nibh urna, nunc faucibus quisque nibh. Nulla scelerisque convallis risus molestie sed. Proin sem suscipit nisl ultrices.',
            replied: true,
            isReplying: false
        }
    ]

    const handleOrderClick = (property, index) => (event) => {
        if (property == "reply") {

            orders[index].isReplying = true
            console.log(orders[index])
        }
    };

    return (
        <div className='container-fluid'>

            <div className='row'>

                <div className={'col-12 d-flex ' + styles.navBar}>
                    <div>
                        <img src={icon.src} alt="" className={styles.image}/>
                        Waiter bolt
                    </div>
                    <div className={styles.logout}>
                        <img src={logout.src} alt=""/>
                        Logout
                    </div>
                </div>
                <div className={'col-12 text-center'}>
                    <div className={styles.title}>Hello Makuza !</div>
                    <div className={styles.subtitle}>Here are the orders from your clients</div>
                </div>
                <div className={'col-12 mb-4'}>
                    {
                        orders.map((item, index) =>
                            <div className={`row ${styles.order} ${item.replied ? styles.repliedOrder : ''}`}>
                                <div className={'d-flex col-md-11 ' + styles.orderContentContainer}>
                                    <div>
                                        <img src={arrow.src} alt=""/>
                                    </div>
                                    <div
                                        className={`${styles.orderContent} ${item.replied ? styles.orderContentReplied : ''}`}>
                                        {item.content}
                                    </div>
                                </div>
                                <div
                                    className={'col-md-1 d-flex ' + item.replied ? styles.repliedOrderActions : styles.orderActions}>
                                    {item.replied ? '' :
                                        <div><img src={reply.src} onClick={handleOrderClick('reply', index)}
                                                  className={styles.pointer} alt=""/></div>}
                                    <div><img src={deleteIcon.src} alt="" className={styles.pointer}/></div>
                                </div>
                                {item.isReplying ?<>
                                    <div className={'col-12 d-flex'}>
                                        <div className={'col-10'}><input placeholder="Enter your reply"
                                                                         className={styles.input} type="text"/></div>
                                        <div className={'ml-4'}>
                                            <img className={styles.pointer} src={send.src} alt=""/>
                                        </div>
                                    </div>
                                </> : ''}
                            </div>)
                    }
                    {/*<div  className={'row '+styles.order}>*/}
                    {/*    <div className={'d-flex col-md-11 ' + styles.orderContentContainer}>*/}
                    {/*        <div>*/}
                    {/*            <img src={arrow.src} alt="" />*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.orderContent}>*/}
                    {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend vel ipsum proin. Et facilisi vitae metus, mattis et sed etiam et. Augue nibh urna, nunc faucibus quisque nibh. Nulla scelerisque convallis risus molestie sed. Proin sem suscipit nisl ultrices.*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className={'col-md-1 d-flex '+styles.orderActions}>*/}
                    {/*        <div><img src={deleteIcon.src} alt="" /></div>*/}
                    {/*    </div>*/}
                    {/*    <div className={'col-12 d-flex'}>*/}
                    {/*        <div className={'col-10'}><input placeholder="Enter your reply"*/}
                    {/*                    className={styles.input} type="text" /></div>*/}
                    {/*        <div className={'ml-4'}>*/}
                    {/*            <img src={send.src} alt="" />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={'row '+styles.order}>*/}
                    {/*    <div className={'d-flex col-md-11 ' + styles.orderContentContainer}>*/}
                    {/*        <div>*/}
                    {/*            <img src={arrow.src} alt="" />*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.orderContent}>*/}
                    {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend vel ipsum proin. Et facilisi vitae metus, mattis et sed etiam et. Augue nibh urna, nunc faucibus quisque nibh. Nulla scelerisque convallis risus molestie sed. Proin sem suscipit nisl ultrices.*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className={'col-md-1 d-flex '+styles.orderActions}>*/}
                    {/*        <div><img src={reply.src} alt="" /></div>*/}
                    {/*        <div><img src={deleteIcon.src} alt="" /></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className={styles.order+' d-md-flex '+styles.repliedOrder}>*/}
                    {/*    <div className={'d-flex col-md-11 ' + styles.orderContentContainer}>*/}
                    {/*        <div>*/}
                    {/*            <img src={arrow.src} alt="" />*/}
                    {/*        </div>*/}
                    {/*        <div className={styles.orderContent + ' ' + styles.orderContentReplied}>*/}
                    {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend vel ipsum proin. Et facilisi vitae metus, mattis et sed etiam et. Augue nibh urna, nunc faucibus quisque nibh. Nulla scelerisque convallis risus molestie sed. Proin sem suscipit nisl ultrices.*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className={'col-md-1 d-flex '+styles.repliedOrderActions}>*/}
                    {/*        <div><img src={deleteIcon.src} alt="" /></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default Page