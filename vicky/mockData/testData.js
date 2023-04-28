const route = require('express').Router()
route.get('/aa/cc/mushroom', (req, res) => {
    res.send(`
    [
        {
          "name": "目录1",
          "id": "1-d",
          "parent": 0,
          "isRoot": true,
          "level": 1,
          "isOpen": true,
          "treeType": "vicky1",
          "isDir": true,
          "children": [
            {
              "name": "Netfix_clone_我很长长长长长长长长长长长长长长长",
              "id": "1-0",
              "isOpen": true,
              "parent": "1-d",
              "treeType": "vicky1",
              "onDelete": false,
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
          "isOpen": true,
          "isRoot": true,
          "treeType": "vicky2",
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
              "treeType": "vicky2",
              "level": 2,
              "children": [
                {
                  "name": "Vue_clone",
                  "id": "2-0-1",
                  "isOpen": true,
                  "parent": "2-d-0",
                  "treeType": "vicky2",
                  "onDelete": false,
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
                  "treeType": "vicky2",
                  "level": 3,
                  "children": [
                    {
                      "name": "Vue_clone",
                      "id": "2-0-0-0",
                      "isOpen": true,
                      "parent": "2-d-0-d-0",
                      "treeType": "vicky2",
                      "onDelete": false,
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
      ]`)
})
route.get('/aa/cc/clover', (req, res) => {
    res.send(`[
        {
          "name": "React_clone",
          "id": "1",
          "isOpen": true,
          "parent": "1",
          "treeType": "vicky3",
          "onDelete": false,
          "isRoot": false,
          "level": 1,
          "isDir": false,
          "isActive": false
        }
      ]`)
})
route.get('/loginData', (req, res) => {
    res.send(`
    {
        "msg" : "Vicky_Test For hujiaqi"
      }
    `)
})
module.exports = route;