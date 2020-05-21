import { AfterViewInit, ChangeDetectionStrategy, Component, ComponentFactoryResolver, Injector, ViewContainerRef } from '@angular/core';

import { LazyComponent } from './lazy.component';

@Component({
    selector: 'app-root',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {

    constructor(
        private cfr: ComponentFactoryResolver,
        private vcr: ViewContainerRef,
        private injector: Injector,
    ) {
    }

    public ngAfterViewInit(): void {
        const factory = this.cfr.resolveComponentFactory(LazyComponent);
        this.vcr.createComponent(factory, 0, this.injector);
    }

}
