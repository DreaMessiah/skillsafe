import "../../styles/mainpageboard.scss"
import "../../styles/workpage.scss"

import CreateSkillPage from "./CreateSkillPage";

export default function CreateRouter({page}){
    return (
        <div className="workpage">
            {page === 1 && <CreateSkillPage />}
        </div>
    )
}
