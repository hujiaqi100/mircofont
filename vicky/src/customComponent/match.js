const getStuffComponetn = () => {
    const com = [
        {
            url: `http://${window.location.hostname}:3003/remoteEntry.js`,
            scope: 'netfixClone',
            module: './netfixClone',
            type: 'react',
            treeType: "vicky1"
        },
        {
            url: `http://${window.location.hostname}:3002/remoteEntry.js`,
            scope: 'vueClone',
            module: './App',
            treeType: "vicky2",
            type: 'vue'
        },
        {
            url: `http://${window.location.hostname}:3001/remoteEntry.js`,
            scope: 'reactClone',
            module: './reactClone',
            type: 'react',
            treeType: "vicky3"
        },
    ]
    return com
}

export { getStuffComponetn }