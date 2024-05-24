//@ts-ignore
import {of} from 'rxjs'
export function host() {
    import('react').then((r) => {
        console.log('shared react', r);
    })

    const host$ = of('Hello from the host!');

    host$.subscribe((msg: string) => {
        console.log(msg);
    });
    console.log('The host was build on __BUILD_DATE__')
    import('remote/remote').then(({remote}) => {
        console.log('from native import', remote);
        const remote$ = remote();
        remote$.subscribe((msg: string) => {
            console.log(msg);
        });
    });

}

export default host
