(async () => {
    setTimeout(async () => {
        const bootstrap = (await import('./bootstrap-remote')).remote
        //@ts-ignore
        bootstrap();
    }, 400);
})();
