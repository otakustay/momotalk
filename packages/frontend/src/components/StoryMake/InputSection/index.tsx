import {useCallback, useState} from 'react';
import Input from '@/components/Input';
import {MessageCreatePayload} from '@/api/story';
import {ChatTarget, useCurrentChatTarget} from '@/atoms/chat';
import ChatTargetAvatar from '@/components/ChatTargetAvatar';
import ActionButton from './ActionButton';
import IconSend from './Send.svg?react';
import './index.less';

function createMessage(target: ChatTarget, parentMessageId: number | null, text: string): MessageCreatePayload {
    if (typeof target === 'object') {
        return {
            parent: parentMessageId,
            target: target.id,
            side: 'target',
            type: 'text',
            content: text.trim(),
        };
    }
    else if (target === 'self') {
        return {
            parent: parentMessageId,
            type: 'text',
            side: 'self',
            content: text.trim(),
        };
    }

    return {
        parent: parentMessageId,
        type: target,
        side: 'system',
        content: text.trim(),
    };
}

interface Props {
    parentMessageId: number | null;
    onSend: (message: MessageCreatePayload) => void;
}

export default function InputSection({parentMessageId, onSend}: Props) {
    const target = useCurrentChatTarget();
    const [text, setText] = useState('');
    const sendMessage = useCallback(
        () => {
            if (!target) {
                return;
            }

            setText('');
            const message = createMessage(target, parentMessageId, text);
            onSend(message);

        },
        [onSend, parentMessageId, target, text]
    );

    return (
        <div className="chat-input-section">
            <ChatTargetAvatar className="chat-input-section-target" target={target} />
            <Input
                className="chat-input-section-input"
                disabled={!target}
                placeholder={target ? '' : '你现在不能输入，请选择一个消息对象或类型'}
                value={text}
                onChange={setText}
                onEnter={sendMessage}
            />
            <ActionButton icon={<IconSend />} onClick={sendMessage} />
        </div>
    );
}
