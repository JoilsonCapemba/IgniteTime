import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout(){
    return(
        <>
            <h1>Header</h1>
            <Outlet/>
        </>
    )
}