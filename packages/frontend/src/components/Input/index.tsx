import {CSSProperties, ReactElement} from 'react';
import classNames from 'classnames';
import './index.less';

interface Props {
    className?: string;
    style?: CSSProperties;
    placeholder?: string;
    prefixIcon?: ReactElement;
    value: string;
    onChange: (value: string) => void;
}

export default function Input({className, style, placeholder, prefixIcon, value, onChange}: Props) {
    return (
        <div className={classNames('text-input', className)}>
            {prefixIcon && <i className="text-input-icon">{prefixIcon}</i>}
            <input
                className={classNames('text-input-box', {'has-icon': !!prefixIcon})}
                style={style}
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
}
