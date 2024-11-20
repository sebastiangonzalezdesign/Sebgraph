import './contact.scss'

interface MessageProps {
    color: string
}

const Message: React.FC<MessageProps> = ({ color }) => {
    return <div className="" style={{ background: `${color}` }} />
}

export default Message
