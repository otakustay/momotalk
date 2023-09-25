import {CSSProperties, KeyboardEvent, ReactElement, useCallback} from 'react';
import classNames from 'classnames';
import './index.less';

interface Props {
    className?: string;
    style?: CSSProperties;
    placeholder?: string;
    prefixIcon?: ReactElement;
    disabled?: boolean;
    value: string;
    onChange: (value: string) => void;
    onEnter?: () => void;
}

export default function Input({className, style, placeholder, prefixIcon, disabled, value, onChange, onEnter}: Props) {
    const trackKey = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Enter' && onEnter) {
                onEnter();
            }
        },
        [onEnter]
    );

    return (
        <div className={classNames('text-input', className)}>
            {prefixIcon && <i className="text-input-icon">{prefixIcon}</i>}
            <input
                className={classNames('text-input-box', {'has-icon': !!prefixIcon})}
                style={style}
                disabled={disabled}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
                onKeyUp={trackKey}
            />
        </div>
    );
}
