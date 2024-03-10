import Navbarre from "./navbarre";
import Layout from "./layout";
import PageHandler from "./page-handler";
import { useState } from "react";

function Dashboard() {
    const [page, setPage] = useState("home");

    return(
        <div>
            <Navbarre setPage={setPage}/>
            <Layout>
                <PageHandler page={page}/>
            </Layout>
        </div>
    );
}
export default Dashboard;