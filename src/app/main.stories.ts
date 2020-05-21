import { storiesOf } from '@storybook/angular';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

storiesOf('Test', module)
    .add('Test', () => ({
        moduleMetadata: {
            imports: [
                AppModule,
            ],
        },
        component: AppComponent,
    }));
