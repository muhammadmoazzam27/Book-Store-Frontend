import { Link } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined, DashboardOutlined, BookOutlined, ShoppingCartOutlined, TeamOutlined, ShopOutlined, DollarOutlined, HeartOutlined, HistoryOutlined, UserOutlined, SettingOutlined, ReadOutlined, BellOutlined, } from '@ant-design/icons';

// Role-based Menu Items configuration
export const items = [
    { key: 'dashboard', icon: <DashboardOutlined />, label: <Link to="/dashboard">Dashboard</Link> },
    { key: 'orders', icon: <ShopOutlined />, label: <Link to="/dashboard/orders">Orders</Link>, allowedRoles: ["Super Admin", "Seller"] },
    { key: 'products', icon: <ShoppingCartOutlined />, label: <Link to="/dashboard/products">Products</Link>, allowedRoles: ["Super Admin", "Customer"] },
    { key: 'users', icon: <UserOutlined />, label: <Link to="/dashboard/users">Users</Link>, allowedRoles: ["Super Admin"] },
];