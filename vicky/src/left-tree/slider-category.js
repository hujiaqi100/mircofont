const sliderCategory = [
    {
        "default": true,
        "icon-name": 'mushroom',
        name: 'test根目录',
        'icon-prefix': 'iconfont',
        // "path": './category/left-category.js'
    },
    {
        "default": false,
        "icon-name": 'clover',
        name: 'test根目录',
        'icon-prefix': 'iconfont',
        // "path": './category/two-category.js'
    },
    // {
    //     "default": false,
    //     name: 'test3',
    //     "icon-name": 'icon-tiaopi'
    // },
    // {
    //     "default": false,
    //     name: 'test4',
    //     "icon-name": 'icon-fanu'
    // },
    // {
    //     "default": false,
    //     name: 'test5',
    //     "icon-name": 'icon-kun'
    // },
    // {
    //     "default": false,
    //     name: 'test6',
    //     "icon-name": 'icon-leiku'
    // },
    // {
    //     "default": false,
    //     name: 'test7',
    //     "icon-name": 'icon-kaixin'
    // },
]
sliderCategory.forEach((val => {
    val['icon-prefix'] = 'iconfont'
}))
export { sliderCategory }