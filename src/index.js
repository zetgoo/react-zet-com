import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router from 'universal-router';
import moment from 'moment';

import AppContainer from './components/AppContainer';
import Button from './components/Button';
import Link from './components/Link';
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
import { Tabs, Tab } from './components/Tabs';
import NavToggle from './components/NavToggle';
import TextField from './components/TextField';
import Notification from './components/Notification';
import Form from './components/Form';
import FormGroup from './components/FormGroup';
import Box from './components/Box';
import Sack from './components/Sack';
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
import DayPicker from './components/DayPicker';
import DayPickerInput from './components/DayPickerInput';
import PaginationExample from './components/Table';

import Chart from './components/Chart/Chart';
import ChartPie from './components/Chart/ChartPie';
import ChartBar from './components/Chart/ChartBar';
import ChartLine from './components/Chart/ChartLine';
import ChartAnimation from './components/Chart/ChartAnimation';
import ChartLabel from './components/Chart/ChartLabel';
import ChartTheme from './components/Chart/ChartTheme';
import ChartStack from './components/Chart/ChartStack';
import ChartArea from './components/Chart/ChartArea';
import Bar from './components/Chart/Bar';
import ChartVoronoiContainer from './components/Chart/ChartVoronoiContainer';
import ChartTooltip from './components/Chart/ChartTooltip';

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

