import { interval, of } from 'rxjs';
import { buffer, take, bufferCount, bufferTime } from 'rxjs/operators';

console.clear()
/* buffer Operator */
// const ob = interval(100)
//   .pipe(
//     buffer(interval(1000)),
//     take(3)
//   )

/* bufferCount Operator */
// const ob = of(1,2,3).pipe(
//   bufferCount(2)
// )
// const ob = of(1,2,3).pipe(
//   bufferCount(2,1)
// )

/* bufferTime Operator */
const ob = interval(1000)
  .pipe(
    take(6),
    bufferTime(2000, 1000)
  )

ob.subscribe(
  x => console.log(x),
  e => console.log('error:', e),
  () => console.log('complete')
);