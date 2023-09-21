import './ReplyMessage.less';

interface Props {
    content: string;
}

export default function ReplyMessage({content}: Props) {
    return (
        <div className="chat-message-reply">
            <header className="chat-message-reply-title">
                回复
            </header>
            <p className="chat-message-reply-content">
                {content}
            </p>
        </div>
    );
}
