import { of } from "rxjs";

export function host() {

    const host$ = of('Hello from the host!');

    host$.subscribe((msg: string) => {
        console.log(msg);
    });

    import('@my/remote').then(m => {
        const remote$ = m.remote();
        remote$.subscribe((msg: string) => {
            console.log(msg);
        });
    });

}

host();