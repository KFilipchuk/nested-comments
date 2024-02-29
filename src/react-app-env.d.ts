/// <reference types="react-scripts" />

declare module '*.module.scss' {
  const classes: {readonly [key: string]: string}
  export default classes
}

declare module '*.jpeg' {
  const src: string
  export default src
}
