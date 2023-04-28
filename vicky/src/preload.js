export const xx = () => {
    document.addEventListener('click', () => {
        import(/* webpackPrefetch: true */ './click.js').then(({ default: func }) => {
            func();
        })
    });
}


