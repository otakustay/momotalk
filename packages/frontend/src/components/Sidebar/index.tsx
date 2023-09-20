import {ReactElement} from 'react';
import {NavLink} from 'react-router-dom';
import IconChat from './Chat.svg?react';
import './index.less';

interface NavigationItemProps {
    to: string;
    icon: ReactElement;
}

function NavigationItem({to, icon}: NavigationItemProps) {
    return (
        <NavLink
            className={({isActive}) => (isActive ? 'sidebar-item sidebar-item-active' : 'sidebar-item')}
            to={to}
        >
            {icon}
        </NavLink>
    );
}

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <nav className="sidebar-navigation">
                <NavigationItem to="/" icon={<IconChat />} />
            </nav>
        </aside>
    );
}
