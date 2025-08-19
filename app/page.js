import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <div>
            <div>Welcome to followingislam.org</div>
            <div>
                We offer a variety of services such as:
                <ul>
                    <li>Janazah</li>
                    <li>Little Muslim</li>
                    <li>Riba & Debt</li>
                    <li>Looking for a job</li>
                    <li>Looking for an employee</li>
                    <li>Tailoring & Clothing</li>
                </ul>
            </div>
            <img src="https://home.csulb.edu/~cwallis/100/worldreligions/Mecca.jpg"></img>
        </div>
    );
}
