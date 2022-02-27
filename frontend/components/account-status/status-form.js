import styles from '../../styles/Login.module.scss'
import React, {useEffect} from "react"


export function Form() {

    const [form, setForm] = React.useState({
        meterNumber: ""
    });

    const handleFormChange = (property) => (event) => {
        setForm({...form, [property]: event.target.value});
    };

    
    const request = () => {
         
    }

    return (
        <div>
            <section className={`${styles.sectionOne} container-fluid`}>
                <div className="row">
                    <div className="col-12 text-center">
                        <div className={styles.formContainer}>
                            <div className={styles.title}>
                                ENTER YOUR CASH POWER METER NUMBER
                            </div>
                         
                            <div><input placeholder=" 02145978 " onChange={handleFormChange("meterNumber")}
                                        className={styles.input} type="text"/></div>
                            <div></div>
                            <button className={styles.button} onClick={() => request()}>
                                CHECK REMAINING DAYS
                            </button>
                        
                        </div>
                    </div>
                   
                </div>
            </section>
        </div>
    )
}

export default Form