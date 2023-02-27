import { AbstractControl } from "@angular/forms";

export class MathValidators {

    static addition(target: string, sourceOne: string, sourceTwo: string) {
        return (form: AbstractControl) => {
            const sum = form.value[target];
            const firstNumber = form.value[sourceOne];
            const secondNumber = form.value[sourceTwo];
            if (parseInt(sum) == firstNumber + secondNumber){
                return null;
            }
            return { addition: true};
        }
        
    }
}
