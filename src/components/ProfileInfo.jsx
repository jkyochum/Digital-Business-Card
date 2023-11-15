export default function ProfileInfo() {
    return (
        <section>
            <img src="./src/assets/JYLogo.svg" alt="My logo" />
            <h1>Jeremy Yochum</h1>
            <h3>Front-end Developer</h3>
            <p><a href="https://jkyochum.github.io/" target="_blank">jkyochum.github.io</a></p>
            <div className="profile-buttons">
                <button className="email">Email</button>
                <button className="linkedin">LindedIn</button>
            </div>
        </section>
    )
}