import styles from '../../styles/Login.module.scss'
import React, {useEffect} from "react"


export function Form() {

    const [form, setForm] = React.useState({
        amount: "",
        meter: "",
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
                                First, enter your meter Number followed by electricity amount.
                            </div>
                            <div className={styles.subtitle}>
                                refer to that number written on your cash power.
                            </div>
                            <div><input placeholder="METER NUMBER eg: 005454" onChange={handleFormChange("meter")}
                                        className={styles.input} type="text"/></div>
                            <div><input placeholder="AMOUNT OF MONEY eg: 1000 RWF" onChange={handleFormChange("amount")}
                                        className={styles.input} type="text"/></div>


                            <button className={styles.button} onClick={() => request()}>
                                Request
                            </button>
                        
                        </div>
                    </div>
                   
                </div>
            </section>
        </div>
    )
}

export default Form