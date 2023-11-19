export default function ProfileInfo() {
    return (
        <header className="profile-info">
            <img src="./src/assets/jy-logo.svg" alt="My logo" className="header-logo" />
            <h1 className="name">Jeremy Yochum</h1>
            <h3 className="title">Front-end Developer</h3>
            <p className="website-link"><a href="https://jkyochum.github.io/" target="_blank">jkyochum.github.io</a></p>
            <div className="profile-buttons">
                <a href="mailto:whiterwidow@gmail.com?subject=Reaching Out Via DBC"><div className="email"><img src="./src/assets/mail-icon.svg" />Email</div></a>
                <a href="https://www.linkedin.com/in/jeremy-yochum/" target="_blank"><div className="linkedin"><img src="/src/assets/linkedin-icon.svg" />LinkedIn</div></a>
            </div>
        </header>
    )
}