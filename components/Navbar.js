// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.list}>
                <li style={styles.item}>
                    <Link href="/">Home</Link>
                </li>
                <li style={styles.item}>
                    <Link href="/janazah">Janazah</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        backgroundColor: "#98c1ecff", // A nice blue shade
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
        position: "sticky",
        top: 0,
        zIndex: 1000,
    },
    list: {
        display: "flex",
        listStyle: "none",
        margin: 0,
        padding: 0,
        gap: "20px", // Gap between the items
    },
    item: {
        color: "#fff", // White text for contrast
        fontSize: "18px",
        fontWeight: "500",
        textTransform: "uppercase", // Uppercase text for a cleaner look
        transition: "all 0.3s ease", // Smooth transition for hover effects
    },
    // Hover styles for the links
    itemHover: {
        color: "#ffcc00", // Gold color for hover effect
        transform: "scale(1.05)", // Slightly enlarge the text on hover
    },
};

export default Navbar;
