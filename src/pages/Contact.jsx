import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { DatePicker, Form, Input, InputNumber, Radio, Select } from 'antd';
import { Button, Modal } from 'flowbite-react';

const { TextArea } = Input;

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className='bg-primaryColor'>
        <h1>Bridal Contact</h1>

        <div
          className='p-10'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>Terms of Service</Modal.Header>
            <Modal.Body>
              <Form
                className=''
                style={{ width: '100%', maxWidth: '100%' }}
                labelCol={{
                  span: 30,
                }}
                wrapperCol={{
                  span: 34,
                }}
                layout='vertical'
                validateMessages={validateMessages}
              >
                <Form.Item
                  label={
                    <span className='text-sm'>
                      Are you getting ready at your venue?
                    </span>
                  }
                  name='gettingReady'
                  rules={[
                    { required: true, message: 'Please select an option!' },
                  ]}
                >
                  <Radio.Group>
                    <Radio value='yes'> YES </Radio>
                    <Radio value='no'> NO </Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item
                  label={<span className='text-sm'>First Name</span>}
                  name='firstName'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your first name!',
                    },
                  ]}
                >
                  <Input placeholder='First Name' className='h-8' />
                  <p className='text-xs text-gray-500'>Your first name</p>
                </Form.Item>

                <Form.Item
                  label={<span className='text-sm'>Last Name</span>}
                  name='lastName'
                  rules={[
                    { required: true, message: 'Please input your last name!' },
                  ]}
                >
                  <Input placeholder='Last Name' className='h-8' />
                  <p className='text-xs text-gray-500'>Your last name</p>
                </Form.Item>

                <Form.Item
                  label={
                    <span className='text-sm'>
                      What time does everyone need to be ready by?
                    </span>
                  }
                  name='readyTime'
                  rules={[
                    { required: true, message: 'Please input the time!' },
                  ]}
                >
                  <Input placeholder='Time' className='h-8' />
                  <p className='text-xs text-gray-500'>E.g., 9:00 AM</p>
                </Form.Item>

                <Form.Item
                  label={
                    <span className='text-sm'>
                      How did you hear about Bridal Hair by Trish?
                    </span>
                  }
                  name='source'
                  rules={[
                    { required: true, message: 'Please input the source!' },
                  ]}
                >
                  <Input placeholder='Source' className='h-8' />
                  <p className='text-xs text-gray-500'>
                    E.g., Facebook, Instagram, Referral
                  </p>
                </Form.Item>

                <Form.Item
                  label={<span className='text-sm'>Instagram Handle</span>}
                  name='instagram'
                  rules={[
                    {
                      required: false,
                      message: 'Please input your Instagram handle!',
                    },
                    {
                      validator: (_, value) => {
                        if (!value || value.indexOf('@') === -1) {
                          return Promise.reject(
                            'Your Instagram handle must contain @ symbol at the beginning!'
                          );
                        }
                        return Promise.resolve();
                      },
                    },
                  ]}
                >
                  <Input placeholder='Instagram Handle' className='h-8' />
                  <p className='text-xs text-gray-500'>E.g., @examplehandle</p>
                </Form.Item>

                <Form.Item
                  label={<span className='text-sm'>Email</span>}
                  name={['user', 'email']}
                  rules={[
                    { type: 'email' },
                    { required: true, message: 'Please input your email!' },
                  ]}
                >
                  <Input placeholder='Email' className='h-8' />
                  <p className='text-xs text-gray-500'>Your email address</p>
                </Form.Item>

                <Form.Item
                  label={<span className='text-sm'>The Bride</span>}
                  name='bride'
                  rules={[
                    {
                      required: true,
                      message: 'Please select the number of brides!',
                    },
                  ]}
                >
                  <Select placeholder='Select number of brides' className='h-8'>
                    <Select.Option value={0}>0</Select.Option>
                    <Select.Option value={1}>1</Select.Option>
                    <Select.Option value={2}>2</Select.Option>
                  </Select>
                  <p className='text-xs text-gray-500'>Number of brides</p>
                </Form.Item>

                <Form.Item
                  label={<span className='text-sm'>Number of Guests</span>}
                  name='guests'
                  rules={[
                    {
                      required: true,
                      message: 'Please select the number of guests!',
                    },
                  ]}
                >
                  <Select placeholder='Select number of guests' className='h-8'>
                    <Select.Option value={4}>4</Select.Option>
                    <Select.Option value={6}>6</Select.Option>
                    <Select.Option value={8}>8</Select.Option>
                    <Select.Option value={10}>10</Select.Option>
                  </Select>
                  <p className='text-xs text-gray-500'>Number of guests</p>
                </Form.Item>

                <Form.Item
                  label={<span className='text-sm'>Wedding Venue</span>}
                  name='venue'
                  rules={[
                    { type: 'string' },
                    {
                      required: true,
                      message: 'Please input the wedding venue!',
                    },
                  ]}
                >
                  <Input placeholder='Wedding Venue' className='h-8' />
                  <p className='text-xs text-gray-500'>
                    Venue name and address
                  </p>
                </Form.Item>

                <Form.Item
                  label={<span className='text-sm'>Wedding Date</span>}
                  name='weddingDate'
                  rules={[
                    {
                      required: true,
                      message: 'Please select the wedding date!',
                    },
                  ]}
                >
                  <DatePicker className='h-8' />
                  <p className='text-xs text-gray-500'>Date of the wedding</p>
                </Form.Item>

                <Form.Item
                  label={<span className='text-sm'>Phone</span>}
                  name='phone'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your phone number!',
                    },
                  ]}
                >
                  <InputNumber placeholder='Phone' className='h-8 w-full' />
                  <p className='text-xs text-gray-500'>Your phone number</p>
                </Form.Item>

                <Form.Item
                  label={
                    <span className='text-sm'>
                      Any other information we should know?
                    </span>
                  }
                  name='additionalInfo'
                  rules={[
                    {
                      required: true,
                      message: 'Please provide additional information!',
                    },
                  ]}
                >
                  <TextArea
                    rows={4}
                    placeholder='Additional Information'
                    className='h-20'
                  />
                  <p className='text-xs text-gray-500'>
                    Additional comments or requests
                  </p>
                </Form.Item>
                <Form.Item label=' ' colon={false}>
                  <Button type='primary' htmlType='submit'>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Contact;
