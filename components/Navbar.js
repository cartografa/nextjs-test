import Link from "next/link";

const Navbar = () => {
    const styles = {
        display: "flex",
        background: "#afaafa",
        justifyContent: "space-between",
        padding: "1rem"
    };
    return (
        <nav style={styles}>
            <Link href='/'>
                <a>HOME</a>
            </Link>
            <Link href='/about'>
                <a>About Page</a>
            </Link>
            <Link href='/contact'>
                <a>Contact Page</a>
            </Link>
        </nav>
    );
};

export default Navbar;