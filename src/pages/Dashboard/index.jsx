import { useEffect, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, BookOutlined, UserOutlined, BellOutlined, } from '@ant-design/icons';
import { Layout, Menu, Button, theme, Grid, Drawer, Avatar, Badge, Space, Typography, Tag, } from 'antd';
import { items } from './Sidebar/SidebarItems';
import Routes from "@/pages/Dashboard/Routes"
import { useAuthContext } from '@/context/AuthContext';

const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;
const { Title, Text } = Typography;


const Dashboard = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [currentRole, setCurrentRole] = useState('Customer');
    const [selectedKey, setSelectedKey] = useState('dashboard');

    const { user } = useAuthContext();

    // Breakpoint hook for sm, md, lg responsiveness
    const screens = useBreakpoint();
    const isMobile = !screens.md; // True for xs and sm (< 768px)

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // Toggle Sidebar or Mobile Drawer
    const toggleMenu = () => {
        if (isMobile) {
            setMobileDrawerOpen(!mobileDrawerOpen);
        } else {
            setCollapsed(!collapsed);
        }
    };


    useEffect(() => {
        setCurrentRole(user.role);
    }, [])


    // Shared Brand Logo Component
    const BrandLogo = ({ isCollapsed }) => (
        <div
            style={{
                height: 64,
                display: 'flex',
                alignItems: 'center',
                justifyContent: isCollapsed ? 'center' : 'flex-start',
                padding: isCollapsed ? '0' : '0 20px',
                background: '#001529',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                gap: 10,
                transition: 'all 0.2s',
            }}
        >
            <BookOutlined style={{ fontSize: 26, color: '#faad14' }} />
            {!isCollapsed && (
                <span
                    style={{
                        color: '#fff',
                        fontSize: 18,
                        fontWeight: 700,
                        letterSpacing: '0.5px',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Book Store
                </span>
            )}
        </div>
    );

    // Shared Menu Component
    const NavigationMenu = () => (
        <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[selectedKey]}
            items={items.filter((item) => !item.allowedroles || item.allowedroles.includes(currentRole))}
            onClick={({ key }) => {
                setSelectedKey(key);
                if (isMobile) setMobileDrawerOpen(false);
            }}
            style={{ borderRight: 0, marginTop: 8 }}
        />
    );

    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                {/* Desktop & Tablet Sider (md & lg screens) */}
                {!isMobile && (
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={collapsed}
                        width={240}
                        breakpoint="lg"
                        onBreakpoint={(broken) => setCollapsed(broken)}
                        style={{
                            boxShadow: '2px 0 8px rgba(0,0,0,0.08)',
                            zIndex: 10,
                        }}
                    >
                        <BrandLogo isCollapsed={collapsed} />
                        <NavigationMenu />
                    </Sider>
                )}

                {/* Mobile Drawer (sm & xs screens) */}
                {isMobile && (
                    <Drawer
                        placement="left"
                        closable={false}
                        onClose={() => setMobileDrawerOpen(false)}
                        open={mobileDrawerOpen}
                        size={240}
                        styles={{ body: { padding: 0, backgroundColor: '#001529' } }}
                    >
                        <BrandLogo isCollapsed={false} />
                        <NavigationMenu />
                    </Drawer>
                )}

                {/* Main Layout */}
                <Layout>
                    {/* Top Responsive Header */}
                    <Header
                        style={{
                            padding: isMobile ? '0 12px' : '0 24px',
                            background: colorBgContainer,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            boxShadow: '0 1px 4px rgba(0,21,41,0.08)',
                            position: 'sticky',
                            top: 0,
                            zIndex: 9,
                        }}
                    >
                        {/* Left: Collapse Button + Active Role Tag */}
                        <Space size="middle">
                            <Button
                                type="text"
                                icon={
                                    isMobile ? (
                                        <MenuUnfoldOutlined />
                                    ) : collapsed ? (
                                        <MenuUnfoldOutlined />
                                    ) : (
                                        <MenuFoldOutlined />
                                    )
                                }
                                onClick={toggleMenu}
                                style={{ fontSize: 18, width: 42, height: 42 }}
                            />
                            {!isMobile && (
                                <Tag style={{ fontSize: 16, padding: '2px 10px' }}>
                                    {currentRole} Portal
                                </Tag>
                            )}
                        </Space>

                        {/* Right: Role Switcher (Demo) + Notifications + Profile */}
                        <Space size={isMobile ? 'small' : 'middle'}>

                            <Badge count={3} size="small">
                                <Button type="text" shape="circle" icon={<BellOutlined style={{ fontSize: 18 }} />} />
                            </Badge>

                            <Space style={{ cursor: 'pointer' }}>
                                <Avatar style={{ backgroundColor: '#1677ff' }} icon={<UserOutlined />} />
                                {screens.lg && <Text strong>{currentRole}</Text>}
                            </Space>
                        </Space>
                    </Header>

                    {/* Main Dashboard Routes Content Area */}
                    <Content
                        style={{
                            margin: isMobile ? '16px 12px' : '24px',
                            padding: isMobile ? 16 : 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                        }}
                    >
                        {/* -------- Dashboard Routes -------- */}
                        <Routes />

                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default Dashboard;