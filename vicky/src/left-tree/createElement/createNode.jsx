import React, { useState, useImperativeHandle, forwardRef } from 'react'
import _ from 'lodash'
import { Form, Input } from 'antd'
const CreateNode = (props, ref) => {
    const { val, setTreeCategory, treeCategory, close, isRoot } = props
    const [form] = Form.useForm();
    useImperativeHandle(ref, () => ({
        onOk: () => {
            const info = form.getFieldsValue()
            if (val && val.children.some(d => d.name === 'No Message')) {
                let idx = val.children.findIndex(d => d.name === 'No Message')
                val.children.splice(idx, 1)
            }
            if (info.name == '') {
                info.name = void 0
            }
            const data = {
                "name": info.name ?? '新节点',
                "id": isRoot ? (treeCategory.length + 1) : val.id + '-' + val.children.length,
                "parent": isRoot ? '0' : val.id,
                "isRoot": false,
                "isOpen": true,
                "onDelete": false,
                "isDir": false,
                "treeType": isRoot ? 'root' : val.treeType,
                "level": isRoot ? 1 : val.level,
                "isActive": false
            }
            val ? val.children.unshift(data) : treeCategory.push(data)
            setTreeCategory(() => _.cloneDeep(treeCategory))
            close()
        }
    }))
    return (
        <div>
            <Form
                name="basic"
                autoComplete="off"
                form={form}
                wrapperCol={{
                    span: 16,
                }}
            >
                <Form.Item
                    label="节点名称"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                {/* <Form.Item
                    label="目录标识"
                    name="code"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your code!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item> */}
            </Form>
        </div>
    )
}

export default forwardRef(CreateNode)

