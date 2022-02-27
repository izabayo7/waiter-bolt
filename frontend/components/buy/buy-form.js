import styles from '../../styles/Login.module.scss'
import React, {useEffect} from "react"


export function Form() {

    const [form, setForm] = React.useState({
        token: ""
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
                                ENTER THE BOUGHT TOKEN
                            </div>
                         
                            <div><input placeholder=" 02145978 " onChange={handleFormChange("token")}
                                        className={styles.input} type="text"/></div>
                            <div></div>
                            <button className={styles.button} onClick={() => request()}>
                                BUY NOW
                            </button>
                        
                        </div>
                    </div>
                   
                </div>
            </section>
        </div>
    )
}

export default Form