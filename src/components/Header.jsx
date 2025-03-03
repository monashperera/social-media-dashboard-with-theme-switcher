import ThemeButton from "./ui/ThemeButton";

const Header = () => {
    return (
       <div className="container-fluid header-container p-0">
            <div className="row m-0 p-0">
                <div className="col-md-6 p-0">
                    <h1>Social Media Dashboard</h1>
                    <p>Total Followers: 23,004</p>
                </div>
                <div className="col-md-6 p-0">
                    <ThemeButton />
                </div>
            </div>
       </div>
    );
}

export default Header;