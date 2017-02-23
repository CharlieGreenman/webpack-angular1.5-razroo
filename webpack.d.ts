declare module '*.html' {
    var _: string;
    export default  _;
}

declare module '*.scss' {
    import {IUseableStyle} from './common/IUseableStyle';
    var _:  IUseableStyle;
    export default  _;
}
