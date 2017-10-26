import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router from 'universal-router';
import AppContainer from './components/AppContainer';
import Button from './components/Button';
import Input from './components/Input';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import Select from './components/Select';
import Tag from './components/Tag';
import Switch from './components/Switch';
import Infinite from './components/Infinite';
import Columns from './components/Columns';
import Column from './components/Column';
import Icon from './components/Icon';
import Title from './components/Title';
import SubTitle from './components/SubTitle';
import ControlLabel from './components/ControlLabel';
import { Tabs, TabGroup, Tab } from './components/Tabs';
import NavToggle from './components/NavToggle';
import TextField from './components/TextField';
import Notification from './components/Notification';
import Form from './components/Form';
import FormGroup from './components/FormGroup';
import Box from './components/Box';
import Container from './components/Container';
import Drawer from './components/Drawer';
import SnackBar from './components/SnackBar';
import Addons from './components/Addons';
import Image from './components/Image';
import Avatar from './components/Avatar';
import Modal from './components/Modal';
import Popover from './components/Popover';
import Tooltip from './components/Tooltip';
import Video from './components/Video';
import ZCaptcha from './components/ZCaptcha';

import {
  VictoryPie,
  VictoryChart,
  VictoryBar,
  VictoryLine,
  VictoryAnimation,
  VictoryLabel,
  VictoryTheme,
  VictoryStack,
  VictoryArea,
  Bar,
} from 'victory';

import Header from './layout/Header';
import Footer from './layout/Footer';
import LeftMenu from './layout/LeftMenu';
import MagicEye from './layout/MagicEye';

import './style.css';
import avtDemo from './';

const rowStyle = { margin: '5px 0' };
const boxStyle = {
  margin: '0 5px 5px 0',
  display: 'inline-flex',
};

