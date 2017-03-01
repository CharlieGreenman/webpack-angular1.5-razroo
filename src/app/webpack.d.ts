declare module '*.html' {
    var _: string;
    export default  _;
}

declare module '*.scss' {
    const content: any;
    export default content;
}

declare module '*.pug' {
    const content: any;
    export default content;
}
