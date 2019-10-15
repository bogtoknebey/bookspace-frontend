import React, { Component } from 'react';
import {Dropdown, Icon, Image, Input, Menu, Sticky} from "semantic-ui-react";
import './Header.css';
import {Link} from "react-router-dom";

export default class Header extends Component {

    state = {
        context: null,
        activeItem: '',
        language: 'UA',
    };

    handleContextRef = ref => {
        this.setState({ context: ref });
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    handleLanguageChange = (lang) => this.setState({language: lang});

    render() {
        const { activeItem } = this.state;

        const noAuthLinks = (
            <Menu secondary borderless={true} style={{textColor: 'white'}} attached={'top'} className='header header-menu' ref={this.handleContextRef}>
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
                        <Menu.Item
                            name='profile'
                            as={Link}
                            to='/users/profile'
                        >
                            <Image src='/images/avatar.png' avatar />
                        </Menu.Item>
                        <Menu.Item
                            name='home'
                        disable
                        >
                            <h3>BookSpace</h3>
                        </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Input icon='search' placeholder='Search...' />
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
            <React.Fragment ref={this.handleContextRef}>
                <Sticky context={this.state.context}>
                {authLinks}
                </Sticky>
            </React.Fragment>
        )
    }
}