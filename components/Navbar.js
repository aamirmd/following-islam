// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
    return (
        // <nav style={styles.navbar}>
        //     <ul style={styles.list}>
        //         <li style={styles.item}>
        //             <Link href="/">Home</Link>
        //         </li>
        //         <li style={styles.item}>
        //             <Link href="/janazah">Janazah</Link>
        //         </li>
        //     </ul>
        // </nav>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div
                    className="collapse navbar-collapse"
                    // id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </a> */}
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">
                                Link
                            </a> */}
                            <Link className="nav-link" href="/janazah">
                                Janazah
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <a
                                className="nav-link disabled"
                                aria-disabled="true"
                            >
                                Disabled
                            </a>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button>
                    </form> */}
                </div>
            </div>
        </nav>
    );
};

// const styles = {
//     navbar: {
//         backgroundColor: "#98c1ecff", // A nice blue shade
//         padding: "15px 30px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
//         position: "sticky",
//         top: 0,
//         zIndex: 1000,
//     },
//     list: {
//         display: "flex",
//         listStyle: "none",
//         margin: 0,
//         padding: 0,
//         gap: "20px", // Gap between the items
//     },
//     item: {
//         color: "#fff", // White text for contrast
//         fontSize: "18px",
//         fontWeight: "500",
//         textTransform: "uppercase", // Uppercase text for a cleaner look
//         transition: "all 0.3s ease", // Smooth transition for hover effects
//     },
//     // Hover styles for the links
//     itemHover: {
//         color: "#ffcc00", // Gold color for hover effect
//         transform: "scale(1.05)", // Slightly enlarge the text on hover
//     },
// };

export default Navbar;
