import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/globals.css'
import "../styles/loading.css";
import 'react-clock/dist/Clock.css';
import 'react-time-picker/dist/TimePicker.css';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Head from "next/head";
import Router from 'next/router';

import 'react-clock/dist/Clock.css';

NProgress.configure({showSpinner: false});
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


if (typeof window !== "undefined") {
    require('jquery');
    require('popper.js');
    require('bootstrap');
}





function MyApp({Component, pageProps}) {

    return (
            <div>
         <Component {...pageProps} />

            </div>
    )

}

export default MyApp;


