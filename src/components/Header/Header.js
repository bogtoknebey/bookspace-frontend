import React, { Component } from 'react';
import {Dropdown, Icon, Image, Input, Item, Menu} from "semantic-ui-react";
import './Header.css';

export default class Header extends Component {

    state = {
        activeItem: 'home',
        language: 'UA',
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    handleLanguageChange = (lang) => this.setState({language: lang});

    render() {
        const { activeItem } = this.state;

        const noAuthLinks = (
            <Menu secondary borderless={true} style={{textColor: 'white'}} attached={'top'} className='header header-menu'>
                <Menu.Menu position='right'>
                    <Menu.Item
                        name='signin'
                        active={activeItem === 'signin'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name='sign-in' />
                        Sign in
                    </Menu.Item>
                    <Menu.Item
                        name='register'
                        active={activeItem === 'register'}
                        onClick={this.handleItemClick}
                    >
                        <Icon name={'add user'} /> Sign up
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );

        const authLinks = (
                    <Menu secondary borderless={true} style={{textColor: 'white'}} attached={'top'} className='header header-menu'>
                        {/*<Menu.Item>*/}
                        {/*    /!*<Item>*!/*/}
                        {/*        <img src='/images/logo.png' style={{height: '30px', width: '30px'}} />*/}
                        {/*    /!*</Item>*!/*/}
                        {/*</Menu.Item>    */}
                        <Menu.Item
                            name='bookshelf'
                            active={activeItem === 'bookshelf'}
                            onClick={this.handleItemClick}
                        >
                            <Icon name={'book'} /> My Bookshelf
                        </Menu.Item>
                        <Menu.Item
                            name='top'
                            active={activeItem === 'top'}
                            onClick={this.handleItemClick}
                        >
                            <Icon name='list ol' />
                            Top
                        </Menu.Item>
                        <Menu.Item
                            name='recommendations'
                            active={activeItem === 'recommendations'}
                            onClick={this.handleItemClick}
                        >
                            <Icon name='thumbs up'/>
                            Recommendations
                        </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Input icon='search' placeholder='Search...' />
                            </Menu.Item>
                            <Menu.Item
                                name='profile'
                                active={activeItem === 'profile'}
                                onClick={this.handleItemClick}
                            >
                                <Icon name='user' />
                                Profile
                            </Menu.Item>
                            <Menu.Item
                                name='logout'
                                active={activeItem === 'logout'}
                                onClick={this.handleItemClick}
                            >
                                <Icon name={'sign-out'} /> Logout
                            </Menu.Item>
                            <Menu.Item
                                name='language'
                                fitted
                            >
                                <Dropdown text={this.state.language}>
                                    <Dropdown.Menu>
                                        <Dropdown.Item text='UA' onClick={() => this.handleLanguageChange('UA')} />
                                        <Dropdown.Item text='EN' onClick={() => this.handleLanguageChange('EN')} />
                                        <Dropdown.Item text='RU' onClick={() => this.handleLanguageChange('RU')} />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
        );
        return (
            <React.Fragment>
                {authLinks}
            </React.Fragment>
        )
    }
}