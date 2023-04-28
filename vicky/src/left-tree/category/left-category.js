const category = [
    {
        "name": "目录1",
        "id": "1-d",
        "parent": 0,
        "isRoot": true,
        "level": 1,
        "isOpen": true,
        "treeType": 'vicky1',
        "isDir": true,
        "children": [
            // {
            //     "name": "一级子目录",
            //     "id": "1-1",
            //     "parent": "1",
            //     "isRoot": false,
            //     "treeType": 'vicky1',
            //     "level": 2,
            //     "isOpen": true,
            //     "isDir": true,
            //     "children": [
            //         {
            //             "name": "节点",
            //             "id": "1-1-0",
            //             "isOpen": true,
            //             "parent": "1-1",
            //             'onDelete': false,
            //             "treeType": 'vicky1',
            //             "isRoot": false,
            //             "level": 3,
            //             "isDir": false,
            //             "isActive": true
            //         }
            //     ]
            // },
            // {
            //     "name": "one2",
            //     "id": "1-2",
            //     "isOpen": true,
            //     "treeType": 'vicky1',
            //     "parent": "1",
            //     "isRoot": false,
            //     "level": 2,
            //     "isDir": true,
            //     "children": []
            // },
            {
                "name": "节点",
                "id": "1-0",
                "isOpen": true,
                "parent": "1-d",
                "treeType": 'vicky1',
                'onDelete': false,
                "isRoot": false,
                "level": 1,
                "isDir": false,
                "isActive": false
            }
        ]
    },
    {
        "name": "目录2",
        "id": "2-d",
        "parent": 0,
        "isOpen": false,
        "isRoot": true,
        "treeType": 'vicky2',
        "isDir": true,
        "level": 1,
        "children": [
            {
                "name": "一级目录",
                "id": "2-d-0",
                "parent": "2-d",
                "isRoot": false,
                "isOpen": true,
                "isDir": true,
                "treeType": 'vicky2',
                "level": 2,
                "children": [
                    {
                        "name": "节点",
                        "id": "2-0-1",
                        "isOpen": true,
                        "parent": "2-d-0",
                        "treeType": 'vicky2',
                        'onDelete': false,
                        "isRoot": false,
                        "level": 2,
                        "isDir": false,
                        "isActive": false
                    },
                    {
                        "name": "二级目录",
                        "id": "2-d-0-d-0",
                        "parent": "2-d-0",
                        "isRoot": false,
                        "isOpen": true,
                        "isDir": true,
                        "treeType": 'vicky2',
                        "level": 3,
                        "children": [
                            {
                                "name": "节点",
                                "id": "2-0-0-0",
                                "isOpen": true,
                                "parent": "2-d-0-d-0",
                                "treeType": 'vicky2',
                                'onDelete': false,
                                "isRoot": false,
                                "level": 3,
                                "isDir": false,
                                "isActive": false
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
export { category }