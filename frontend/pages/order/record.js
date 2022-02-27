import { APP_CONFIG } from "../../utils/app-config";
import recordIcon from "../../public/recordIcon.svg"
import icon from '../../public/icon.svg'
import styles from "../../styles/pages/record.module.css"
const Record = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">
                    <img src={icon.src} alt="" />
                    {APP_CONFIG.APP_NAME}
                </div>
            </div>
            <div className="row justify-content-center">
                <div className={"col-8 shadow-lg rounded-sm " + styles.recordDiv}>
                    <div className={"pl-5 "+styles.recordIcon}>
                        <img src={recordIcon.src} alt="record" className="mt-5" />
                    </div>
                    <div className={styles.pressCommandDesc}>
                        <p className="ml-3">{" > "}press the record button to start recording.</p>
                    </div>
                </div>
                {/* <div className="col-8">
                </div> */}
            </div>
        </div>
    )
}
export default Record;