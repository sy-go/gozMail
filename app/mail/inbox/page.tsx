import Preview from '@/app/ui/mail/preview';
import Message from '@/app/ui/mail/message'


export default function page() {
    return (
        <div className='flex'>
            <div>Inbox</div>
            <div>            
                <Preview />
                <Message />
            </div>
        </div>
    )
}