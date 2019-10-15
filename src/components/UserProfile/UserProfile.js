import React, { Component } from 'react';
import './UserProfile.css';
import Header from "../Header";
import {Card, Grid, Image, Menu, Segment, Header as UIHeader, Item} from "semantic-ui-react";
import SideNavigation from "../SideNavigation";
import HeaderSubHeader from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";

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
                       {/*<Grid columns={14}>*/}
                       {/*    <Grid.Column computer={14}>*/}
                        <UIHeader dividing style={{marginLeft: '-20%', marginTop: '5%'}}>My Profile</UIHeader>
                               <Segment style={{marginLeft: '-20%', marginTop: '5%'}}>
                                   <Grid>
                                   <Card style={{marginLeft: '5%',marginTop: '5%'}}>
                                       <Image src={'/images/avatar.png'} />
                                   </Card>
                                   <Item style={{marginTop: '5%'}}>
                                       <UIHeader> Username </UIHeader>
                                   </Item>
                                   </Grid>
                               </Segment>
                           {/*</Grid.Column>*/}


                       {/*</Grid>*/}
                    </Grid.Column>
                </Grid>

            </>
        )
    }
};
