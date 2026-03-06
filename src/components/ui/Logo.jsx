import ImportContactsIcon from '@mui/icons-material/ImportContacts';

export default function Logo() {
    return (
        <div className='flex items-center gap-2'>
            <span>{ <ImportContactsIcon className='text-violet-700' style={{ fontSize: '32px' }} /> }</span>
            <h4 className='mt-1'>Bookaholics</h4>
        </div>
    )
}