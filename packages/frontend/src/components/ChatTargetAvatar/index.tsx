import {CSSProperties, useCallback} from 'react';
import classNames from 'classnames';
import {ChatTarget, useSelectChatTarget} from '@/atoms/chat';
import {resolveAvatarUrl} from '@/utils/character';
import IconSelf from './Self.svg?react';
import IconEvent from './Event.svg?react';
import IconInfo from './Info.svg?react';
import IconReply from './Reply.svg?react';
import './index.less';

function renderContent(target: ChatTarget) {
    switch (target) {
        case 'event':
            return <IconEvent />;
        case 'info':
            return <IconInfo />;
        case 'reply':
            return <IconReply />;
        case 'self':
            return <IconSelf />;
        default:
            return <img src={resolveAvatarUrl(target.id)} alt={target.name} />;
    }
}

interface Props {
    style?: CSSProperties;
    className?: string;
    target: ChatTarget;
    selectable?: boolean;
}

export default function ChatTargetAvatar({style, className, target, selectable}: Props) {
    const select = useSelectChatTarget();
    const click = useCallback(
        () => {
            if (selectable) {
                select(target);
            }
        },
        [select, selectable, target]
    );

    return (
        <div
            style={style}
            className={classNames('chat-target', {'chat-target-interactive': selectable}, className)}
            onClick={click}
        >
            {renderContent(target)}
        </div>
    );
}
