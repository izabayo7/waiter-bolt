import Link from "next/link";
// import RouteService from "../services/auth/routing"
import React from "react";
import icon from '../../public/icon.svg';
import globalStyles from "../../styles/global-colors.module.css";
import styles from '../../styles/Signin.module.scss';
import UserService from "../../services/UserService";
import { useRouter } from "next/router";


export function Login() {

    const [form, setForm] = React.useState({
        name: "",
        email:"",
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
        UserService.create(form)
        .then((res)=>{
            router.push("/auth/signin")
            // console.log(res.data)
        }).catch(e=>console.log(e))
    }

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
                                    <p className={'h5 ' + globalStyles.globalTextColor}>Welcome </p>
                                    <p className={styles.intr}>Create account to start receiving orders instantly.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-10 text-center">
                                <div><input placeholder="Enter your names" onChange={handleFormChange("name")}
                                    className={styles.input} type="text" /></div>
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
                <div className='col-5 ml-5 pb-3'>
                    <span className={styles.intr}>Already have an account ? </span><Link href="/auth/signin" className={"cursor-pointer " + globalStyles.globalTextColor + " " + styles.bottomLink} >Signin</Link>
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
