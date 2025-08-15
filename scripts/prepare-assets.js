import { existsSync, mkdirSync, copyFileSync } from 'fs'
import { resolve } from 'path'

// This script copies an existing CV PDF from a known location into public/assets
// so it will be published at /assets/<name>.pdf

const possibleSrc = [
    resolve(process.cwd(), 'public', 'cv-sebastian-gonzalez.pdf'),
    resolve(process.cwd(), 'src', 'assets', 'cv-sebastian-gonzalez.pdf'),
    resolve(process.cwd(), 'assets', 'cv-sebastian-gonzalez.pdf'),
]

const destDir = resolve(process.cwd(), 'public', 'assets')

let copied = false

for (const p of possibleSrc) {
    if (existsSync(p)) {
        if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true })
        const dest = resolve(destDir, 'cv-sebastian-gonzalez-vIgh5JXi.pdf')
        copyFileSync(p, dest)
        console.log(`Copied ${p} -> ${dest}`)
        copied = true
        break
    }
}

if (!copied) {
    // No-op but exit 0 so build continues
    console.log('No CV PDF found in expected locations. Skipping copy.')
}