class App extends Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
    this.showNotify = this.showNotify.bind(this);

    this.state = {
      inputText: '',
      percent: 25,
      data: this.getData(0),
      toggleActive: false,
      isLogined: false,
      formText: '',
      formEmail: '',
      formForceChecked: false,
      formForceChecked1: false,
      isSearching: false,
      url:
        'data:image/webp;base64,UklGRnoAAABXRUJQVlA4IG4AAABQBQCdASoqABwAP/3+/3+/urWyMBVYA/A/iWIAAR7p/Y3etgh4KD8QqXEZj6waibITSIAA/cndnUz4/z4LEgByYUql75Cq/12W33KFIKQpc8L0Dt19C7NFXin0tKlxd70dzSF978msbuqLjDgAAA==',
      tabIndex: 2,
      openModal: false,
      popover: false,
      popoverTop: false,
      popoverRight: false,
      popoverBottom: false,
      popoverLeft: false,
      tooltip: false,
      tooltipTop: false,
      tooltipRight: false,
      tooltipBottom: false,
      tooltipLeft: false,
    };
  }

  componentDidMount() {
    const percent = 25;
    // this.setStateInterval = window.setInterval(() => {
    //   percent += (Math.random() * 25);
    //   percent = (percent > 100) ? 0 : percent;
    //   this.setState({
    //     percent, data: this.getData(percent)
    //   });
    // }, 2000);
    setTimeout(
      () =>
        this.setState({
          url:
            'https://cdn-images-1.medium.com/max/1800/1*sg-uLNm73whmdOgKlrQdZA.jpeg',
        }),
      2000,
    );
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }

  showNotify() {
    console.log('bell clicked!');
  }

  render() {
    return (
      <AppContainer>
        <Container>
          <Header
            isActive={this.state.toggleActive}
            userLogined={{
              userName: 'Ballard',
              avatar:
                'https://avatars1.githubusercontent.com/u/6657580?v=4&s=80',
            }}
            isSearching={this.state.isSearching}
            search={() =>
              this.setState({ isSearching: !this.state.isSearching })}
            toogleClick={() =>
              this.setState({ toggleActive: !this.state.toggleActive })}
            menu={[
              {
                icon: 'fa fa-home',
                text: 'Menu',
                to: '/',
                zcss: [''],
              },
              {
                icon: 'fa fa-user-circle',
                text: 'Login',
                to: '/login',
                zcss: [''],
              },
            ]}
            menuNoneUser={[
              {
                icon: 'fa fa-home',
                text: 'Register',
                to: '/register',
                zcss: ['cl_success'],
              },
              {
                icon: 'fa fa-user-circle',
                text: 'Login',
                to: '/login',
                zcss: ['cl_success'],
              },
            ]}
            iconMenuUser={[
              {
                icon: 'fa fa-search',
                text: '',
                action: this.showNotify,
                zcss: ['f.8125r'],
              },
              {
                icon: 'fa fa-bell',
                text: '',
                action: this.showNotify,
                zcss: ['f.8125r'],
              },
            ]}
          />
        </Container>
        <Container>
          <Columns xLargeCol={6} smallCol={1} gutter="8px">
            <Column zcss={['']} xLargeCell={2} smallCell={1}>
              <LeftMenu
                data={[
                  {
                    groupLabel: 'Main',
                    childMenu: [
                      {
                        icon: 'aws.fa-user-circle-o',
                        label: '1',
                        rightActived: 'aws.fa-user-circle-o',
                        rightNoAcitved: 'aws.fa-user-circle-o',
                        isActived: true,
                        type: 'link',
                        uri: 'http://vision.zetgoo.com/face/detect/2017',
                        childMenu: [
                          {
                            icon: 'aws.fa-user-circle-o',
                            label: '1.1',
                            rightActived: 'aws.fa-user-circle-o',
                            rightNoAcitved: 'aws.fa-user-circle-o',
                            isActived: true,
                            type: 'link',
                            uri: 'http://vision.zetgoo.com/face/detect/2017',
                            childMenu: [
                              {
                                icon: 'aws.fa-user-circle-o',
                                label: '1.1.1',
                                rightActived: 'aws.fa-user-circle-o',
                                rightNoAcitved: 'aws.fa-user-circle-o',
                                isActived: true,
                                type: 'link',
                                uri:
                                  'http://vision.zetgoo.com/face/detect/2017',
                              },
                              {
                                icon: 'aws.fa-user-circle-o',
                                label: '1.1.2',
                                rightActived: 'aws.fa-user-circle-o',
                                rightNoAcitved: 'aws.fa-user-circle-o',
                                isActived: true,
                                type: 'link',
                                uri:
                                  'http://vision.zetgoo.com/face/detect/2017',
                              },
                            ],
                          },
                          {
                            icon: 'aws.fa-user-circle-o',
                            label: '1.2',
                            rightActived: 'aws.fa-user-circle-o',
                            rightNoAcitved: 'aws.fa-user-circle-o',
                            isActived: true,
                            type: 'link',
                            uri: 'http://vision.zetgoo.com/face/detect/2017',
                            childMenu: [
                              {
                                icon: 'aws.fa-user-circle-o',
                                label: '1.2.1',
                                rightActived: 'aws.fa-user-circle-o',
                                rightNoAcitved: 'aws.fa-user-circle-o',
                                isActived: true,
                                type: 'link',
                                uri:
                                  'http://vision.zetgoo.com/face/detect/2017',
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ]}
              />
            </Column>
            <Column zcss={['']} xLargeCell={4} smallCell={1}>
              {/* <div style={rowStyle} style = {{height: 400, width: '100%'}}>
            <MagicEye url = {this.state.url} />
            </div> */}
              <div style={rowStyle}>
                <div style={boxStyle}>
                  <Button zcss={['']}>Nomal</Button>
                </div>
                <div style={boxStyle}>
                  <Button zcss={['white']}>white</Button>
                </div>
                <div style={boxStyle}>
                  <Button zcss={['light']}>light</Button>
                </div>
                <div style={boxStyle}>
                  <Button zcss={['black']}>black</Button>
                </div>
                <div style={boxStyle}>
                  <Button zcss={['isLink']}>Link</Button>
                </div>
                <div style={boxStyle}>
                  <Button zcss={['primary']}>primary</Button>
                </div>
                <div style={boxStyle}>
                  <Button zcss={['info']}>info</Button>
                </div>
                <div style={boxStyle}>
                  <Button zcss={['success']}>success</Button>
                </div>
                <div style={boxStyle}>
                  <Button zcss={['warning']}>warning</Button>
                </div>
                <div style={boxStyle}>
                  <Button zcss={['danger']}>danger</Button>
                </div>
                <div style={boxStyle}>
                  <Button zcss={['disable']}>disable</Button>
                </div>
                <div style={boxStyle}>
                  <Button zcss={['cancel']}>cancel</Button>
                </div>
                <div style={boxStyle}>
                  <Button zcss={['isLoading']}>loading</Button>
                </div>
              </div>

              <div style={rowStyle}>
                <Drawer
                  zFront={<Button zcss={['primary']}>Drawer Click!</Button>}
                >
                  <LeftMenu />
                </Drawer>
              </div>

              <div style={rowStyle}>
                <SnackBar isShow={this.state.snackBarIsShow} timeout={5000} />
                <Button
                  zcss={['primary']}
                  onClick={() =>
                    this.setState({
                      snackBarIsShow: !this.state.snackBarIsShow,
                    })}
                >
                  SnackBar Click!
                </Button>
              </div>

              <div style={rowStyle}>
                <div style={{ ...boxStyle, position: 'relative' }}>
                  <Popover
                    isShow={this.state.popover}
                    timeout={5000}
                    zFront={<Button zcss={['']}>Popover Click!</Button>}
                  >
                    <h3>Zetgoo</h3>
                  </Popover>
                </div>
                <div style={boxStyle}>
                  <Popover
                    isShow={this.state.popoverTop}
                    timeout={5000}
                    zFront={
                      <Button
                        zcss={['']}
                        onClick={() =>
                          this.setState({ popover: !this.state.popover })}
                      >
                        Top Click!
                      </Button>
                    }
                  >
                    <h3>Zetgoo</h3>
                  </Popover>
                </div>
                <div style={boxStyle}>
                  <Popover
                    isShow={this.state.popoverRight}
                    timeout={5000}
                    zFront={
                      <Button
                        zcss={['']}
                        onClick={() =>
                          this.setState({ popover: !this.state.popover })}
                      >
                        Right Click!
                      </Button>
                    }
                  >
                    <h3>Zetgoo</h3>
                  </Popover>
                </div>
                <div style={boxStyle}>
                  <Popover
                    isShow={this.state.popoverBottom}
                    timeout={5000}
                    zFront={
                      <Button
                        zcss={['']}
                        onClick={() =>
                          this.setState({ popover: !this.state.popover })}
                      >
                        Bottom Click!
                      </Button>
                    }
                  >
                    <h3>Zetgoo</h3>
                  </Popover>
                </div>
                <div style={boxStyle}>
                  <Popover
                    isShow={this.state.popoverLeft}
                    timeout={5000}
                    onClose={() => this.setState({ popoverLeft: false })}
                    zFront={
                      <Button
                        zcss={['']}
                        onClick={() =>
                          this.setState({ popover: !this.state.popover })}
                      >
                        Left Click!
                      </Button>
                    }
                  >
                    <h3>Zetgoo</h3>
                  </Popover>
                </div>
              </div>

              <div style={rowStyle}>
                <div style={boxStyle}>
                  <Tooltip isShow={this.state.tooltip} timeout={5000} />
                  <Button
                    zcss={['']}
                    onClick={() =>
                      this.setState({ tooltip: !this.state.tooltip })}
                  >
                    Tooltip Click!
                  </Button>
                </div>
                <div style={boxStyle}>
                  <Tooltip isShow={this.state.tooltipTop} timeout={5000} />
                  <Button
                    zcss={['primary']}
                    onClick={() =>
                      this.setState({ tooltipTop: !this.state.tooltipTop })}
                  >
                    Top Click!
                  </Button>
                </div>
                <div style={boxStyle}>
                  <Tooltip isShow={this.state.tooltipRight} timeout={5000} />
                  <Button
                    zcss={['danger']}
                    onClick={() =>
                      this.setState({ tooltipRight: !this.state.tooltipRight })}
                  >
                    Right Click!
                  </Button>
                </div>
                <div style={boxStyle}>
                  <Tooltip isShow={this.state.tooltipBottom} timeout={5000} />
                  <Button
                    zcss={['warning']}
                    onClick={() =>
                      this.setState({
                        tooltipBottom: !this.state.tooltipBottom,
                      })}
                  >
                    Bottom Click!
                  </Button>
                </div>
                <div style={boxStyle}>
                  <Tooltip isShow={this.state.tooltipLeft} timeout={5000} />
                  <Button
                    zcss={['success']}
                    onClick={() =>
                      this.setState({ tooltipLeft: !this.state.tooltipLeft })}
                  >
                    Left Click!
                  </Button>
                </div>
              </div>

              <div style={rowStyle}>
                <Modal
                  action={[
                    {
                      label: 'Cancel',
                      zcss: ['success'],
                      onClick: () => this.setState({ openModal: false }),
                    },
                    {
                      label: 'Save',
                      zcss: ['success'],
                      onClick: () => this.console('zetgoo'),
                    },
                  ]}
                  zFront={<Button zcss={['success']}>Modal Click!</Button>}
                  title="Welcome to zetgoo"
                >
                  <h2>Welcome to zetgoo</h2>
                </Modal>
              </div>

              <div style={rowStyle}>
                <Input
                  zcss={[]}
                  placeholder="zetgoo"
                  value={this.state.inputText}
                  onChange={(event, text) => this.setState({ inputText: text })}
                />
              </div>

              <div style={rowStyle}>
                <Input
                  zcss={['readonly']}
                  placeholder="read only"
                  readOnly
                  value={this.state.inputText}
                  onChange={(event, text) => this.setState({ inputText: text })}
                />
              </div>

              <div style={rowStyle}>
                <Input
                  zcss={['disabled']}
                  placeholder="disable"
                  value={this.state.inputText}
                  onChange={(event, text) => this.setState({ inputText: text })}
                  disabled
                />
              </div>
              <div style={rowStyle}>
                <Input
                  zcss={['error']}
                  placeholder="input error"
                  value={this.state.inputText}
                  onChange={(event, text) => this.setState({ inputText: text })}
                />
              </div>
              <div style={rowStyle}>
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
              </div>
              <div style={rowStyle}>
                <TextField
                  label="Password"
                  placeholder="password"
                  valid
                  value="Zetgoo"
                  help="More than 6 characters"
                  type="password"
                />
              </div>
              <div style={rowStyle}>
                <Checkbox zcss={['']} label="zetgoo" name="zetgooCheckbox" />
                <Checkbox zcss={['']} label="zetgoo" name="zetgooCheckbox" />
                <Checkbox zcss={['']} label="zetgoo" name="zetgooCheckbox" />
                <Checkbox zcss={['']} label="zetgoo" name="zetgooCheckbox" />
                <Checkbox zcss={['']} label="zetgoo" name="zetgooCheckbox" />
              </div>
              <div style={rowStyle}>
                <Radio zcss={['']} label="zetgoo" name="zetgooRadio" />
                <Radio zcss={['']} label="zetgoo" name="zetgooRadio" />
                <Radio zcss={['']} label="zetgoo" name="zetgooRadio" />
                <Radio zcss={['']} label="zetgoo" name="zetgooRadio" />
                <Radio zcss={['']} label="zetgoo" name="zetgooRadio" />
              </div>
              <div style={rowStyle}>
                <Video />
              </div>
              <div style={rowStyle}>
                <ZCaptcha />
              </div>
              <div style={rowStyle}>
                <Tabs
                  index={this.state.tabIndex}
                  onChange={index => this.setState({ tabIndex: index })}
                >
                  <Tab zcss={['']} label="Primary">
                    <h2>Primary content</h2>
                  </Tab>
                  <Tab
                    zcss={['']}
                    label="Secondary"
                    onActive={this.handleActive}
                  >
                    <h2>Secondary content</h2>
                  </Tab>
                  <Tab zcss={['']} label="Third" disabled>
                    <h2>Disabled content</h2>
                  </Tab>
                  <Tab zcss={['']} label="Fourth">
                    <h2>Fourth content hidden</h2>
                  </Tab>
                  <Tab zcss={['']} label="Fifth">
                    <h2>Fifth content</h2>
                  </Tab>
                </Tabs>
              </div>
              <div style={rowStyle}>
                <Select
                  options={[
                    { label: 'bl', value: 1 },
                    { label: 'yl', value: 2 },
                  ]}
                  zcss={['']}
                  value={
                    this.state.selectedValue ? this.state.selectedValue : 1
                  }
                  onChange={value => this.setState({ selectedValue: value })}
                />
              </div>
              <div style={rowStyle}>
                <div style={boxStyle}>
                  <Tag
                    zcss={['isSmall', 'success']}
                    text="zetgoo"
                    icon="fa fa-remove"
                    onClick={() => console.log('trainee')}
                  />
                </div>
                <div style={boxStyle}>
                  <Tag
                    zcss={['isMedium', 'primary']}
                    text="zetgoo"
                    icon="fa fa-remove"
                    onClick={() => console.log('trainee')}
                  />
                </div>
                <div style={boxStyle}>
                  <Tag
                    zcss={['isLarge', 'cancel']}
                    text="zetgoo"
                    icon="fa fa-remove"
                    onClick={() => console.log('trainee')}
                  />
                </div>
              </div>
              <div style={rowStyle}>
                <Switch />
              </div>
              <div style={rowStyle}>
                <Columns xLargeCol={6} smallCol={1} gutter="10px">
                  <Column zcss={['bg_success']} xLargeCell={2} smallCell={1}>
                    First column
                  </Column>
                  <Column zcss={['bg_danger']} xLargeCell={2} smallCell={1}>
                    Second column
                  </Column>
                  <Column zcss={['bg_primary']} xLargeCell={2} smallCell={1}>
                    Third column
                  </Column>
                </Columns>
              </div>
              <div style={rowStyle}>
                <Icon zcss={['cl_primary']} icon="fa fa-home" text="zetgoo" />
                <Icon zcss={['cl_success']} icon="fa fa-check" />
                <Icon zcss={['cl_success']} icon="fa fa-check-circle" />
                <Icon zcss={['cl_danger']} icon="fa fa-exclamation-circle" />
              </div>
              <div style={rowStyle}>
                <Avatar
                  image="https://placeimg.com/80/80/animals"
                  zcss={['isCircle']}
                />
                <Avatar icon="fa fa-play-circle-o" zcss={['isCircle']} />
                <Avatar text="BL" zcss={['isCircle']} />
                <Avatar image="https://placeimg.com/80/80/animals" zcss={[]} />
                <Avatar icon="fa fa-play-circle-o" zcss={[]} />
                <Avatar text="BL" zcss={[]} />
              </div>

              {/* <div style={rowStyle}>
              <Infinite/>
              </div> */}
              <div style={rowStyle}>
                <div style={boxStyle}>
                  <Title zcss={['is1']}>Title 1</Title>
                </div>
                <div style={boxStyle}>
                  <Title zcss={['is2']}>Title 2</Title>
                </div>
                <div style={boxStyle}>
                  <Title zcss={['is3']}>Title 3</Title>
                </div>
                <div style={boxStyle}>
                  <Title zcss={['is4']}>Title 4</Title>
                </div>
                <div style={boxStyle}>
                  <Title zcss={['is5']}>Title 5</Title>
                </div>
                <div style={boxStyle}>
                  <Title zcss={['is6']}>Title 6</Title>
                </div>
              </div>
              <div style={rowStyle}>
                <div style={boxStyle}>
                  <SubTitle zcss={['is1']}>SubTitle 1</SubTitle>
                </div>
                <div style={boxStyle}>
                  <SubTitle zcss={['is2']}>SubTitle 2</SubTitle>
                </div>
                <div style={boxStyle}>
                  <SubTitle zcss={['is3']}>SubTitle 3</SubTitle>
                </div>
                <div style={boxStyle}>
                  <SubTitle zcss={['is4']}>SubTitle 4</SubTitle>
                </div>
                <div style={boxStyle}>
                  <SubTitle zcss={['is5']}>SubTitle 5</SubTitle>
                </div>
                <div style={boxStyle}>
                  <SubTitle zcss={['is6']}>SubTitle 6</SubTitle>
                </div>
              </div>

              <div style={rowStyle}>
                <div style={boxStyle}>
                  <ControlLabel zcss={['f1e']}>ControlLabel</ControlLabel>
                </div>
                <div style={boxStyle}>
                  <ControlLabel zcss={['f2e']}>ControlLabel</ControlLabel>
                </div>
                <div style={boxStyle}>
                  <ControlLabel zcss={['f3e']}>ControlLabel</ControlLabel>
                </div>
              </div>

              <div style={rowStyle}>
                <Notification
                  zcss={['bg_danger']}
                  enableCloseButton
                  closeButtonProps={{ onClick: () => console.log('clicked') }}
                >
                  lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
                  ipsum dolor sit amet, consectetur adipiscing elit
                </Notification>
              </div>

              <div style={rowStyle}>
                <Columns xLargeCol={6} smallCol={1} gutter="10px">
                  <Column zcss={['']} xLargeCell={3} smallCell={1}>
                    <Addons hasAddonsRight>
                      <Button zcss={['primary', 'bd_rTR_0', 'bd_rBR_0']}>
                        Transfer
                      </Button>
                      <Input
                        zcss={['bd_rTL_0', 'bd_rBL_0']}
                        placeholder="Amount of money"
                      />
                    </Addons>
                  </Column>
                  <Column zcss={['']} xLargeCell={3} smallCell={1}>
                    <Addons hasAddonsRight>
                      <Input
                        zcss={['bd_rTR_0', 'bd_rBR_0']}
                        placeholder="Amount of money"
                      />
                      <Button zcss={['light', 'bd_rTL_0', 'bd_rBL_0']}>
                        Transfer
                      </Button>
                    </Addons>
                  </Column>
                </Columns>
              </div>

              <div style={rowStyle}>
                <Form
                  schema={{
                    username: {
                      type: 'text',
                      maxLength: 20,
                      minLength: 0,
                      isRequire: true,
                      message: {
                        isRequire: 'Username is require',
                        length: 'Length of Username between 0 and 20',
                      },
                    },
                    email: {
                      type: 'email',
                      maxLength: 20,
                      minLength: 0,
                      isRequire: true,
                      message: {
                        isRequire: 'Email is require',
                        length: 'Length of Email between 0 and 20',
                      },
                    },
                  }}
                  onSubmit={() => console.log('form submit')}
                  onReset={() => console.log('form reset')}
                >
                  <FormGroup>
                    <Columns xLargeCol={6} smallCol={1} gutter="10px">
                      <Column zcss={['']} xLargeCell={3} smallCell={1}>
                        <TextField
                          name="username"
                          label="Username"
                          errors={[]}
                          valid={false}
                          help="More than 6 characters"
                          placeholder="username"
                          type="text"
                          value={this.state.formText}
                          onChange={e =>
                            this.setState({ formText: e.target.value })}
                        />
                      </Column>
                      <Column zcss={['']} xLargeCell={3} smallCell={1}>
                        <TextField
                          name="username"
                          label="Username"
                          errors={[]}
                          valid={false}
                          help="More than 6 characters"
                          placeholder="username"
                          type="text"
                          value={this.state.formText}
                          onChange={e =>
                            this.setState({ formText: e.target.value })}
                        />
                      </Column>
                    </Columns>
                  </FormGroup>
                  <Columns xLargeCol={6} smallCol={1} gutter="10px">
                    <Column zcss={['']} xLargeCell={3} smallCell={1}>
                      <FormGroup>
                        <TextField
                          name="email"
                          label="Username"
                          errors={[]}
                          valid={false}
                          help="More than 6 characters"
                          placeholder="username"
                          type="text"
                          value={this.state.formEmail}
                          onChange={e =>
                            this.setState({ formEmail: e.target.value })}
                        />
                        <TextField
                          name="email"
                          label="Username"
                          errors={[]}
                          valid={false}
                          help="More than 6 characters"
                          placeholder="username"
                          type="text"
                          value={this.state.formEmail}
                          onChange={e =>
                            this.setState({ formEmail: e.target.value })}
                        />
                      </FormGroup>
                    </Column>
                  </Columns>
                  <Columns xLargeCol={6} smallCol={1} gutter="10px">
                    <Column zcss={['']} xLargeCell={6} smallCell={1}>
                      <FormGroup>
                        <Checkbox
                          zcss={['']}
                          isForce
                          checked={this.state.formForceChecked1}
                          label="I accept to terms"
                          onClick={() =>
                            this.setState({
                              formForceChecked1: !this.state.formForceChecked1,
                            })}
                        />
                      </FormGroup>
                    </Column>
                  </Columns>
                  <Button zcss={['success']} type="submit">
                    Submit
                  </Button>
                  {/* <Button zcss={['cancel']} type = 'reset'>Reset</Button> */}
                </Form>
              </div>
              <div style={rowStyle}>
                <Box zcss={['bg_primary']}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur sit amet massa fringilla egestas. Nullam
                  condimentum luctus turpis.
                </Box>
              </div>
              <div style={rowStyle}>
                <Image
                  zcss={[]}
                  src="http://placehold.it/480x480"
                  alt="Zetgoo"
                  title="Zetgoo"
                  width={16}
                  ratio={1}
                />
              </div>
              <div style={rowStyle}>
                <Image
                  zcss={[]}
                  src="http://placehold.it/480x480"
                  alt="Zetgoo"
                  title="Zetgoo"
                  width={24}
                  ratio={1}
                />
              </div>
              <div style={rowStyle}>
                <Image
                  zcss={[]}
                  src="http://placehold.it/480x480"
                  alt="Zetgoo"
                  title="Zetgoo"
                  width={32}
                  ratio={1}
                />
              </div>
              <div style={rowStyle}>
                <Image
                  zcss={[]}
                  src="http://placehold.it/480x480"
                  alt="Zetgoo"
                  title="Zetgoo"
                  width={48}
                  ratio={1}
                />
              </div>
              <div style={rowStyle}>
                <Image
                  zcss={[]}
                  src="http://placehold.it/480x480"
                  alt="Zetgoo"
                  title="Zetgoo"
                  width={64}
                  ratio={1}
                />
              </div>
              <div style={rowStyle}>
                <Image
                  zcss={[]}
                  src="http://placehold.it/480x480"
                  alt="Zetgoo"
                  title="Zetgoo"
                  width={96}
                  ratio={1}
                />
              </div>
              <div style={rowStyle}>
                <Image
                  zcss={[]}
                  src="http://placehold.it/480x480"
                  alt="Zetgoo"
                  title="Zetgoo"
                  width={128}
                  ratio={1}
                />
              </div>
              <div style={rowStyle}>
                <Image
                  zcss={[]}
                  src="http://placehold.it/480x480"
                  alt="Zetgoo"
                  title="Zetgoo"
                  width={256}
                  ratio={1}
                />
              </div>
              <div style={rowStyle}>
                <Image
                  zcss={[]}
                  src="http://placehold.it/480x480"
                  alt="Zetgoo"
                  title="Zetgoo"
                  width={320}
                  ratio={1}
                />
              </div>
              <div style={rowStyle}>
                <Image
                  zcss={[]}
                  src="http://placehold.it/480x480"
                  alt="Zetgoo"
                  title="Zetgoo"
                  width={480}
                  ratio={1}
                />
              </div>
              <div style={rowStyle}>
                <Image
                  zcss={['isCircle']}
                  src="http://placehold.it/480x480"
                  alt="Zetgoo"
                  title="Zetgoo"
                  width={480}
                  ratio={1}
                />
              </div>
              <div style={rowStyle}>
                <Image
                  zcss={[]}
                  src="http://placehold.it/480x480"
                  alt="Zetgoo"
                  title="Zetgoo"
                  width={480}
                  ratio={4 / 3}
                />
              </div>
              <div style={rowStyle}>
                <Image
                  zcss={[]}
                  src="http://placehold.it/480x480"
                  alt="Zetgoo"
                  title="Zetgoo"
                  width={480}
                  ratio={3 / 2}
                />
              </div>
              <div style={rowStyle}>
                <Image
                  zcss={[]}
                  src="http://placehold.it/480x480"
                  alt="Zetgoo"
                  title="Zetgoo"
                  width={480}
                  ratio={16 / 9}
                />
              </div>
              <div style={rowStyle}>
                <Image
                  zcss={[]}
                  src="http://placehold.it/480x480"
                  alt="Zetgoo"
                  title="Zetgoo"
                  width={480}
                  ratio={2}
                />
              </div>
              {/* <div style={rowStyle}>
                <NavToggle/>
                </div> */}
              {/* <div style={rowStyle}>
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
                  </div> */}
            </Column>
          </Columns>
        </Container>
      </AppContainer>
    );
  }
}

const routes = [
  { path: '/', action: () => <App /> },
  { path: '/two', action: () => <h1>Page Two</h1> },
  { path: '*', action: () => <h1>Not Found</h1> },
];

const router = new Router(routes);

router.resolve({ path: '/' }).then(component => {
  ReactDOM.render(component, document.getElementById('root'));
});
