
declare module "react-jss" {
    
    import * as React from 'react';
    
    export interface WithClasses<ClassKeys extends string> {
        classes: Record<ClassKeys, string>;
    }
    function injectSheet(style: any): 
        { <PropType, ClassKeys extends string>(component: React.ComponentType<PropType & WithClasses<ClassKeys>>): 
                React.ComponentType<PropType> };
        
    export default injectSheet;
}