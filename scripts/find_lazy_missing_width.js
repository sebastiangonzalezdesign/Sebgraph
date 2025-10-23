const fs = require('fs')
const path = require('path')

const exts = new Set(['.ts', '.tsx', '.js', '.jsx'])

function walk(dir) {
    const results = []
    const list = fs.readdirSync(dir)
    list.forEach((file) => {
        const full = path.join(dir, file)
        const stat = fs.statSync(full)
        if (stat && stat.isDirectory()) {
            results.push(...walk(full))
        } else if (exts.has(path.extname(full))) {
            results.push(full)
        }
    })
    return results
}

function find() {
    const root = path.resolve(__dirname, '..')
    const src = path.join(root, 'src')
    if (!fs.existsSync(src)) {
        console.error('src directory not found')
        process.exit(1)
    }
    const files = walk(src)
    const offenders = []
    const tagRegex = /<img\b[^>]*loading\s*=\s*"(lazy|eager)"[^>]*>/gis
    files.forEach((f) => {
        const content = fs.readFileSync(f, 'utf8')
        let match
        while ((match = tagRegex.exec(content)) !== null) {
            const tag = match[0]
            if (!/\bwidth\s*=/.test(tag)) {
                const prefix = content.slice(0, match.index)
                const line = prefix.split('\n').length
                offenders.push({
                    file: f,
                    line,
                    tag: tag.replace(/\s+/g, ' ').trim(),
                })
            }
        }
    })
    if (offenders.length === 0) {
        console.log(
            'No offending <img loading="lazy"> tags found (all have width attributes).'
        )
        return
    }
    offenders.forEach((o) => {
        console.log(`${o.file}:${o.line}`)
        console.log(`  ${o.tag}`)
        console.log('')
    })
}

find()
