import "../../styles/mainpageboard.scss"
import "../../styles/workpage.scss"

import ListSkillsPage from "./ListSkillsPage";
import SkillReader from "./SkillReader";
import SkillCms from "./SkillCms";
export default function SkillsRouter({page}){
    return (
        <div className="workpage">
            {page === 1 && <ListSkillsPage />}
            {page === 2 && <SkillReader />}
            {page === 3 && <SkillCms />}
        </div>
    )
}
