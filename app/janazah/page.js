import React from "react";
import styles from "./janazah.module.css";

const Janazah = () => {
    return (
        <div>
            <section className="container mx-2 my-1">
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

            <div className="container mx-2 my-2">
                To sign up, please fill out the form below.
            </div>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label htmlFor="janazahName" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control col-sm-1"
                            id="janazahName"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="janazahEmail" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="janazahEmail"
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="janazahPhoneNumber"
                            className="form-label"
                        >
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            id="janazahPhoneNumber"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Janazah;
