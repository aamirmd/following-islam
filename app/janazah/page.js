import React from "react";
import styles from "./janazah.module.css";

const yearlyCost = 200;

const Janazah = () => {
    return (
        <div className="mt-2 mb-5">
            <div className="container d-flex justify-content-center">
                <figure className="text-center mt-3 mb-1 text-info">
                    <blockquote className="blockquote">
                        <p>
                            And do not say about those who are killed in the way
                            of Allāh, "They are dead." Rather, they are alive,
                            but you perceive [it] not.
                        </p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Quran 2:154 <cite>(Saheeh International)</cite>
                    </figcaption>
                </figure>
            </div>
            <section className="container mx-2 mt-4">
                In Islam, Janazah refers to the funeral rites performed for a
                deceased Muslim. These rites are carried out with great care,
                dignity, and compassion, as a way of honoring the person who has
                returned to their Creator. The process includes
                <ol>
                    <li>Washing and shrouding the body</li>
                    <li>Offering Salat al-Janazah (funeral prayer)</li>
                    <li>
                        Burying the deceased in accordance with Islamic
                        tradition
                    </li>
                </ol>
                Our service is dedicated to helping families fulfill these
                important obligations with sincerity and respect, ensuring the
                final rites are performed according to the Sunnah.
            </section>
            <div className="container d-flex justify-content-center">
                <figure className="text-center mt-3 mb-1 text-info w-50">
                    <blockquote className="blockquote">
                        <p>
                            The Prophet Muhammad (ﷺ) said: “Whoever attends the
                            Janazah until the prayer is offered for it, then he
                            will have one Qirat (of reward), and whoever attends
                            until it is buried, he will have two Qirats.” It was
                            asked, “What are two Qirats?” He (ﷺ) said: “Like two
                            great mountains.”
                        </p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        <cite>[Sahih al-Bukhari & Sahih Muslim]</cite>
                    </figcaption>
                </figure>
            </div>
            <section className="container mx-2 mt-4">
                Our service costs ${yearlyCost} per person per year. Here is how
                it works:
                <ol>
                    <li>Sign up with information of the individual</li>
                    <li>Pledge to pay ${yearlyCost} per year</li>
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
