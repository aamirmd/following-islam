import React from "react";

const Hajj = () => {
    return (
        <div className="mt-2 mb-5">
            <section className="container mx-2 my-3">
                Hajj is one of the greatest pillars of Islam, a sacred journey
                of faith, patience, and devotion. Every Muslim dreams of
                standing before the Kaaba, seeking forgiveness and fulfilling
                this blessed obligation. Through the mercy of Allah (SWT), our
                initiative makes this dream possible for brothers and sisters in
                our community.
            </section>
            <section className="container mx-2 my-3">
                Every year, one blessed individual will be chosen at random from
                among Muslims across different masajid. This ensures fairness,
                with no preference or favouritism only a chance that Allah (SWT)
                grants to whomever Allah (SWT) wills. The fortunate person will
                be gifted the opportunity to perform Hajj, with all expenses
                covered by us.
            </section>
            <section className="container mx-2 my-3">
                Our mission is to give hope, create unity, and bring ease to
                Muslims in their path toward Allah (SWT). We encourage you to
                share this opportunity with others, so that more families may
                benefit from the facilities and blessings we strive to provide
                year after year.
            </section>
            <div className="container d-flex justify-content-center">
                <figure className="text-center mt-3 mb-1 text-info w-50">
                    <blockquote className="blockquote">
                        <p>
                            The Prophet Muhammad (ﷺ) said: “The reward for an
                            accepted Hajj is nothing but Paradise.”
                        </p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        <cite>[Sahih al-Bukhari & Sahih Muslim]</cite>
                    </figcaption>
                </figure>
            </div>
            <div className="container mx-2 my-2">
                If you are interested in this program, please fill out the form
                below with your information.
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

export default Hajj;
