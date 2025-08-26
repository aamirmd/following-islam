import styles from "./page.module.css";

export default function Home() {
    return (
        <div className="container-fluid mx-2 my-1 text-center">
            <div className="container d-flex justify-content-center my-1">
                <img
                    className="w-50"
                    alt="Basmala - (image credit to vecteezy)"
                    src="https://static.vecteezy.com/system/resources/previews/025/345/106/non_2x/bismillah-in-the-name-of-allah-that-occurs-at-the-very-start-of-the-qur-an-one-of-the-most-important-phrases-in-islam-and-is-used-by-muslims-people-before-starting-pray-and-good-deeds-free-vector.jpg"
                ></img>
            </div>
            <div className="my-1 h4">Welcome to followingislam.org</div>
            <div className="my-2">
                We plan to offer a variety of services such as:
                <div className="d-flex justify-content-center">
                    <ul className="list-group w-25">
                        <li className="list-group-item">Janazah</li>
                        <li className="list-group-item">Little Muslim</li>
                        <li className="list-group-item">Riba & Debt</li>
                        <li className="list-group-item">Looking for a job</li>
                        <li className="list-group-item">
                            Tailoring & Clothing
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container d-flex justify-content-center my-1">
                <img
                    className="w-50"
                    src="https://home.csulb.edu/~cwallis/100/worldreligions/Mecca.jpg"
                ></img>
            </div>
        </div>
    );
}
