import React, { useState, useImperativeHandle, forwardRef } from 'react'
import _ from 'lodash'
import { Form, Input, message } from 'antd'
const CreateCategory = (props, ref) => {
    const { val, setTreeCategory, treeCategory, close, isRoot } = props
    const [form] = Form.useForm();
    useImperativeHandle(ref, () => ({
        onOk: () => {
            const info = form.getFieldsValue()
            if (info.name == '') {
                info.name = void 0
            }
            const data = {
                "name": info.name ?? '新目录',
                "id": isRoot ? (treeCategory.length + 1) + '-d' : `${val.id}-d-${val.children.length}`,
                "parent": isRoot ? '0' : val.id,
                "isRoot": false,
                "isOpen": true,
                "isDir": true,
                "treeType": isRoot ? 'root' : val.treeType,
                "level": isRoot ? 1 : val.level + 1,
                "children": []
            }
            if (val && val.level + 1 > 4) {
                message.warning('最大创建3层子目录')
                return
            }
            val ? val.children.push(data) : treeCategory.push(data)
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
                    label="目录名称"
                    name="name"
                >
                    <Input />
                </Form.Item>
            </Form>
        </div>
    )
}

export default forwardRef(CreateCategory)