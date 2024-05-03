import { of } from "rxjs";
import {init,loadRemote} from "@module-federation/runtime";

init({
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
});
//@ts-ignore
const originalImport = (path)=>pureimport(path)

//@ts-ignore
globalThis.import = async function(url) {
    try {
       return await loadRemote(url)
    } catch(e) {

    }
    console.log('Custom import function called with URL:', url);
    // Implement your custom logic here
    // For example, you can call the original import function with some modifications
    return originalImport(url);
};

export function host() {

    const host$ = of('Hello from the host!');

    host$.subscribe((msg: string) => {
        console.log(msg);
    });

    console.log('The host was build on __BUILD_DATE__')
    loadRemote('@my/remote').then((m)=>{
        const remote$ = m.remote();
        remote$.subscribe((msg: string) => {
            console.log(msg);
        });
    })
    import('@my/remote').then(m => {
        const remote$ = m.remote();
        remote$.subscribe((msg: string) => {
            console.log(msg);
        });
    });

}

host();
