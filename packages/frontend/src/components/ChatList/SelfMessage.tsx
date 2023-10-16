import {ReactElement} from 'react';
import './SelfMessage.less';

interface Props {
    children: ReactElement;
}

export default function SelfMessage({children}: Props) {
    return (
        <div className="chat-message-self">
            {children}
        </div>
    );
}
