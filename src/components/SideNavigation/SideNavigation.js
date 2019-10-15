import React, {Component} from 'react';
import {Dropdown, Label, Menu} from "semantic-ui-react";

export default class SideNavigation extends Component {

    state = { activeItem: 'profile' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render () {
        const {activeItem} = this.state;
        return (
            <Menu  pointing secondary vertical style={{marginLeft: '3%', position: 'fixed', height: '100vh'}}>
                <Menu.Item
                    as={'h3'}
                    name='profile'
                    active={activeItem === 'profile'}
                    onClick={this.handleItemClick}
                >Profile
                </Menu.Item>
                <Menu.Item
                    as={'h3'}
                    name='top'
                    active={activeItem === 'top'}
                    onClick={this.handleItemClick}
                >Top
                </Menu.Item>
                <Menu.Item
                    as={'h3'}
                    name='bookshelf'
                    active={activeItem === 'bookshelf'}
                    onClick={this.handleItemClick}
                >
                    <Dropdown  text='My Bookshelf' pointing={'top'}>
                        <Dropdown.Menu pointing={'bottom'}>
                            <Dropdown.Item text='Will Read'>Will Read<Label color='teal' style={{marginLeft: '10%'}}>3</Label></Dropdown.Item>
                            <Dropdown.Item text='In Progress'>In Progress<Label style={{marginLeft: '10%'}}>1</Label></Dropdown.Item>
                            <Dropdown.Item text='Read'>Read<Label style={{marginLeft: '10%'}}>12</Label></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item
                    as={'h3'}

                    name='recommendations'
                    active={activeItem === 'recommendations'}
                    onClick={this.handleItemClick}
                >
                    Recommendations
                </Menu.Item>
                <Menu.Item
                    as={'h3'}
                    name='statistics'
                    active={activeItem === 'statistics'}
                    onClick={this.handleItemClick}
                >
                    Statistics
                </Menu.Item>
                <Menu.Item
                    as={'h3'}
                    name='settings'
                    active={activeItem === 'settings'}
                    onClick={this.handleItemClick}
                >
                    Settings
                </Menu.Item>
                <Menu.Item style={{}}
                           as={'h3'}
                           name='logout'
                           active={activeItem === 'logout'}
                           onClick={this.handleItemClick}
                >
                    Logout
                </Menu.Item>
            </Menu>
        )
    }
}