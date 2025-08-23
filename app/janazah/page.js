import React from "react";
import styles from "./janazah.module.css";

const Janazah = () => {
    return (
        <div>
            <section>
                We offer a janazah service for just $150 per person per year.
                Here is how it works:
                <ol>
                    <li>Sign up with information of the individual</li>
                    <li>Pledge to pay $150 per year</li>
                    <li>
                        Whenever our Janazah services are required, please give
                        us a call at (###) ###-####
                    </li>
                    <li>We will take care of the rest</li>
                </ol>
            </section>
            <div>To sign up, please fill out the form below.</div>
            <div>
                <label htmlFor="task" className={styles.textlabel}>
                    Name
                </label>
                <input type="text" id="task" name="task"></input>
            </div>
            <div>
                <label htmlFor="task" className={styles.textlabel}>
                    Address
                </label>
                <input type="text" id="task" name="task"></input>
            </div>
            <div>
                <label htmlFor="task" className={styles.textlabel}>
                    Contact No.
                </label>
                <input type="text" id="task" name="task"></input>
            </div>
            <div>
                <label htmlFor="task" className={styles.blue}>
                    Credit card Number
                </label>
                <input type="text" id="task" name="task"></input>
            </div>
            <div>
                <label htmlFor="task" className={styles.textlabel}>
                    Amount: $150
                </label>
                <input type="text" id="task" name="task"></input>
            </div>
            <button type="button">Pay Now</button>
        </div>
    );
};

// const styles = {
//     textlabel: {
//         margin: "10px",
//     },
// };

export default Janazah;
