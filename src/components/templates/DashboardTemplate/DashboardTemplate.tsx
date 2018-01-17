import * as React from 'react';
import { LogoFrost } from '../../atoms/LogoFrost/LogoFrost';
import { BoxButton } from '../../atoms/BoxButton/BoxButton';
import './DashboardTemplate.scss';

interface DashboardTemplatetProps {
    readonly className?: string;
}

export const DashboardTemplate = (props: DashboardTemplatetProps) => 
    <main className={'Dashboard d-flex'}>
        <nav className={'Dashboard__nav'}>
            <header className={'Dashboard__nav__header'}>
                <LogoFrost className={'Dashboard__nav__header__logo'} />
            </header>
        </nav>
        <section className={'Dashboard__body'}>
            <header className={'Dashboard__body__header'}></header>
            <div className={'Dashboard__body__message d-flex justify-content-start align-items-center'}>
                <div>
                    <h2>Frost is still on testnet, so it is not proof of existence yet</h2>
                    <p>The thing above is a horiontal rule</p>
                </div>
            </div>
            <section className={'Dashboard__body__actions'}>
                <div className={'Dashboard__body__actions__welcome'}>
                    <h2>Welcome to Frost</h2>
                    <p>The thing above is a horiontal rule</p>
                </div>
                <div className={'Dashboard__body__actions__box-buttons'}>
                    <BoxButton title={'API Keys'}
                               description={'Get started building out an integration on top of po.et using the frost API.'}
                               buttonText={'Get API Key'}/>    

                    <BoxButton title={'Documentation & Guides'}
                               description={'View a list of getting started guides and full API documentation for interacting with the Po.et Network. '}
                               buttonText={'View Docs'}/>    
                </div>
            </section>
        </section>
    </main>
