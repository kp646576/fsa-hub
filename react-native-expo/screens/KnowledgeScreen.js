import React, {Component} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Right, Body } from 'native-base'; 
import NavButton from "../components/NavButton";

class KnowledgeScreen extends Component
{
    static navigationOptions = {
        header: null,
      };

    render()
    {
        return (
        <Container>
            <Content>
                <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/knowledge.png')} />
                        <Body>
                            <Text>FSA Technical Standard</Text>
                            <Text note>Key Tutorials, Articles & Websites</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>The Full-Stack Apprenticeship Technical Standard is our toolkit for building modern, scalable applications. They are chosen for their production readiness, available documentation, open-source libraries & tutorials available for the learning process.</Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Body>
                        <NavButton route="Subcategories" schema="fullStackApprenticeship" block textStyle={{color: `#87838B`}} onPress={() => this.props.navigation.navigate('Subcategories')}
                        >
                            <Text>View Resources</Text>
                        </NavButton>                      
                    </Body>
                </CardItem>
                </Card>
            </Content>
            <Content>
                <Card style={{flex: 0}}>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/fsa.jpeg')} />
                        <Body>
                            <Text>Jobs, Freelancing, Start-ups</Text>
                            <Text note>Job boards, links, resources, agreements templates</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>Our official directory for resources relating to finding freelance work, full-time roles, interviewing, start-up related inquiries & everything in between. </Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Body>
                        <NavButton route="Subcategories" schema="findingWork" block textStyle={{color: `#87838B`}} onPress={() => this.props.navigation.navigate('Subcategories')}
                        >
                            <Text>View Resources</Text>
                        </NavButton>
                        </Body>
                </CardItem>
                </Card>
            </Content>
        </Container>
        );
    }
}

export default KnowledgeScreen;