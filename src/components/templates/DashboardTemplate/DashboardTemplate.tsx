import * as React from 'react';
import { LogoFrost } from '../../atoms/LogoFrost/LogoFrost';
import { BoxButton } from '../../atoms/BoxButton/BoxButton';
import { NavigationList } from '../../atoms/NavigationList/NavigationList';
import { Toggle } from '../../atoms/Toggle/Toggle';
import { Logout } from '../../atoms/Logout/Logout';
import './DashboardTemplate.scss';

interface DashboardTemplatetProps {
    readonly className?: string;
    readonly children?: any;
    readonly email?: string;
    readonly onLogout?: () => void
}

export const DashboardTemplate = (props: DashboardTemplatetProps) => 
    <main className={'Dashboard d-flex'}>
        <nav className={'Dashboard__nav'}>
            <header className={'Dashboard__nav__header'}>
                <LogoFrost className={'Dashboard__nav__header__logo'} />
            </header>
            <NavigationList className={'Dashboard__nav__navigation-list'} />
        </nav>
        <section className={'Dashboard__body'}>
            <header className={'Dashboard__body__header'}>
                <div className={'Dashboard__body__header__content d-flex align-items-center justify-content-between'}>
                    <Toggle />
                    <Logout email={props.email} onLogout={props.onLogout} />
                </div>
            </header>
            {props.children}
        </section>
    </main>
