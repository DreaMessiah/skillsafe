import "../../styles/mainpageboard.scss"
import "../../styles/workpage.scss"

import DevelopersPage from "./DevelopersPage";

export default function ReferenceRouter({page}){
    return (
        <div className="workpage">
            {page === 1 && <DevelopersPage />}
        </div>
    )
}
