// vite-env.d.ts (or src/env.d.ts)
/* declare module '*.svg' {
    import * as React from 'react' // Import React for type annotations
    const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    export default content
} */
declare module '*.svg' {
    const content: string
    export default content
}

declare module '*.svg?react' {
    import * as React from 'react'
    const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & { title?: string }
    >
    export default ReactComponent
}

declare module '*.pdf' {
    const value: string
    export default value
}

declare module '*.riv' {
    const content: string
    export default content
}

declare module 'react-copy-to-clipboard'
