import "../../styles/mainpageboard.scss"
import "../../styles/workpage.scss"
import {Link} from "react-router-dom";
import Navigation from "../../components/nav/Navigation";

export default function ReferenceMenu(){
    return (
        <div className="workpage">
            <div className="workpage_left">
                <Navigation />
            </div>
            <div className="workpage_right">
                <div className="questboard">
                    <div className="questboard_title">
                        Что Вас интересует?
                    </div>
                    <div className="questboard_white">
                        <Link to={'/developers'} className="questboard_white_btn">Должности</Link>
                        <Link to={'/workers'} className="questboard_white_btn">РАБОТНИКИ</Link>
                        {/*<div className="questboard_white_btn">ОПРОС</div>*/}
                        {/*<div className="questboard_white_btn">ГЛАВНАЯ</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
