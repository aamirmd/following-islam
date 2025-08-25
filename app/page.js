import styles from "./page.module.css";

export default function Home() {
    return (
        <div className="container-fluid mx-2 my-1">
            <div className="my-2">Welcome to followingislam.org</div>
            <div className="my-2">
                We plan to offer a variety of services such as:
                <ul>
                    <li>Janazah</li>
                    <li>Little Muslim</li>
                    <li>Riba & Debt</li>
                    <li>Looking for a job</li>
                    <li>Looking for an employee</li>
                    <li>Tailoring & Clothing</li>
                </ul>
            </div>
            <div className="container d-flex justify-content-center">
                <img
                    className="w-50"
                    src="https://home.csulb.edu/~cwallis/100/worldreligions/Mecca.jpg"
                ></img>
            </div>
        </div>
    );
}
