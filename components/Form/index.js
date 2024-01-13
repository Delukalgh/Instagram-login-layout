import styles from './Form.module.css'
import Buttons from '../Buttons'
import Inputs from '../Inputs'
import FacebookButton from '../FacebookButton'
import Footer from '../Footer'
export default function Form() {
    return(
        <>
            <div className={styles.formOuterContainer}>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <fieldset className={styles.fieldSet}>
                            <legend><img src="https://fontmeme.com/images/instagram-new-logo.png" alt="instagram" width="190px"></img></legend>
                            <Inputs/>
                            <Buttons/> 
                            <div className={styles.lineBreak}>
                                <hr width="100%" size="2" color="#e5e5e5"/><span className={styles.lineText}>OR</span><hr width="100%" size="2" color="#e5e5e5"/>
                            </div>
                            <FacebookButton/>
                            <p className={styles.forgotPassword}>Forgot Password?</p>
                        </fieldset>
                        
                        <fieldset className={styles.secondSet}>
                            <p className={styles.dontHave}>Don't have an account?<span className={styles.signUP}> Sign up</span></p>
                        </fieldset>
                        <p className={styles.get}>Get the app.</p>
                        <img className={styles.apps}src="./Images/Apps-images.png" alt="Apps"/>
                        
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}