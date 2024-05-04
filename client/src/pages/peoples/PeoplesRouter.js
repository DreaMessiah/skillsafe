import "../../styles/mainpageboard.scss"
import "../../styles/workpage.scss"

import ListPage from "./ListPage";

export default function PeoplesRouter({page}){
    return (
        <div className="workpage">
            {page === 1 && <ListPage />}
        </div>
    )
}
