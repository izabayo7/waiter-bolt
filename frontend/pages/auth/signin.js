// import RouteService from "../services/auth/routing"
import Link from "next/link";
import React from "react";
import icon from '../../public/icon.svg';
import globalStyles from "../../styles/global-colors.module.css";
import styles from '../../styles/Signin.module.scss';
import AuthService  from "../../services/AuthService";
import { useRouter } from "next/router";


export function Login() {

    const [form, setForm] = React.useState({
        email: "",
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

     const router = useRouter();
    const Login=()=>{
        AuthService.login(form)
        .then((res)=>{
            AuthService.setToken(res.data.token);
            router.push("/dashboard")
            // console.log(res.data)
        }).catch(e=>console.log(e))
    }


    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-5 pl-5 text-center'>
                    <img src={icon.src} alt="" />
                    <span> Waiter Bolt</span>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-7 mb-2'>
                    <section className={`${styles.sectionOne} container shadow-lg pt-5 pb-5 `}>
                        <div className='row justify-content-center'>
                            <div className='col-6 text-center'>
                                <div>
                                    <p className={'h5 ' + globalStyles.globalTextColor}>Welcome Back</p>
                                    <p className={styles.intr}>Enter your credentials to access your account.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-10 text-center">
                                <div><input placeholder="Enter your email" onChange={handleFormChange("email")}
                                    className={styles.input} type="text" /></div>
                                <div><input placeholder="Enter your Password" onChange={handleFormChange("password")}
                                    className={styles.input} type="password" /></div>


                                <button className={styles.button + " " + globalStyles.globalBackColor} onClick={() => Login()}>{loading ? (
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
                <div className='col-5 ml-5 pb-2 text-center'>
                    <span className={styles.intr}>Don't have an account ? </span><Link href="/auth/signup" className={"cursor-pointer " + globalStyles.globalTextColor + " " + styles.bottomLink} >Sign up</Link>
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
