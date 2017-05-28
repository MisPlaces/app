import { Injectable, Pipe } from '@angular/core';

@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe {

    transform(items: any[], arg1: any, arg2?): any {


        if (!(typeof items === "undefined") && !(typeof arg1 === "undefined") && !(typeof arg2 === "undefined")) {

            console.log(arg2);
            return items.filter((item) => {
                let str = JSON.stringify(item);
                str = str.toLowerCase();
                arg1 = arg1 ? arg1.toLowerCase() : '';
                arg2 = arg2 ? arg2.toLowerCase() : '';

                return str.indexOf(arg1) >= 0 && str.indexOf(arg2) >= 0;

            });
        }
        // filter items array, items which match and return true will be kept, false will be filtered out

    }
}