const DAY_FORMAT = 'DD/MM/YYYY';

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
      notifications: [
        { content: '', link: '/a' },
        { content: '', link: '/b' },
        { content: '', link: '/c' },
        { content: '', link: '/d' },
      ],
      selectedDay: undefined,
      isDisabled: false,
    };
  }

  componentDidMount() {
    const percent = 25;
    this.setState({
      percent,
      data: this.getData(percent),
    });
    // this.setStateInterval = window.setInterval(() => {
    //   percent += Math.random() * 25;
    //   percent = percent > 100 ? 0 : percent;
    //   this.setState({
    //     percent,
    //     data: this.getData(percent),
    //   });
    // }, 200000);
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

  handleDayChange = (selectedDay, modifiers) => {
    this.setState({
      selectedDay,
      isDisabled: modifiers.disabled,
    });
  };

  getData(percent) {
    return [{ x: 1, y: percent }, { x: 2, y: 100 - percent }];
  }

  showNotify() {
    console.log('bell clicked!');
  }

  render() {
    const { selectedDay, isDisabled } = this.state;
    const formattedDay = selectedDay
      ? moment(selectedDay).format(DAY_FORMAT)
      : '';

    const dayPickerProps = {
      todayButton: 'Go to Today',
      disabledDays: {
        daysOfWeek: [0, 6],
      },
      enableOutsideDays: true,
      modifiers: {
        monday: { daysOfWeek: [1] },
      },
    };

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
            zBackUser={
              <Sack zcss={['mg1e', 'ta_l']} style={{ width: 220 }}>
                <ControlLabel zcss={['f1e']}>Ballard</ControlLabel>
                <Link href="https://github.com">github</Link>
                <Link to="profile">
                  <Icon zcss={['']} icon="fa fa-user" text="Setting" />
                </Link>
                <Sack>
                  <Button
                    zcss={['danger']}
                    onClick={() => console.log('logout')}
                  >
                    Logout
                  </Button>
                </Sack>
              </Sack>
            }
            menu={[
              {
                icon: 'fa fa-home',
                text: 'Create Project',
                to: '/project/create',
                zcss: [''],
              },
              {
                icon: 'fa fa-user-circle',
                text: 'Document',
                to: '/document',
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
              // {
              //   type: 'link',
              //   icon: 'fa fa-plus',
              //   text: 'Create Project',
              //   link: '/project/create',
              //   zcss: ['f.8125r'],
              // },
              {
                type: 'action',
                icon: 'fa fa-plus',
                text: '',
                onClick: () => console.log('Zetgoo'),
                zcss: ['f.8125r'],
              },
              {
                type: 'popover',
                icon: 'fa fa-bell',
                info: (
                  <Sack
                    zcss={['ps_a', 'bg_success', 'cl_no', 'f.5e']}
                    style={{ top: 18, left: 5, padding: '0 1px' }}
                  >
                    777
                  </Sack>
                ),
                text: '',
                zcss: ['f.8125r'],
                zBack: (
                  <Sack zcss={['mg1e', 'ta_l']} style={{ width: 220 }}>
                    <Sack zcss={['dp_ib']}>
                      <ControlLabel zcss={['f1e', 'dp_ib']}>
                        Notifications
                      </ControlLabel>
                      <Button zcss={['isLink', 'dp_ib', 'fr']}>
                        Mark all as read
                      </Button>
                    </Sack>
                    <Sack>
                      {this.state.notifications.map(item => (
                        <Link to={item.link} zcss={['dp_b']}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit.
                        </Link>
                      ))}
                    </Sack>
                    <Sack>
                      <Link to="/notifications">
                        <Button zcss={['isLink']}>see all</Button>
                      </Link>
                    </Sack>
                  </Sack>
                ),
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
                    zcss={['']}
                    isShow={this.state.popover}
                    zFront={<Button zcss={['']}>Popover Click!</Button>}
                  >
                    <h3>Zetgoo</h3>
                  </Popover>
                </div>
                <div style={boxStyle}>
                  <Popover
                    zcss={['isTop']}
                    isShow={this.state.popoverTop}
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
                    <div>Zetgoo jdlkfe dklje fkdjlsei dlkfjsl</div>
                  </Popover>
                </div>
                <div style={boxStyle}>
                  <Popover
                    zcss={['isRight']}
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
                    zcss={['isBottom']}
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
                    zcss={['isLeft']}
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
                  <Tooltip
                    zcss={['']}
                    isShow={this.state.popoverLeft}
                    timeout={5000}
                    onClose={() => this.setState({ popoverLeft: false })}
                    zFront={<Button zcss={['']}>Tooltip Hover!</Button>}
                  >
                    <h3>Zetgoo</h3>
                  </Tooltip>
                </div>
                <div style={boxStyle}>
                  <Tooltip
                    zcss={['isTop']}
                    isShow={this.state.popoverLeft}
                    timeout={5000}
                    onClose={() => this.setState({ popoverLeft: false })}
                    zFront={<Button zcss={['']}>Tooltip Top Hover!</Button>}
                  >
                    <h3>Zetgoo</h3>
                  </Tooltip>
                </div>
                <div style={boxStyle}>
                  <Tooltip
                    zcss={['isRight']}
                    isShow={this.state.popoverLeft}
                    timeout={5000}
                    onClose={() => this.setState({ popoverLeft: false })}
                    zFront={<Button zcss={['']}>Tooltip Right Hover!</Button>}
                  >
                    <h3>Zetgoo</h3>
                  </Tooltip>
                </div>
                <div style={boxStyle}>
                  <Tooltip
                    zcss={['isBottom']}
                    isShow={this.state.popoverLeft}
                    timeout={5000}
                    onClose={() => this.setState({ popoverLeft: false })}
                    zFront={<Button zcss={['']}>Tooltip Bottom Hover!</Button>}
                  >
                    <h3>Zetgoo</h3>
                  </Tooltip>
                </div>
                <div style={boxStyle}>
                  <Tooltip
                    zcss={['isLeft']}
                    isShow={this.state.popoverLeft}
                    timeout={5000}
                    onClose={() => this.setState({ popoverLeft: false })}
                    zFront={<Button zcss={['']}>Tooltip Left Hover!</Button>}
                  >
                    <h3>Zetgoo</h3>
                  </Tooltip>
                </div>
              </div>

              <div style={rowStyle}>
                <Modal
                  alignAction="center"
                  action={[
                    {
                      label: 'Save',
                      zcss: ['success'],
                      onClick: () => this.console('zetgoo'),
                    },
                  ]}
                  zFront={<Button zcss={['success']}>Modal Click!</Button>}
                  title="Welcome to zetgoo"
                >
                  <h2>We are king</h2>
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
                  zcss={['readOnly']}
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
                <Avatar src="https://placeimg.com/80/80/animals" zcss={[]} />
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
                <DayPicker onDayClick={day => alert(day)} />
              </div>

              <div style={rowStyle}>
                <p>
                  {!selectedDay && '🤔 Type or pick a valid day'}
                  {selectedDay && isDisabled && '😡 This day is disabled'}
                  {selectedDay && !isDisabled && `😄 You chose ${formattedDay}`}
                </p>
                <DayPickerInput
                  value={formattedDay}
                  onDayChange={this.handleDayChange}
                  format={DAY_FORMAT}
                  placeholder={`E.g. ${moment()
                    .locale('en')
                    .format(DAY_FORMAT)}`}
                  dayPickerProps={dayPickerProps}
                />
              </div>

              <div style={rowStyle}>
                <PaginationExample />
              </div>

              <div style={rowStyle}>
                <Columns xLargeCol={4} largeCol={3} mediumCol={2} smallCol={2}>
                  <Column
                    xLargeCell={1}
                    largeCell={1}
                    mediumCell={1}
                    smallCell={1}
                  >
                    <Chart
                      height={400}
                      width={400}
                      domainPadding={{ y: 10 }}
                      containerComponent={
                        <ChartVoronoiContainer
                          voronoiDimension="x"
                          labels={d => `y: ${d.y}`}
                          labelComponent={
                            <ChartTooltip
                              cornerRadius={0}
                              flyoutStyle={{ fill: 'white' }}
                            />
                          }
                        />
                      }
                    >
                      <ChartLine
                        data={[
                          { x: 1, y: 5, l: 'one' },
                          { x: 1.5, y: 5, l: 'one point five' },
                          { x: 2, y: 4, l: 'two' },
                          { x: 3, y: -2, l: 'three' },
                        ]}
                        style={{
                          data: {
                            stroke: 'tomato',
                            strokeWidth: (d, active) => (active ? 4 : 2),
                          },
                          labels: { fill: 'tomato' },
                        }}
                      />

                      <ChartLine
                        data={[
                          { x: 1, y: -3, l: 'red' },
                          { x: 2, y: 5, l: 'green' },
                          { x: 3, y: 3, l: 'blue' },
                        ]}
                        style={{
                          data: {
                            stroke: 'blue',
                            strokeWidth: (d, active) => (active ? 4 : 2),
                          },
                          labels: { fill: 'blue' },
                        }}
                      />

                      <ChartLine
                        data={[
                          { x: 1, y: 5, l: 'cat' },
                          { x: 2, y: -4, l: 'dog' },
                          { x: 3, y: -2, l: 'bird' },
                        ]}
                        style={{
                          data: {
                            stroke: 'black',
                            strokeWidth: (d, active) => (active ? 4 : 2),
                          },
                          labels: { fill: 'black' },
                        }}
                      />
                    </Chart>

                    <Chart
                      style={{
                        parent: { border: '1px solid #ccc', margin: '2%' },
                      }}
                      domainPadding={{ x: 30, y: 30 }}
                      height={600}
                      width={600}
                      events={[
                        {
                          childName: 'bar',
                          target: 'data',
                          eventHandlers: {
                            onClick: () => [
                              {
                                target: 'labels',
                                mutation: () => ({ text: 'o shit' }),
                              },
                              {
                                childName: 'line',
                                target: 'data',
                                mutation: () => ({ style: { stroke: 'lime' } }),
                              },
                              {
                                childName: 'line',
                                target: 'labels',
                                mutation: () => ({
                                  style: { fill: 'green' },
                                  text: 'waddup',
                                }),
                              },
                            ],
                          },
                        },
                      ]}
                    >
                      <ChartBar
                        name="bar"
                        style={{ data: { width: 15, fill: 'green' } }}
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
                          { x: 13, y: 1 },
                        ]}
                      />
                      <ChartLine
                        name="line"
                        y={() => 0.5}
                        style={{ data: { stroke: 'blue', strokeWidth: 5 } }}
                        label="LINE"
                      />
                    </Chart>
                  </Column>
                  <Column
                    xLargeCell={1}
                    largeCell={1}
                    mediumCell={1}
                    smallCell={1}
                  >
                    <ChartPie
                      animate={{ duration: 1000 }}
                      width={400}
                      height={400}
                      data={this.state.data}
                      innerRadius={120}
                      cornerRadius={25}
                      labels={() => null}
                      style={{
                        data: {
                          fill: d => {
                            const color = d.y > 30 ? 'green' : 'red';
                            return d.x === 1 ? color : 'transparent';
                          },
                        },
                      }}
                    />
                    <ChartAnimation duration={1000} data={this.state}>
                      {newProps => (
                        <ChartLabel
                          textAnchor="middle"
                          verticalAnchor="middle"
                          x={200}
                          y={200}
                          text={`${Math.round(newProps.percent)}%`}
                          style={{ fontSize: 45 }}
                        />
                      )}
                    </ChartAnimation>
                  </Column>
                  <Column xLargeCell={1} smallCell={1}>
                    <Chart
                      theme={ChartTheme.material}
                      animate={{ duration: 1000 }}
                    >
                      <ChartStack colorScale="blue">
                        {this.state.data.map((data, i) => (
                          <ChartArea
                            key={i}
                            data={[
                              { x: 1, y: 1 },
                              { x: 2, y: 5 },
                              { x: 3, y: 3 },
                              { x: 4, y: 2 },
                              { x: 5, y: 8 },
                            ]}
                            interpolation="basis"
                          />
                        ))}
                      </ChartStack>
                    </Chart>
                  </Column>
                  <Column
                    xLargeCell={1}
                    largeCell={1}
                    mediumCell={1}
                    smallCell={1}
                  >
                    <Chart
                      height={400}
                      width={400}
                      domainPadding={{ x: 50, y: [0, 20] }}
                      scale={{ x: 'time' }}
                    >
                      <ChartBar
                        dataComponent={
                          <Bar
                            events={{
                              onMouseOver: () => console.log('zetgoo'),
                            }}
                          />
                        }
                        style={this.state.style}
                        data={[
                          { x: new Date(1986, 1, 1), y: 2 },
                          { x: new Date(1996, 1, 1), y: 3 },
                          { x: new Date(2006, 1, 1), y: 5 },
                          { x: new Date(2016, 1, 1), y: 4 },
                        ]}
                      />
                    </Chart>
                  </Column>
                </Columns>
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
