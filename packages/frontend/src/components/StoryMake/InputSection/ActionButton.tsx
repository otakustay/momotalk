import {ReactElement} from 'react';
import './ActionButton.less';

interface Props {
    icon: ReactElement;
    onClick: () => void;
}

export default function ActionButton({icon, onClick}: Props) {
    return (
        <i className="chat-input-section-action" onClick={onClick}>
            {icon}
        </i>
    );
}
