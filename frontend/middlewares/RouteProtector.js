import {useEffect, useState} from "react";
import AuthService from "../services/AuthService";
import Router from "next/router";

export default function RouteProtector( { children, only } ) {
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        if (AuthService.isLoggedIn() && !AuthService.tokenExpired()) {
            setLoading(false)
        } else {
            await Router.push("/auth/signin")
        }
    }, [])

    if (loading) return <div/>

    return children
}