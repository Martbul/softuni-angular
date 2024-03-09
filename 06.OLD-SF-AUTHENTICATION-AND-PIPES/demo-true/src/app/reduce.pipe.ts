import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  //! pure:false pravi paipa da se pre renderira vseki put pri novi stoinosti
  //! nezavisimo dali sa ot dqsno ili lqvo na "|"
  pure:false
})
export class ReducePipe<T,I> implements PipeTransform {

  transform(array: T[], reduceFn:(acc:any, curr:T)=> any,initialValue:I ): any {
    if(initialValue !== undefined) {
    return array?.reduce(reduceFn, initialValue );
  }
  return array?.reduce(reduceFn );
}
}