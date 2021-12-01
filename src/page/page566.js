import React, { useState } from 'react'
import { Button, Layout, Menu, Row, Radio } from 'antd'
import { useHistory } from 'react-router-dom'

const page566 = () => {
  const history = useHistory()

  const menuItemKwn7Hyd48Xh93 = [
    { title: 'Single item', href: '/app1' },
    {
      title: 'Menu Group 1',
      children: [
        { title: 'SubItem 1', href: '/subitem1' },
        { title: 'SubItem 2', href: '/subitem2' },
        { title: 'SubItem 3', href: '/subitem3' },
        { title: 'SubItem 4', href: '/subitem4' },
      ],
    },
  ]
  const MenuKwn7Hyd5Wbp77 = () => (
    <Menu
      style={{
        background: 'rgba(255, 255, 255, 0)',
        color: 'rgba(255, 255, 255, 1)',
      }}
      mode="inline"
      theme="dark"
    >
      {menuItemKwn7Hyd48Xh93.map((item, idx) => (
        <React.Fragment key={`fragment-${idx}`}>
          {!item?.children?.length && (
            <Menu.Item key={item.title + idx}>
              <div>{item.title}</div>
            </Menu.Item>
          )}
          {!!item?.children?.length && (
            <Menu.SubMenu key={`group-${idx}`} title={item.title}>
              {item.children.map((subitem, idx2) => (
                <Menu.Item key={`group-${idx}-sub-${idx2}`}>
                  <div>{subitem.title}</div>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          )}
        </React.Fragment>
      ))}
    </Menu>
  )
  const radioItemKwn7Hyd55Np8Q = [
    { label: 'Label 1', value: '1' },
    { label: 'Label 2', value: '2' },
    { label: 'Label 3', value: '3', disabled: true },
    { label: 'Label 1', value: '4' },
  ]
  const RadioKwn7Hyd5Cmigh = () => (
    <Radio.Group optionType="button" size="middle" buttonStyle="outline">
      <Space direction={horizontal}>
        {radioItemKwn7Hyd55Np8Q.map((item, idx) => (
          <Radio.Button key={idx} value={item.value} disabled={!!item.disabled}>
            {item.label}
          </Radio.Button>
        ))}
      </Space>
    </Radio.Group>
  )

  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 1)',
        height: '100vh',
        width: '100vw',
        overflow: 'auto',
      }}
    >
      <Layout
        style={{
          background: 'rgba(255, 255, 255, 1)',
          height: '100vh',
          width: '100vw',
          overflow: 'auto',
        }}
      >
        <Layout.Header>
          <Row
            align="top"
            justify="end"
            style={{ minHeight: null, height: '64px' }}
          >
            <Button type="link" size="middle">
              Nav 1
            </Button>
            <Button type="link" size="middle">
              Nav 2
            </Button>
          </Row>
        </Layout.Header>

        <Layout>
          <Layout.Sider>
            <MenuKwn7Hyd5Wbp77 />
          </Layout.Sider>

          <Layout>
            <Layout.Content>
              <Button type="primary">Button</Button>
              <RadioKwn7Hyd5Cmigh />
            </Layout.Content>

            <Layout.Footer
              style={{
                background: 'rgba(240, 242, 245, 1)',
                color: 'rgba(0, 0, 0, 1)',
                textAlign: 'center',
                fontSize: '16px',
                padding: '16px 24px',
              }}
            >
              <Row align="top" justify="end">
                <Button type="primary" size="middle">
                  Button
                </Button>
              </Row>
            </Layout.Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}
export default page566
