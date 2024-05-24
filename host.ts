(async () => {
    // workaround to async issues in my runtime, need to add async init
    setTimeout(async () => {
        const bootstrap = (await import('./bootstrap-host')).default

        console.log(bootstrap)
        //@ts-ignore
        bootstrap();
    }, 400);
})();
