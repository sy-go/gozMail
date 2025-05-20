'use client'

import Preview from '@/app/ui/mail/preview';
import Message from '@/app/ui/mail/message';
import { useState, useEffect } from 'react';
import { getInboxMailsForUser } from '@/app/lib/mail-acitons';

export default function Page() {
    const [inboxMails, setInboxMails] = useState([]);
    const [activeMail, setActiveMail] = useState(null);

    // Fetch emails when component mounts or on inbox nav click
    const fetchMails = async () => {
        const userId = getLoggedInUserId(); // Implement your auth logic here
        const mails = await getInboxMailsForUser(userId);
        setInboxMails(mails);
    };

    // Initial fetch
    useEffect(() => {
        fetchMails();
    }, []);

    return (
        <div className='flex'>
            <Preview 
                mails={inboxMails} 
                onMailClick={setActiveMail}
            />
            <Message mail={activeMail} />
        </div>
    );
}
