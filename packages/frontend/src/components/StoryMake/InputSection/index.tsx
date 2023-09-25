import {useCallback, useState} from 'react';
import Input from '@/components/Input';
import {CharacterInfo} from '@/api/character';
import {MessageCreatePayload} from '@/api/story';
import {resolveAvatarUrl} from '@/utils/character';
import {useChatTarget} from '@/atoms/chat';
import ActionButton from './ActionButton';
import IconSend from './Send.svg?react';
import './index.less';

interface TargetAvatarProps {
    target: CharacterInfo | null;
}

function TargetAvatar({target}: TargetAvatarProps) {
    if (!target) {
        return <div className="chat-input-section-target" />;
    }

    if (typeof target === 'object') {
        return (
            <div className="chat-input-section-target">
                <img src={resolveAvatarUrl(target.id)} alt={target.name} />
            </div>
        );
    }
    return (
        <div className="chat-input-section-target">
            {target}
        </div>
    );
}

interface Props {
    parentMessageId: number | null;
    onSend: (message: MessageCreatePayload) => void;
}

export default function InputSection({parentMessageId, onSend}: Props) {
    const target = useChatTarget();
    const [text, setText] = useState('');
    const sendMessage = useCallback(
        () => {
            if (!target) {
                return;
            }

            setText('');
            const message: MessageCreatePayload = {
                parent: parentMessageId,
                target: target.id,
                side: 'target',
                type: 'text',
                content: text.trim(),
            };
            onSend(message);
        },
        [onSend, parentMessageId, target, text]
    );

    return (
        <div className="chat-input-section">
            <TargetAvatar target={target} />
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
