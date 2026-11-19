import { useState } from 'react';
import { Form, Input, InputNumber, Select, Button, Upload, message, Row, Col } from 'antd';
import { UploadOutlined, BookOutlined } from '@ant-design/icons';

const { Item } = Form;
const { Option } = Select;
const { TextArea } = Input;

const AddProduct = () => {

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (values) => {

        setLoading(true);

        const title = form.getFieldValue("title");
        const author = form.getFieldValue("author");
        const price = form.getFieldValue("price");
        const stock = form.getFieldValue("stock");
        const description = form.getFieldValue("description");

        const productData = { title, author, price, stock, description };

        const uploadFile = values.imageFile?.file || values.imageFile

        const formData = new FormData();

        if (uploadFile) {
            formData.append("imageFile", uploadFile);
        }

        for (const [key, value] of Object.entries(productData)) {
            formData.append(key, value)
        }

        message.success('Book successfully added to the store!');
        form.resetFields();

        setLoading(false);

    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-2 sm:p-6 lg:p-4">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

                {/* Header Section */}
                <div className="bg-gradient-to-r from-blue-800 to-indigo-900 px-6 py-5 text-white flex items-center gap-3">
                    <BookOutlined className="text-2xl" />
                    <div>
                        <h2 className="text-xl font-bold m-0 text-white">Add New Book</h2>
                        <p className="text-blue-100 text-sm m-0">Enter the details to list a new book in the store inventory.</p>
                    </div>
                </div>

                {/* Form Section */}
                <div className="p-6 sm:p-8">
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                        requiredMark="optional"
                    >
                        {/* Row 1: Title & Author Name */}
                        <Row gutter={16}>
                            <Col xs={24} md={12} lg={12}>
                                <Item
                                    name="title"
                                    label={<span className="font-semibold text-gray-700">Book Title</span>}
                                    rules={[{ required: true, message: 'Please enter the book title!' }]}
                                >
                                    <Input type="text" size='large' placeholder="Enter the book title" className="rounded-lg" />
                                </Item>
                            </Col>
                            <Col xs={24} md={12} lg={12}>
                                <Item
                                    name="author"
                                    label={<span className="font-semibold text-gray-700">Author Name</span>}
                                    rules={[{ required: true, message: 'Please enter the author name!' }]}
                                >
                                    <Input type="text" size='large' placeholder="Enter the author name" className="rounded-lg" />
                                </Item>
                            </Col>
                        </Row>

                        {/* Row 2: Price & Stock Quantity */}
                        <Row gutter={16}>
                            <Col xs={24} md={12} lg={12}>
                                <Item
                                    name="price"
                                    label={<span className="font-semibold text-gray-700">Price ($)</span>}
                                    rules={[{ required: true, message: 'Please enter the price!' }]}
                                >
                                    <InputNumber
                                        size='large'
                                        placeholder="99.99"
                                        className="w-full rounded-lg"
                                        min={0}
                                        step={0.01}
                                    />
                                </Item>
                            </Col>
                            <Col xs={24} md={12} lg={12}>
                                <Item
                                    name="stock"
                                    label={<span className="font-semibold text-gray-700">Stock Quantity</span>}
                                    rules={[{ required: true, message: 'Please enter stock quantity!' }]}
                                >
                                    <InputNumber
                                        size='large'
                                        placeholder="50"
                                        className="w-full rounded-lg"
                                        min={0}
                                    />
                                </Item>
                            </Col>
                        </Row>

                        {/* Row 3: Category & Cover Image */}
                        <Row gutter={16}>
                            <Col xs={24} md={12} lg={12}>
                                <Item
                                    name="category"
                                    label={<span className="font-semibold text-gray-700">Category</span>}
                                    rules={[{ required: true, message: 'Please select a category!' }]}
                                >
                                    <Select size='large' placeholder="Select category" className="w-full">
                                        <Option value="fiction">Fiction</Option>
                                        <Option value="non-fiction">Non-Fiction</Option>
                                        <Option value="programming">Programming</Option>
                                        <Option value="history">History</Option>
                                        <Option value="science">Science</Option>
                                    </Select>
                                </Item>
                            </Col>
                            <Col xs={24} md={12} lg={12}>
                                <Item
                                    name="imageFile"
                                    label={<span className="font-semibold text-gray-700">Book Cover Image</span>}
                                    valuePropName="file"
                                    getValueFromEvent={(e) => e?.file}
                                    rules={[{ required: true, message: 'Please upload a cover image!' }]}
                                >
                                    <Upload beforeUpload={() => false} maxCount={1} showUploadList={{ showRemoveIcon: true }}>
                                        <Button size='large' icon={<UploadOutlined />} className="rounded-lg w-full">
                                            Click to Upload Cover
                                        </Button>
                                    </Upload>
                                </Item>
                            </Col>
                        </Row>

                        {/* Row 4: Description (Full Width) */}
                        <Row gutter={16}>
                            <Col xs={24}>
                                <Item
                                    name="description"
                                    label={<span className="font-semibold text-gray-700">Description</span>}
                                    rules={[{ required: true, message: 'Please enter a short description!' }]}
                                >
                                    <TextArea
                                        rows={4}
                                        placeholder="Write a brief overview of the book..."
                                        className="rounded-lg"
                                    />
                                </Item>
                            </Col>
                        </Row>

                        {/* Submit Button */}
                        <Item className="mb-0 pt-2">
                            <Button
                                block
                                size='large'
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                className="bg-blue-800 hover:bg-blue-900 font-semibold text-base shadow-md"
                            >
                                Publish Book
                            </Button>
                        </Item>

                    </Form>
                </div>

            </div>
        </div>
    );
};

export default AddProduct;