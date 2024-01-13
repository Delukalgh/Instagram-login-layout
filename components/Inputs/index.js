import styles from './Inputs.module.css'
export default function Inputs() {
    return(
        <>
            <input
                id="firstName"
                className={styles.firstNameInput}
                type="text"
                placeholder="Phone number, username, or email"
            />

            <input
                id="email"
                className={styles.emailInput}
                type="email"
                placeholder="Password"
            />
        
        
        
        </>
    )
}