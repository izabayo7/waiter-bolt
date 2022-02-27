import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import { useEffect } from "react";
import 'react-clock/dist/Clock.css';
import { Toaster } from "react-hot-toast";
import 'react-time-picker/dist/TimePicker.css';
import { createStore } from "redux";
import AuthService from '../services/AuthService';
import reducer from '../store/reducers';
// import '../styles/globals.css'
import "../styles/loading.css";
import { APP_CONFIG } from "../utils/app-config";


NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


if (typeof window !== "undefined") {
    require('jquery');
    require('popper.js');
    require('bootstrap');
}

let store = createStore(reducer);

if (typeof window !== "undefined") {


    store = createStore(
        reducer, /* preloadedState, */
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}


function AppMeta() {

    // console.log("here vin ",decode("KMHJ3815GJU487164"))
    useEffect(() => {
        setUser();
    })
    // const dispatch = useDispatch();

    const setUser = () => {
        if (AuthService.isLoggedIn()) {
            if (!AuthService.tokenExpired()) {
                const token = AuthService.getDecToken()
                // console.log(jwt(token))
                AuthService.getMe().then((res) => {
                    dispatch(setAuthUser(res.data.data));
                }).catch(e => console.log(e))
            }
        }
    }

    return (
        <div>
            <Head>
                <title>{APP_CONFIG.APP_NAME}</title>
            </Head>
        </div>
    );
}


function MyApp({ Component, pageProps }) {

    return (
        <div>
            <AppMeta />
            <Component {...pageProps} />
            <Toaster />
        </div>
    )

}

export default MyApp;
