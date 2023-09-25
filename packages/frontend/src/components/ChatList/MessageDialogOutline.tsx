import {ReactNode} from 'react';
import classNames from 'classnames';
import './MessageDialogOutline.less';

interface Props {
    className?: string;
    side: 'self' | 'target';
    children: ReactNode;
}

export default function MessageDialogOutline({className, side, children}: Props) {
    return (
        <p className={classNames('chat-message-content-dialog', `chat-message-content-dialog-${side}`, className)}>
            {children}
        </p>
    );
}
