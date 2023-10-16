import './ImageContent.less';

interface Props {
    src: string;
}

export default function ImageContent({src}: Props) {
    return <img className="chat-message-content-image" src={src} alt="发送的图片" />;
}
