import { Link } from "react-router-dom";
import { DashboardOutlined, BookOutlined, ShoppingCartOutlined, TeamOutlined, ShopOutlined } from '@ant-design/icons';

// Role-based Menu Items configuration
export const items = [
    { key: 'dashboard', icon: <DashboardOutlined />, label: <Link to="/dashboard">Dashboard</Link> },
    { key: 'orders', icon: <ShopOutlined />, label: <Link to="/dashboard/orders">Orders</Link>, allowedroles: ["Super Admin", "Seller"] },
    { key: 'products', icon: <ShoppingCartOutlined />, label: <Link to="/dashboard/products">Products</Link>, allowedroles: ["Super Admin", "Customer"] },
    { key: 'add-product', icon: <BookOutlined />, label: <Link to="/dashboard/add-product">Add Product</Link>, allowedroles: ["Super Admin", "Seller"] },
    { key: 'users', icon: <TeamOutlined />, label: <Link to="/dashboard/users">Users</Link>, allowedroles: ["Super Admin"] },
];