import "../../styles/mainpageboard.scss"
import "../../styles/workpage.scss"

import DevelopersPage from "./DevelopersPage";
import ReferenceMenu from "./ReferenceMenu";
import AddDeveloper from "./AddDeveloper";
export default function ReferenceRouter({page}){
    return (
        <div className="workpage">
            {page === 1 && <DevelopersPage />}
            {page === 2 && <ReferenceMenu />}
            {page === 3 && <AddDeveloper />}
        </div>
    )
}
