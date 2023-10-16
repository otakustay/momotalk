import './EventMessage.less';

interface Props {
    content: string;
}

export default function EventMessage({content}: Props) {
    return (
        <div className="chat-message-event">
            <header className="chat-message-event-title">
                羁绊事件
            </header>
            <p className="chat-message-event-content">
                {content}
            </p>
        </div>
    );
}
