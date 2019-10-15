import React, { Component } from 'react';
import './UserProfile.css';
import Header from "../Header";
import { Grid, Menu} from "semantic-ui-react";
import SideNavigation from "../SideNavigation";

export default class UserProfile extends Component {

    state = { activeItem: 'profile' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const {activeItem} = this.state;
        return (
            <>
                <Header />
                <Grid columns={14}>
                    <Grid.Column computer={6}>
                        <SideNavigation />
                    </Grid.Column>
                    <Grid.Column computer={8}>
                        <Menu.Item style={{}}
                                   as={'h3'}
                                   name='logout'
                                   active={activeItem === 'logout'}
                                   onClick={this.handleItemClick}
                        >
                            content kinda
                        </Menu.Item>
                    </Grid.Column>
                </Grid>

            </>
        )
    }
};
