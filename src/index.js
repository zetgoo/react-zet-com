import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Router from 'universal-router'
import AppContainer from './components/AppContainer'
import Button from './components/Button'
import Input from './components/Input'
import Checkbox from './components/Checkbox'
import Radio from './components/Radio'
import Select from './components/Select'
import Tag from './components/Tag'
import Switch from './components/Switch'
import Infinite from './components/Infinite'
import Columns from './components/Columns'
import Column from './components/Column'
import Icon from './components/Icon'
import Title from './components/Title'
import SubTitle from './components/SubTitle'
import ControlLabel from './components/ControlLabel'
import {Tabs, TabGroup, Tab} from './components/Tabs'
import NavToggle from './components/NavToggle'
import TextField from './components/TextField'
import Notification from './components/Notification'
import Form from './components/Form'
import FormGroup from './components/FormGroup'
import Box from './components/Box'
import Container from './components/Container'
import Drawer from './components/Drawer'
import SnackBar from './components/SnackBar'
import Addons from './components/Addons'
import Image from './components/Image'
import Avatar from './components/Avatar'

import { VictoryPie, VictoryChart, VictoryBar, VictoryLine,
  VictoryAnimation, VictoryLabel, VictoryTheme,VictoryStack,
  VictoryArea, Bar} from 'victory';

  import Header from './layout/Header'
  import Footer from './layout/Footer'
  import LeftMenu from './layout/LeftMenu'

  import './style.css'
  import avtDemo from './'

  class App extends Component{
    constructor(props){
      super(props)

      this.getData = this.getData.bind(this)
      this.showNotify = this.showNotify.bind(this)

      this.state = {inputText: '',
        percent: 25,
        data: this.getData(0),
        toggleActive : false,
        isLogined: false,
        formText: '',
        formEmail: '',
        formForceChecked: false,
        formForceChecked1: false,
        isSearching: false,
      }
    }

    componentDidMount() {
      let percent = 25;
      // this.setStateInterval = window.setInterval(() => {
      //   percent += (Math.random() * 25);
      //   percent = (percent > 100) ? 0 : percent;
      //   this.setState({
      //     percent, data: this.getData(percent)
      //   });
      // }, 2000);
    }

    componentWillUnmount() {
      window.clearInterval(this.setStateInterval);
    }

    getData(percent) {
      return [{x: 1, y: percent}, {x: 2, y: 100 - percent}];
    }

    showNotify(){
      console.log('bell clicked!')
    }

    render(){
      return (
        <AppContainer>
          <Header
            isActive = {this.state.toggleActive}
            userLogined = {{userName: 'Ballard', avatar: 'https://avatars1.githubusercontent.com/u/6657580?v=4&s=80'}}
            isSearching = {this.state.isSearching}
            search = {()=>this.setState({isSearching: !this.state.isSearching})}
            toogleClick = {()=>this.setState({toggleActive: !this.state.toggleActive})}
            menu = {[{icon: 'fa fa-home', text: 'Menu', to: '/', zcss : ['fw500']}
            ,{icon: 'fa fa-user-circle', text: 'Login', to: '/login', zcss : ['fw500']}]}
            menuNoneUser = {[{icon: 'fa fa-home', text: 'Register', to: '/register', zcss : ['cl_success']}
            ,{icon: 'fa fa-user-circle', text: 'Login', to: '/login', zcss : ['cl_success']}]}
            iconMenuUser = {[{icon: 'fa fa-search', text: '', action: this.showNotify, zcss : ['']}
            ,{icon: 'fa fa-bell', text: '', action: this.showNotify, zcss : ['']}]}
            />
          <Container>
            <Columns xLargeCol = {6} smallCol = {1} gutter = '8px'>
              <Column zcss = {['']} xLargeCell = {2} smallCell = {1}>
                <LeftMenu
                  data = {[{
                    groupLabel: 'Main',
                    childMenu: [{
                        icon: 'aws.fa-user-circle-o',
                        label: 'Dashboard',
                        rightActived: 'aws.fa-user-circle-o',
                        rightNoAcitved: 'aws.fa-user-circle-o',
                        isActived: true,
                        childMenu:[{
                            icon: 'aws.fa-user-circle-o',
                            label: 'Visit',
                            rightActived: 'aws.fa-user-circle-o',
                            rightNoAcitved: 'aws.fa-user-circle-o',
                            isActived: true,
                            childMenu:[{
                                icon: 'aws.fa-user-circle-o',
                                label: 'Week',
                                rightActived: 'aws.fa-user-circle-o',
                                rightNoAcitved: 'aws.fa-user-circle-o',
                                isActived: true,
                            },{
                                icon: 'aws.fa-user-circle-o',
                                label: 'year',
                                rightActived: 'aws.fa-user-circle-o',
                                rightNoAcitved: 'aws.fa-user-circle-o',
                                isActived: true,
                            }]
                        },{
                            icon: 'aws.fa-user-circle-o',
                            label: 'Login',
                            rightActived: 'aws.fa-user-circle-o',
                            rightNoAcitved: 'aws.fa-user-circle-o',
                            isActived: true,
                            childMenu:[{
                                icon: 'aws.fa-user-circle-o',
                                label: 'Month',
                                rightActived: 'aws.fa-user-circle-o',
                                rightNoAcitved: 'aws.fa-user-circle-o',
                                isActived: true,
                            }]
                        }]
                    }],
                  },{
                    groupLabel: 'User',
                    childMenu: [{
                        icon: 'aws.fa-user-circle-o',
                        label: 'Setting',
                        rightActived: 'aws.fa-user-circle-o',
                        rightNoAcitved: 'aws.fa-user-circle-o',
                        isActived: false,
                        childMenu:[{
                            icon: 'aws.fa-user-circle-o',
                            label: 'Change Password',
                            rightActived: 'aws.fa-user-circle-o',
                            rightNoAcitved: 'aws.fa-user-circle-o',
                            isActived: false,
                            childMenu:[{
                                icon: 'aws.fa-user-circle-o',
                                label: 'SMS',
                                rightActived: 'aws.fa-user-circle-o',
                                rightNoAcitved: 'aws.fa-user-circle-o',
                                isActived: false,
                            }]
                        }]
                    }],
                  }
                ]}
                  ></LeftMenu>
              </Column>
              <Column zcss = {['']} xLargeCell = {4} smallCell = {1}>
                <div className="row">
                  <Drawer isShow = {this.state.drawerIsShow}>
                    <LeftMenu/>
                  </Drawer>
                  <Button zcss = {['primary','fr']} onClick = {()=>this.setState({drawerIsShow: !this.state.drawerIsShow})}>Drawer</Button>
                </div>
                <div className="row">
                  <SnackBar isShow = {this.state.snackBarIsShow} timeout = {5000}/>
                  <Button zcss = {['primary','fr']} onClick = {()=>this.setState({snackBarIsShow: !this.state.snackBarIsShow})}>SnackBar</Button>
                </div>

                <div className="row">
                  <Button zcss = {['']}>Nomal</Button>
                  <Button zcss = {['white']}>white</Button>
                  <Button zcss = {['light']}>light</Button>
                  <Button zcss = {['black']}>black</Button>
                  <Button zcss = {['info']}>info</Button>
                  <Button zcss = {['success']}>success</Button>
                  <Button zcss = {['primary']}>primary</Button>
                  <Button zcss = {['warning']}>warning</Button>
                  <Button zcss = {['disable']}>disable</Button>
                  <Button zcss = {['cancel']}>cancel</Button>
                  <Button zcss = {['isLink']}>Link</Button>
                </div>

                <div className="row">
                  <Input zcss = {[]} placeholder = 'zetgoo' value = {this.state.inputText}
                    onChange = {(event,text)=>this.setState({inputText: text})}/>
                  <Input zcss = {['disabled']} placeholder = 'disable' value = {this.state.inputText}
                    onChange = {(event,text)=>this.setState({inputText: text})} disabled/>
                  <Input zcss = {['error']} placeholder = 'input error' value = {this.state.inputText}
                    onChange = {(event,text)=>this.setState({inputText: text})}/>
                  <TextField
                    label="Username"
                    errors={[
                      { text: 'it is require' },
                      { text: 'More than 6 characters' },
                    ]}
                    valid={false}
                    help="More than 6 characters"
                    placeholder="textfield error"
                    type="text"
                    />
                  <TextField
                    label="Password"
                    placeholder="password"
                    valid
                    value="Zetgoo"
                    help="More than 6 characters"
                    type="password"
                    />
                </div>
                <div className="row">
                  <Checkbox zcss = {['']} label = 'zetgoo'/>
                </div>
                <div className="row">
                  <Radio zcss = {['']} label = 'zetgoo'/>
                </div>
                <div className="row">
                  <Select options = {[{label: 'bl', value: 1}, {label: 'yl', value: 2}]} zcss = {['']}
                    value = {this.state.selectedValue ? this.state.selectedValue : 1}
                    onChange = {(value)=>this.setState({selectedValue: value})}/>
                </div>
                <div className="row">
                  <Tag zcss = {['isSmall', 'success']} text = 'zetgoo' icon = 'fa fa-remove' onClick = {()=>console.log('trainee')}/>
                  <Tag zcss = {['isMedium', 'primary']} text = 'zetgoo' icon = 'fa fa-remove' onClick = {()=>console.log('trainee')}/>
                  <Tag zcss = {['isLarge', 'cancel']} text = 'zetgoo' icon = 'fa fa-remove' onClick = {()=>console.log('trainee')}/>
                </div>
                <div className="row">
                  <Switch/>
                </div>
                <div className="row">
                  <Columns xLargeCol = {6} smallCol = {1} gutter = '10px'>
                    <Column zcss = {['bg_success']} xLargeCell = {2} smallCell = {1}>
                      First column
                    </Column>
                    <Column zcss = {['bg_danger']} xLargeCell = {2} smallCell = {1}>
                      Second column
                    </Column>
                    <Column zcss = {['bg_primary']} xLargeCell = {2} smallCell = {1}>
                      Third column
                    </Column>
                  </Columns>
                </div>
                <div className="row">
                  <Icon zcss = {['cl_primary']} icon = 'fa fa-home' text = 'zetgoo'/>
                  <Icon zcss = {['cl_success']} icon = 'fa fa-check'/>
                  <Icon zcss = {['cl_success']} icon = 'fa fa-check-circle'/>
                  <Icon zcss = {['cl_danger']} icon = 'fa fa-exclamation-circle'/>
                </div>
                <div className="row">
                  <Avatar image = 'https://placeimg.com/80/80/animals' zcss = {['isCircle']}/>
                  <Avatar icon = 'fa fa-play-circle-o' zcss = {['isCircle']}/>
                  <Avatar text = 'BL' zcss = {['isCircle']}/>
                  <Avatar image = 'https://placeimg.com/80/80/animals' zcss = {[]}/>
                  <Avatar icon = 'fa fa-play-circle-o' zcss = {[]}/>
                  <Avatar text = 'BL' zcss = {[]}/>
                </div>
                <div className="row">
                  <Image zcss = {[]}  src = 'http://placehold.it/480x480'
                    alt = 'Zetgoo' title = 'Zetgoo' width = {16} ratio={1}/>

                </div>
                <div className="row">
                  <Image zcss = {[]}  src = 'http://placehold.it/480x480'
                    alt = 'Zetgoo' title = 'Zetgoo' width = {24} ratio={1}/>
                </div>
                <div className="row">
                  <Image zcss = {[]}  src = 'http://placehold.it/480x480'
                    alt = 'Zetgoo' title = 'Zetgoo' width = {32} ratio={1}/>
                </div>
                <div className="row">
                  <Image zcss = {[]}  src = 'http://placehold.it/480x480'
                    alt = 'Zetgoo' title = 'Zetgoo' width = {48} ratio={1}/>
                </div>
                <div className="row">
                  <Image zcss = {[]}  src = 'http://placehold.it/480x480'
                    alt = 'Zetgoo' title = 'Zetgoo' width = {64} ratio={1}/>
                </div>
                <div className="row">
                  <Image zcss = {[]}  src = 'http://placehold.it/480x480'
                    alt = 'Zetgoo' title = 'Zetgoo' width = {96} ratio={1}/>
                </div>
                <div className="row">
                  <Image zcss = {[]}  src = 'http://placehold.it/480x480'
                    alt = 'Zetgoo' title = 'Zetgoo' width = {128} ratio={1}/>
                </div>
                <div className="row">
                  <Image zcss = {[]}  src = 'http://placehold.it/480x480'
                    alt = 'Zetgoo' title = 'Zetgoo' width = {256} ratio={1}/>
                </div>
                <div className="row">
                  <Image zcss = {[]}  src = 'http://placehold.it/480x480'
                    alt = 'Zetgoo' title = 'Zetgoo' width = {320} ratio={1}/>
                </div>
                <div className="row">
                  <Image zcss = {[]}  src = 'http://placehold.it/480x480'
                    alt = 'Zetgoo' title = 'Zetgoo' width = {480} ratio={1}/>
                </div>
                <div className="row">
                  <Image zcss = {['isCircle']}  src = 'http://placehold.it/480x480'
                    alt = 'Zetgoo' title = 'Zetgoo' width = {480} ratio={1}/>
                </div>
                <div className="row">
                  <Image zcss = {[]}  src = 'http://placehold.it/480x480'
                    alt = 'Zetgoo' title = 'Zetgoo' width = {480} ratio={4/3}/>
                </div>
                <div className="row">
                  <Image zcss = {[]}  src = 'http://placehold.it/480x480'
                    alt = 'Zetgoo' title = 'Zetgoo' width = {480} ratio={3/2}/>
                </div>
                <div className="row">
                  <Image zcss = {[]}  src = 'http://placehold.it/480x480'
                    alt = 'Zetgoo' title = 'Zetgoo' width = {480} ratio={16/9}/>
                </div>
                <div className="row">
                  <Image zcss = {[]}  src = 'http://placehold.it/480x480'
                    alt = 'Zetgoo' title = 'Zetgoo' width = {480} ratio={2}/>
                </div>
                {/*<div className="row">
                  <Infinite/>
                  </div>*/}
                  <div className="row">
                    <Title zcss = {['is1']}>Title 1</Title>
                  </div>
                  <div className="row">
                    <Title zcss = {['is2']}>Title 2</Title>
                  </div>
                  <div className="row">
                    <Title zcss = {['is3']}>Title 3</Title>
                  </div>
                  <div className="row">
                    <Title zcss = {['is4']}>Title 1</Title>
                  </div>
                  <div className="row">
                    <Title zcss = {['is5']}>Title 2</Title>
                  </div>
                  <div className="row">
                    <Title zcss = {['is6']}>Title 3</Title>
                  </div>
                  <div className="row">
                    <SubTitle zcss = {['is4']}>SubTitle 1</SubTitle>
                  </div>
                  <div className="row">
                    <SubTitle zcss = {['is5']}>SubTitle 2</SubTitle>
                  </div>
                  <div className="row">
                    <SubTitle zcss = {['is6']}>SubTitle 3</SubTitle>
                  </div>

                  <div className="row">
                    <ControlLabel zcss = {['f1r']}>ControlLabel</ControlLabel>
                    <ControlLabel zcss = {['f2r']}>ControlLabel</ControlLabel>
                    <ControlLabel zcss = {['f3r']}>ControlLabel</ControlLabel>
                    <ControlLabel zcss = {['f1e']}>ControlLabel</ControlLabel>
                    <ControlLabel zcss = {['f2e']}>ControlLabel</ControlLabel>
                    <ControlLabel zcss = {['f3e']}>ControlLabel</ControlLabel>
                  </div>

                  <div className="row">
                    <Tabs indexActice = {1} tabs = {[{icon: 'fa fa-home', text: 'Home'}, {icon: 'fa fa-code', text: 'Code'}]}/>
                  </div>
                  <div className="row">
                    <Notification zcss = {['bg_danger']} enableCloseButton
                      closeButtonProps={{ onClick: () => console.log('clicked') }}
                      >
                      lorem ipsum dolor sit amet, consectetur
                      adipiscing elit lorem ipsum dolor sit amet,
                      consectetur adipiscing elit
                    </Notification>
                  </div>

                  <div className="row">
                    <Columns xLargeCol = {6} smallCol = {1} gutter = '10px'>
                      <Column zcss = {['']} xLargeCell = {3} smallCell = {1}>
                        <Addons hasAddonsRight>
                          <Button zcss = {['primary','bd_rTR_0', 'bd_rBR_0']}>Transfer</Button>
                          <Input zcss = {['bd_rTL_0', 'bd_rBL_0']} placeholder="Amount of money" />

                        </Addons>
                      </Column>
                      <Column zcss = {['']} xLargeCell = {3} smallCell = {1}>
                        <Addons hasAddonsRight>
                          <Input zcss = {['bd_rTR_0', 'bd_rBR_0']} placeholder="Amount of money"/>
                          <Button zcss = {['light','bd_rTL_0', 'bd_rBL_0']}>Transfer</Button>
                        </Addons>
                      </Column>
                    </Columns>
                  </div>

                  <div className="row">
                    <Form schema = {{
                        username: {type: 'text', maxLength: 20, minLength: 0, isRequire: true, message: {isRequire: 'Username is require', length: 'Length of Username between 0 and 20'}},
                        email: {type: 'email', maxLength: 20, minLength: 0, isRequire: true, message: {isRequire: 'Email is require', length: 'Length of Email between 0 and 20'} }
                      }}
                      onSubmit = {()=>console.log('form submit')}
                      onReset = {()=>console.log('form reset')}>
                      <FormGroup>
                        <Columns xLargeCol = {6} smallCol = {1} gutter = '10px'>
                          <Column zcss = {['']} xLargeCell = {3} smallCell = {1}>

                            <TextField
                              name = 'username'
                              label="Username"
                              errors={[
                              ]}
                              valid={false}
                              help="More than 6 characters"
                              placeholder="username"
                              type="text"
                              value = {this.state.formText}
                              onChange = {(e) => this.setState({formText: e.target.value})}
                              />

                          </Column>
                          <Column zcss = {['']} xLargeCell = {3} smallCell = {1}>
                            <TextField
                              name = 'username'
                              label="Username"
                              errors={[
                              ]}
                              valid={false}
                              help="More than 6 characters"
                              placeholder="username"
                              type="text"
                              value = {this.state.formText}
                              onChange = {(e) => this.setState({formText: e.target.value})}
                              />

                          </Column>
                        </Columns>
                      </FormGroup>
                      <Columns xLargeCol = {6} smallCol = {1} gutter = '10px'>

                        <Column zcss = {['']} xLargeCell = {3} smallCell = {1}>
                          <FormGroup>
                            <TextField
                              name = 'email'
                              label="Username"
                              errors={[
                              ]}
                              valid={false}
                              help="More than 6 characters"
                              placeholder="username"
                              type="text"
                              value = {this.state.formEmail}
                              onChange = {(e) => this.setState({formEmail: e.target.value})}
                              />
                            <TextField
                              name = 'email'
                              label="Username"
                              errors={[
                              ]}
                              valid={false}
                              help="More than 6 characters"
                              placeholder="username"
                              type="text"
                              value = {this.state.formEmail}
                              onChange = {(e) => this.setState({formEmail: e.target.value})}
                              />
                          </FormGroup>
                        </Column>
                      </Columns>
                      <Columns xLargeCol = {6} smallCol = {1} gutter = '10px'>

                        <Column zcss = {['']} xLargeCell = {6} smallCell = {1}>
                          <FormGroup>
                            <Checkbox zcss = {['']} isForce checked = {this.state.formForceChecked1} label = 'I accept to terms'
                              onClick = {()=>this.setState({formForceChecked1: !this.state.formForceChecked1})}/>
                          </FormGroup>
                        </Column>
                      </Columns>
                      <Button zcss={['success']} type = 'submit'>Submit</Button>
                      {/*<Button zcss={['cancel']} type = 'reset'>Reset</Button>*/}
                    </Form>
                  </div>
                  <div className = "row">
                    <Box zcss={['bg_primary']}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                    </Box>
                  </div>
                  {/*<div className="row">
                    <NavToggle/>
                    </div>*/}
                    {/*<div className="row">
                      <Columns xLargeCol = {4} largeCol = {3} mediumCol = {2} smallCol = {2}>
                      <Column xLargeCell = {1} largeCell = {1} mediumCell = {1} smallCell = {1}>
                      <VictoryChart style={{
                      parent: { border: "1px solid #ccc", margin: "2%"}
                      }}
                      domainPadding={{ x: 30, y: 30 }}
                      height={600}
                      width={600}
                      events={[{
                      childName: "bar",
                      target: "data",
                      eventHandlers: {
                      onClick: () => {
                      return [
                      {
                      target: "labels",
                      mutation: () => {
                      return { text: "o shit" };
                      }
                      },
                      {
                      childName: "line",
                      target: "data",
                      mutation: () => {
                      return { style: { stroke: "lime" } };
                      }
                      },
                      {
                      childName: "line",
                      target: "labels",
                      mutation: () => {
                      return {
                      style: { fill: "green" },
                      text: "waddup"
                      };
                      }
                      }
                      ];
                      }
                      }
                      }]}
                      >
                      <VictoryBar name="bar"
                      style={{ data: { width: 15, fill: "green" } }}
                      data={[
                      { x: 1, y: 1 },
                      { x: 2, y: 2 },
                      { x: 3, y: 3 },
                      { x: 4, y: 2 },
                      { x: 5, y: 1 },
                      { x: 6, y: 2 },
                      { x: 7, y: 3 },
                      { x: 8, y: 2 },
                      { x: 9, y: 1 },
                      { x: 10, y: 2 },
                      { x: 11, y: 3 },
                      { x: 12, y: 2 },
                      { x: 13, y: 1 }
                      ]}
                      />
                      <VictoryLine name="line"
                      y={() => 0.5}
                      style={{ data: { stroke: "blue", strokeWidth: 5 } }}
                      label="LINE"
                      />
                      </VictoryChart>
                      </Column>
                      <Column xLargeCell = {1} largeCell = {1} mediumCell = {1} smallCell = {1}>
                      <VictoryPie
                      animate={{duration: 1000}}
                      width={400} height={400}
                      data={this.state.data}
                      innerRadius={120}
                      cornerRadius={25}
                      labels={() => null}
                      style={{
                      data: { fill: (d) => {
                      const color = d.y > 30 ? "green" : "red";
                      return d.x === 1 ? color : "transparent";
                      }
                      }
                      }}
                      />
                      <VictoryAnimation duration={1000} data={this.state}>
                      {(newProps) => {
                      return (
                      <VictoryLabel
                      textAnchor="middle" verticalAnchor="middle"
                      x={200} y={200}
                      text={`${Math.round(newProps.percent)}%`}
                      style={{ fontSize: 45 }}
                      />
                      );
                      }}
                      </VictoryAnimation>
                      </Column>
                      <Column xLargeCell = {1} smallCell = {1}>
                      <VictoryChart
                      theme={VictoryTheme.material}
                      animate={{ duration: 1000 }}
                      >
                      <VictoryStack
                      colorScale={"blue"}
                      >
                      {this.state.data.map((data, i) => {
                      return (
                      <VictoryArea
                      key={i}
                      data={[
                      { x: 1, y: 1 },
                      { x: 2, y: 5 },
                      { x: 3, y: 3 },
                      { x: 4, y: 2 },
                      { x: 5, y: 8 }
                      ]}
                      interpolation={"basis"}
                      />
                      );
                      })}
                      </VictoryStack>
                      </VictoryChart>
                      </Column>
                      <Column xLargeCell = {1} largeCell = {1} mediumCell = {1} smallCell = {1}>
                      <VictoryChart height={400} width={400}
                      domainPadding={{x: 50, y: [0, 20]}}
                      scale={{x: "time"}}
                      >
                      <VictoryBar
                      dataComponent={
                      <Bar events={{ onMouseOver: ()=>console.log('zetgoo') }}/>
                      }
                      style={this.state.style}
                      data={[
                      {x: new Date(1986, 1, 1), y: 2},
                      {x: new Date(1996, 1, 1), y: 3},
                      {x: new Date(2006, 1, 1), y: 5},
                      {x: new Date(2016, 1, 1), y: 4}
                      ]}
                      />
                      </VictoryChart>
                      </Column>
                      </Columns>
                      </div>*/}
                    </Column>

                  </Columns>

                </Container>

              </AppContainer>
            )
          }
        }

        const routes = [
          { path: '/', action: () => <App/> },
          { path: '/two', action: () => <h1>Page Two</h1> },
          { path: '*', action: () => <h1>Not Found</h1> }
        ]

        const router = new Router(routes);

        router.resolve({ path: '/' }).then(component => {
          ReactDOM.render(component, document.getElementById('root'));
        })
