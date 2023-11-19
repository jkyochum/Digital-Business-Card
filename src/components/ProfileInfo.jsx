export default function ProfileInfo() {
    return (
        <header className="profile-info">
            <img src="./src/assets/jy-logo.svg" alt="My logo" />
            <h1>Jeremy Yochum</h1>
            <h3>Front-end Developer</h3>
            <p><a href="https://jkyochum.github.io/" target="_blank">jkyochum.github.io</a></p>
            <div className="profile-buttons">
                <button className="email"><img src="./src/assets/mail-icon.svg" />Email</button>
                <button className="linkedin"><img src="/src/assets/linkedin-icon.svg" />LinkedIn</button>
            </div>
        </header>
    )
}