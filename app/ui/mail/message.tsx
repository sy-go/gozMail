

export default function Message({ mail }) {
    if (!mail) return <div className="w-2/3 p-4">Select a message</div>;
    
    return (
        <div className="w-2/3 p-4">
            <h2 className="text-xl font-bold">{mail.title}</h2>
            <div className="mt-4 text-sm">
                <p>From: {mail.sender}</p>
                <p>Date: {mail.date}</p>
                <div className="mt-4">{/* Add message body here */}</div>
            </div>
        </div>
    );
}