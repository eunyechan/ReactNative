import React, {Component} from 'react';
import {View, Image} from 'react-native';

import {CardItem, Body, Button, Container, Content, Header, Icon, Left, Title, Card, Text, Thumbnail, Right, Footer, FooterTab} from 'native-base';

export default class Main extends Component{
    render(){
        return(
            <Container>
                {/* 1. Header 영역 */}
                <Header>
                    {/* 크게 3개 영역으로 구분: 자동 row 방향 */}
                    <Left>
                        <Button>
                            <Icon type="FontAwesome" name="bars"></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title>native base </Title>
                    </Body>
                </Header>
                {/* 2. Content 영역 */}
                <Content padder>
                    <Button warning>
                        <Text>button</Text>
                    </Button>

                    <Button info bordered>
                        <Text>button</Text>
                    </Button>
                    <Button danger block>
                        <Text>button</Text>
                    </Button>
                    <Button iconRight>
                        <Icon type="FontAwesome" name="home"></Icon>
                        <Text>home</Text>
                    </Button>

                    <Card>
                        <CardItem>
                        <Left>
                            <Thumbnail source={{uri: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21RK/image/8bi2BqpjZKFgzcME2mrNSTbHK7Q.jpg'}} />
                            <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>

                        </CardItem>
                            <CardItem cardBody>
                                <Image source={{uri: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/21RK/image/8bi2BqpjZKFgzcME2mrNSTbHK7Q.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                            </CardItem>
                        <CardItem>

                        <Left>
                            <Button transparent>
                            <Icon type="FontAwesome" active name="thumbs-up" />
                            <Text>12 Likes</Text>
                            </Button>
                        </Left>

                        <Body>
                            <Button transparent>
                            <Icon type="FontAwesome" active name="comment" />
                            <Text>4 Comments</Text>
                            </Button>
                        </Body>

                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                        </CardItem>
                    </Card>
                </Content>

                {/* 3. Footer 영역 */}
                <Footer>
                    {/* 탭버튼들... */}
                    <FooterTab>
                        <Button>
                            <Text>Tab1</Text>
                        </Button>
                    </FooterTab>
                    
                    <FooterTab>
                        <Button>
                            <Text>Tab1</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>

        );
    }
}