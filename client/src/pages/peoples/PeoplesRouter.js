import "../../styles/mainpageboard.scss"
import "../../styles/workpage.scss"

import ListPage from "./ListPage";
import AddUser from "./AddUser";

export default function PeoplesRouter({page = 1}){
    return (
        <div className="workpage">
            {page === 1 && <ListPage />}
            {page === 2 && <AddUser />}
        </div>
    )
}
