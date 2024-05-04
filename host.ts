import { of } from "rxjs";
import federation from './federation.js';



//@ts-ignore
export async function host() {
    await federation({
        name: 'host',
        remotes: [
            {
                type:'esm',
                name: "@my",
                // mf-manifest.json is a file type generated in the new version of Module Federation build tools, providing richer functionality compared to remoteEntry
                // Preloading depends on the use of the mf-manifest.json file type
                entry: "http://localhost:3000/remote.js",
                alias: "@my"
            },
        ],
    })
    const host$ = of('Hello from the host!');

    host$.subscribe((msg: string) => {
        console.log(msg);
    });
    console.log('The host was build on __BUILD_DATE__')
    import('@my/remote').then(m => {
        //@ts-ignore
        m = m.default
        console.log('from native import', m);
        const remote$ = m.remote();
        remote$.subscribe((msg: string) => {
            console.log(msg);
        });
    });

}

export default host();
