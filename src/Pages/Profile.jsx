import PageHeader from "../components/PageHeader";
import UserCard from "../components/UserCard";

export default function Profile() {
    return (
        <div>
            <PageHeader title="Profile" />

            <UserCard />

            <section>
                <h2>Profile Summary</h2>

                <p>
                   Moses Otieno is Software Engineer with a strong background in JavaScript and React and has successfully led multiple projects from conception to deployment. Moses is passionate about building scalable web applications and is always eager to learn new technologies.
                </p>
            </section>
        </div>
    );
}