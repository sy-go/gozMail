
export default function Preview({ mails, onMailClick }) {
    return (
        <div className="w-1/3 border-r">
            {mails.map(mail => (
                <div 
                    key={mail.id}
                    onClick={() => onMailClick(mail)}
                    className={`p-4 cursor-pointer ${!mail.read ? 'font-bold' : ''}`}
                >
                    <h3>{mail.title}</h3>
                    <p className="text-sm text-gray-600">{mail.sender}</p>
                    <p className="text-xs text-gray-500">{mail.date}</p>
                </div>
            ))}
        </div>
    );
}