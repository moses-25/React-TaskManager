import contactData from "../data/contactData";
import PageHeader from "../components/PageHeader";

export default function Help() {
    return (
        <div>
            <PageHeader title="Help" />
            <p>Find answers to common questions. </p>
            
            <br />
            <article>
                <p>
                Company name: <strong>{contactData.CompanyName}</strong>
                </p>
                <p>
                    phone number: <strong>
                        {contactData.phoneNumber}
                    </strong>
                </p>
                <p>
                    <strong>
                        {contactData.emailAddress}
                    </strong>
                </p>
                <a href={contactData.linkedIn}>
                    <strong>Linkedin account</strong>
                    </a>
                    </article>
        </div>
    );
}