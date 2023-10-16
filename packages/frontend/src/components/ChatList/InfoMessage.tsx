import './InfoMessage.less';

interface Props {
    content: string;
}

export default function InfoMessage({content}: Props) {
    return (
        <div className="chat-message-info">
            {content}
        </div>
    );
}
