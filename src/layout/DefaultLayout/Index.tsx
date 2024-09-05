import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Index";
import { LayoutContainer } from "./style";

export function DefaultLayout(){
    return(
        <LayoutContainer>
            <Header />
            <Outlet/>
        </LayoutContainer>
    )
}