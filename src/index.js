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
import { VictoryPie, VictoryChart, VictoryBar, VictoryLine,
  VictoryAnimation, VictoryLabel, VictoryTheme,VictoryStack,
  VictoryArea, Bar} from 'victory';

  import Header from './layout/Header'
  import Footer from './layout/Footer'

  import './style.css'

  class App extends Component{
    constructor(props){
      super(props)

      this.getData = this.getData.bind(this)
      this.showNotify = this.showNotify.bind(this)

      this.state = {inputText: '',
        percent: 25, data: this.getData(0), toggleActive : false}
      }

      componentDidMount() {
        let percent = 25;
        this.setStateInterval = window.setInterval(() => {
          percent += (Math.random() * 25);
          percent = (percent > 100) ? 0 : percent;
          this.setState({
            percent, data: this.getData(percent)
          });
        }, 2000);
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
            <div className='container'>
              <div className="row">
                <Header isActive = {this.state.toggleActive}
                  toogleClick = {()=>this.setState({toggleActive: !this.state.toggleActive})}
                  menu = {[{icon: 'fa fa-home', text: 'menu', to: '/', zcss : ['cl_success']}
                  ,{icon: 'fa fa-user-circle', text: 'login', to: '/login', zcss : ['cl_success']}]}
                  iconMenu = {[{icon: 'fa fa-bell', text: '', action: this.showNotify, zcss : ['cl_success']}]}
                  />
              </div>
              <div className="row">
                <Button zcss = {['success']}>zetgoo</Button>
                <Button zcss = {['info']}>zetgoo</Button>
                <Button zcss = {['primary']}>zetgoo</Button>
                <Button zcss = {['warning']}>zetgoo</Button>
                <Button zcss = {['disable']}>zetgoo</Button>
                <Button zcss = {['cancel']}>zetgoo</Button>
              </div>
              <div className="row">
                <Input zcss = {[]} placeholder = 'zetgoo' value = {this.state.inputText}
                  onChange = {(event,text)=>this.setState({inputText: text})}/>
                <Input zcss = {['disabled']} placeholder = 'disable' value = {this.state.inputText}
                  onChange = {(event,text)=>this.setState({inputText: text})} disabled/>
                <Input zcss = {['error']} placeholder = 'error' value = {this.state.inputText}
                  onChange = {(event,text)=>this.setState({inputText: text})}/>
                <TextField
                  label="Username"
                  errors={[
                    { text: 'it is require' },
                    { text: 'More than 6 characters' },
                  ]}
                  valid={false}
                  help="More than 6 characters"
                  placeholder="username"
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
                <Checkbox zcss = {['']}/>
              </div>
              <div className="row">
                <Radio zcss = {['']}/>
              </div>
              <div className="row">
                <Select options = {[{label: 'bl', value: 1}, {label: 'yl', value: 2}]} zcss = {['']}
                  value = {this.state.selectedValue ? this.state.selectedValue : 1}
                  onChange = {(value)=>this.setState({selectedValue: value})}/>
              </div>
              <div className="row">
                <Tag zcss = {['isSmall']} text = 'zetgoo' onClick = {()=>console.log('trainee')}/>
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
              {/*<div className="row">
                <Infinite/>
                </div>*/}
                <div className="row">
                  <Title zcss = {['f1r']}>Title 1</Title>
                </div>
                <div className="row">
                  <Title zcss = {['f2r']}>Title 2</Title>
                </div>
                <div className="row">
                  <Title zcss = {['f3r']}>Title 3</Title>
                </div>
                <div className="row">
                  <SubTitle zcss = {['f1r']}>SubTitle 1</SubTitle>
                </div>
                <div className="row">
                  <SubTitle zcss = {['f2r']}>SubTitle 2</SubTitle>
                </div>
                <div className="row">
                  <SubTitle zcss = {['f3r']}>SubTitle 3</SubTitle>
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
                {/*<div className="row">
                  <NavToggle/>
                  </div>*/}
                  <div className="row">
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
                </div>
              </div>
            </AppContainer>)
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
