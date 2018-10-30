/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

export default class github_app extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }
  render() {
    return (
      <View style={styles.container}>
          <TabNavigator>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'home'}
                  title="Home"
                  selectedTitleStyle={{color:'red'}}
                  renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.image, {tinColor:'red'}]} source={require('./res/images/ic_polular.png')} />}
                  badgeText="1"
                  onPress={() => this.setState({ selectedTab: 'home' })}>
                  <View style={styles.page1}/>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'profile'}
                  title="Profile"
                  selectedTitleStyle={{color:'yellow'}}
                  renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.image, {tinColor:'blue'}]} source={require('./res/images/ic_trending.png')} />}
                  onPress={() => this.setState({ selectedTab: 'profile' })}>
                  <View style={styles.page2}/>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'home'}
                  title="Home"
                  selectedTitleStyle={{color:'green'}}
                  renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.image, {tinColor:'red'}]} source={require('./res/images/ic_polular.png')} />}
                  badgeText="1"
                  onPress={() => this.setState({ selectedTab: 'home' })}>
                  <View style={styles.page1}/>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'profile'}
                  title="Profile"
                  selectedTitleStyle={{color:'orange'}}
                  renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
                  renderSelectedIcon={() => <Image style={[styles.image, {tinColor:'red'}]} source={require('./res/images/ic_trending.png')} />}
                  onPress={() => this.setState({ selectedTab: 'profile' })}>
                  <View style={styles.page2}/>
              </TabNavigator.Item>
          </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
    page1: {
      flex: 1,
      backgroundColor: 'yellow',
    },
    page2: {
      flex:1,
      backgroundColor: 'blue'
    },
    image: {
      height: 22,
        width: 22
    }
});

AppRegistry.registerComponent('github_app', () => github_app);
