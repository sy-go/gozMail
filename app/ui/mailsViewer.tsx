import MailsPreview from '@/app/ui/mailsPreview'
import MailView from './mailView'

export default function MailsViewer(){
    return(
        <div className='flex'>
            <MailsPreview />
            <MailView />
        </div>
    )
}