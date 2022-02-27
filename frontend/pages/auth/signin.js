import styles from '../../styles/Signin.module.scss'
// import RouteService from "../services/auth/routing"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import globalStyles from "../../styles/global-colors.module.css";
import icon from '../../public/icon.svg'

import Router from "next/router"


export function Login() {

    const [form, setForm] = React.useState({
        login: "",
        password: "",
    });


    // const authUser = useSelector(state => state.authUser)

    // const dispatch = useDispatch();

    const [loading, setLoading] = React.useState(false);


    // useEffect(() => {
    //     if (authUser.category) {
    //         Router.push(getUserHref(authUser.category)).then()
    //     }
    // }, [authUser])



    const handleFormChange = (property) => (event) => {
        setForm({ ...form, [property]: event.target.value });
    };


    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-5 pl-5'>
                    <img src={icon.src} alt="" />
                    <span> Waiter Bolt</span>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-7 mb-2'>
                    <section className={`${styles.sectionOne} container shadow-lg pt-5 pb-5 `}>
                        <div className='row justify-content-center'>
                            <div className='col-5'>
                                <div>
                                    <p className={'h5 ' + globalStyles.globalTextColor}>Welcome Back</p>
                                    <p className={styles.intr}>Enter your credentials to access your account.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-10 text-center">
                                <div><input placeholder="Enter your email" onChange={handleFormChange("login")}
                                    className={styles.input} type="text" /></div>
                                <div><input placeholder="Enter your Password" onChange={handleFormChange("password")}
                                    className={styles.input} type="text" /></div>


                                <button className={styles.button + " " + globalStyles.globalBackColor} onClick={() => login()}>{loading ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={"/img/loader.gif"}
                                        width={10}
                                        height={10}
                                        alt={"Loading"}
                                        className={"loader"}
                                    />
                                ) : (
                                    "Continue"
                                )}</button>

                            </div>
                        </div>
                    </section>
                </div>
                <div className='col-5 ml-5 pb-2'>
                    <span className={styles.intr}>Don't have an account ? </span><span className={"cursor-pointer "+globalStyles.globalTextColor+ " "+styles.bottomLink} >Sign up</span>
                </div>
            </div>

        </div>
    )
}


export default function LoginPage() {
    return (
        <Login />
    )
}