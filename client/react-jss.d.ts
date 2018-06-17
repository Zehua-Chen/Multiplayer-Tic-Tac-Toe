import * as React from 'react';

declare module "react-jss" {
    export function injectSheet<PropType>(style: React.CSSProperties): 
        { injector: (component: React.ComponentType<PropType>) => React.ComponentType<PropType> };
}