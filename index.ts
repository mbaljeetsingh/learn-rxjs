import { of } from 'rxjs';
import { map } from 'rxjs/operators';

console.clear()
const source = of('World').pipe(
  map(x => `Hello ${x}!`)
);

source.subscribe(
  x => console.log(x),
  e => console.log('error:', e),
  () => console.log('complete')
);