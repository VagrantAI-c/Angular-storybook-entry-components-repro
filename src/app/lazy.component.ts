import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'lazy',
    template: 'lazy content',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyComponent {
}
