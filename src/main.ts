import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ProductsModule } from './products/products.module';

import 'zone.js/dist/zone';

const moduleMap = [
    {
        tag: 'my-app',
        bootstrap: () => platformBrowserDynamic().bootstrapModule(AppModule)
    },
    {
        tag: 'my-products',
        bootstrap: () => platformBrowserDynamic().bootstrapModule(ProductsModule)
    }
]

moduleMap.forEach(module => {
    const moduleTag = document.querySelector(module.tag);
    if(moduleTag) {
        module.bootstrap();
    }
});