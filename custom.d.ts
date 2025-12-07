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

// Re-declare JSX namespace for React 19 compatibility
declare namespace JSX {
    type Element = React.ReactElement<any, any>
    type ElementClass = React.Component<any>
    interface ElementAttributeMap {}
    interface IntrinsicElements {
        [elemName: string]: any
    }
}

// Framer Motion + React 19 type compatibility
declare module 'framer-motion' {
    import * as React from 'react'

    // Re-export all types
    export type Variants = any
    export type Transition = any
    export type TargetAndTransition = any
    export type VariantLabels = any
    export type MotionProps = any
    export type HTMLMotionProps<T> = any

    export const motion: {
        div: React.ForwardRefExoticComponent<any>
        section: React.ForwardRefExoticComponent<any>
        article: React.ForwardRefExoticComponent<any>
        span: React.ForwardRefExoticComponent<any>
        h1: React.ForwardRefExoticComponent<any>
        h2: React.ForwardRefExoticComponent<any>
        h3: React.ForwardRefExoticComponent<any>
        h4: React.ForwardRefExoticComponent<any>
        h5: React.ForwardRefExoticComponent<any>
        h6: React.ForwardRefExoticComponent<any>
        p: React.ForwardRefExoticComponent<any>
        button: React.ForwardRefExoticComponent<any>
        svg: React.ForwardRefExoticComponent<any>
        g: React.ForwardRefExoticComponent<any>
        path: React.ForwardRefExoticComponent<any>
        circle: React.ForwardRefExoticComponent<any>
        rect: React.ForwardRefExoticComponent<any>
        stop: React.ForwardRefExoticComponent<any>
        figure: React.ForwardRefExoticComponent<any>
        ul: React.ForwardRefExoticComponent<any>
        li: React.ForwardRefExoticComponent<any>
        a: React.ForwardRefExoticComponent<any>
    }

    export const AnimatePresence: React.FC<any>
    export function useMotionValue(initial: any): any
    export function useTransform(...args: any[]): any
}
