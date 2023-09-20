import IconLogo from './Logo.svg?react';
import './Header.less';

export default function Header() {
    return (
        <header className="box-header">
            <IconLogo className="box-logo" />
            MomoTalk
        </header>
    );
}
