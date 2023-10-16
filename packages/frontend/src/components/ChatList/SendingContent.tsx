import MessageDialogOutline from './MessageDialogOutline';
import './SendingContent.less';

interface Props {
    side: 'self' | 'target';
}

export default function SendingContent({side}: Props) {
    return (
        <MessageDialogOutline className="chat-message-content-sending" side={side}>
            <i />
            <i />
            <i />
        </MessageDialogOutline>
    );
}
