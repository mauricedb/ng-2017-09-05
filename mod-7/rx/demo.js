var rx = require('rxjs');


// // rx.Observable.from([1,2,3,4,5, 100])
// //     .subscribe(i => console.log(i), err => console.error(err), () => console.log('completed'))
// //     // .subscribe( i => console.log(i));


// //     // [1,2,3,4,5].forEach(i => console.log(i))


// // var x = rx.Observable.timer(1000, 1000)
// //     .map(i => new Date())
// //     .take(5)
// //     // .do(i => console.log(i))
// //     .shareReplay()
// //     // .subscribe( );


// //     x.subscribe(i => console.log(i), err => console.error(err), () => console.log('completed'))
// //     // x.subscribe()



// var subscription = new rx.Observable(s => {
//     // s.next(42)

//     // s.complete()
//     count = 0
//     var handle = setInterval(() => s.next(count++), 1000)
//     // setInterval(() => s.complete(), 3000)

//     // s.error('OOps')
    
//     return () => {
//         console.log('Unsubsribing')
//         clearInterval(handle);
//     }
// })
// .take(5)
// // .sum()
// .scan((i , p) => i + p, 42)
// .onErrorResumeNext()
// // .toPromise()
// // .then(i => console.log(i))


// .subscribe(i => console.log(i), err => console.error(err), () => console.log('completed'))
// // .subscribe(i => console.log(i))

// // setTimeout(function() {
// //     subscription.unsubscribe();    
// // }, 5000);



function getStuff(i){
    return new Promise((r, c) => {
        setTimeout(() => {
            if (Math.random() < 0.1){
             c(i)
             return;
            }
            r(i)}
            
            , 1000 * Math.random())
    })
}



rx.Observable.from([1,2,3,4,5])
    // .flatMap(i => getStuff(i))
    // .mergeMap(i => getStuff(i))
    .concatMap(i => getStuff(i))
    .retry()
  .subscribe(i => console.log(i), err => console.log(err))