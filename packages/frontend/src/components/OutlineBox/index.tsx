import {ReactNode} from 'react';
import Sidebar from '@/components/Sidebar';
import Header from './Header';
import './index.less';

interface Props {
    children: ReactNode;
}

export default function OutlineBox({children}: Props) {
    return (
        <div className="box">
            <Header />
            <Sidebar />
            <div className="box-content">
                {children}
            </div>
        </div>
    );
}
