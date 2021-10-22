import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: '[app-prevent-default]'
})
export class PreventDefaultDirective{
    @HostListener("click",["$event"])
    public onClick(event: any): void{
        event.stopPropagation();
    }
}