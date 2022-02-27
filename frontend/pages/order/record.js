import {APP_CONFIG} from "../../utils/app-config";
import axios from 'axios'
import recordIcon from "../../public/recordIcon.svg"
import sendIcon from "../../public/sendIcon.svg";
import icon from '../../public/icon.svg';
import cancelIcon from "../../public/cancelIcon.svg"
import loadingRecordingIcon from "../../public/loadingRecordingIcon.svg"
import styles from "../../styles/pages/record.module.css"
import {useEffect, useState} from "react";
import globalStyles from "../../styles/global-colors.module.css";
import useRecorder from "./useRecorder";

const Record = () => {
    const [recordStatus, setRecordStatus] = useState("NOT_RECORDED");

    let [isRecording, discardRecording,startRecording, stopRecording] = useRecorder();

    useEffect(() => {
        if (recordStatus == "RECORDED")
            startRecording();
        else if (recordStatus == "LOADING")
            stopRecording();
        else if (isRecording && recordStatus == "NOT_RECORDED")
            discardRecording()
    }, [recordStatus]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">
                    <img src={icon.src} alt=""/>
                    {APP_CONFIG.APP_NAME}
                </div>
            </div>
            <div className="row justify-content-center">
                <div className={"col-8 shadow-lg rounded-sm " + styles.recordDiv}>
                    <div className="float-right">
                        {recordStatus == "RECORDED" ?
                            <img src={cancelIcon.src} alt="cancel" className={styles.cancelIcon}
                                 onClick={() => setRecordStatus("NOT_RECORDED")}/> : recordStatus == "SENT" ? <button
                                className={"btn px-3 py-2 " + globalStyles.globalTextColor + " " + styles.newOrderBtn}
                                onClick={() => {
                                    setRecordStatus("NOT_RECORDED")
                                }}>New Order</button> : <></>}
                    </div>
                    <div className={"pl-5 " + styles.recordIcon}>

                        {recordStatus == "SENT" ?
                            <p className={"h5 mt-5 " + globalStyles.globalTextColor}>Your order will be ready in 10
                                minutes.</p> :
                            // <img
                            //     src={recordStatus == "NOT_RECORDED" ? recordIcon.src : recordStatus == "LOADING" ? loadingRecordingIcon.src : sendIcon.src}
                            //     alt="record" className="mt-5" onClick={() => {
                            //     setRecordStatus(recordStatus == "RECORDED" ? "LOADING" : recordStatus == "LOADING" ? "SENT" : "pl-5")
                            //     // if (recordStatus == "NOT_RECORDED")
                            //     //     startRecording();
                            //     // else if (recordStatus != "LOADING"){
                            //     //     stopRecording();
                            //     // }
                            // }}/>
                            <img
                                src={recordStatus == "NOT_RECORDED" ? recordIcon.src : recordStatus == "LOADING" ? loadingRecordingIcon.src : sendIcon.src}
                                alt="record" className="mt-5"
                                onClick={() => setRecordStatus(recordStatus == "RECORDED" ? "LOADING" : recordStatus == "LOADING" ? "SENT" : "RECORDED")}/>
                        }

                    </div>
                    <div className={styles.pressCommandDesc}>
                        <p className="ml-3">{" > "}
                            {recordStatus == "RECORDED" ? "Press the cancel button to discard the recording. or Press send button to send your recording." : recordStatus == "LOADING" ? "Order sent waiting for the response." :
                                "Press the record button to start recording."
                            }
                        </p>
                    </div>
                </div>
                {/* <div className="col-8">
                </div> */}
            </div>
        </div>
    )
}
export default Record;