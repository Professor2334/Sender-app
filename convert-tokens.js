/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const tokensFile = path.join(__dirname, 'design-tokens.tokens.json');
const outputFile = path.join(__dirname, 'design-tokens.css');

const tokens = JSON.parse(fs.readFileSync(tokensFile, 'utf8'));

function slugify(str) {
    return str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]/g, '');
}

function getTokenPathName(pathArray) {
    return pathArray.map(slugify).join('-');
}

function isSystemToken(pathArray) {
    const rootGroup = pathArray[0].toLowerCase();
    return rootGroup === 'color roles' || rootGroup === 'typography';
}

function resolveValue(value, _allTokens) {
    if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
        const refPath = value.slice(1, -1).split('.');
        const refName = getTokenPathName(refPath);
        
        // Determine if target is system (usually primitives are not)
        // In this specific JSON, primitives start with 'primitive color collections'
        // Let's check the first part of the refPath
        if (refPath[0].toLowerCase() === 'color roles' || refPath[0].toLowerCase() === 'typography') {
            return `var(--${refName}-sys)`;
        }
        return `var(--${refName})`;
    }
    return value;
}

const cssVariables = [];

function traverse(obj, pathArray = []) {
    if (obj.value !== undefined && obj.type !== undefined) {
        // This is a token
        let name = getTokenPathName(pathArray);
        if (isSystemToken(pathArray)) {
            name += '-sys';
        }

        const value = obj.value;
        if (typeof value === 'object' && value !== null) {
            // Complex token (fontStyle, etc.)
            for (const [prop, propVal] of Object.entries(value)) {
                const subName = `${name}-${slugify(prop)}`;
                const resolvedVal = resolveValue(propVal, tokens);
                cssVariables.push(`  --${subName}: ${resolvedVal};`);
            }
        } else {
            // Simple token (color, number, string, dimension)
            const resolvedVal = resolveValue(value, tokens);
            cssVariables.push(`  --${name}: ${resolvedVal};`);
        }
        return;
    }

    for (const [key, val] of Object.entries(obj)) {
        if (key === 'extensions') continue; // Skip metadata
        if (typeof val === 'object' && val !== null) {
            traverse(val, [...pathArray, key]);
        }
    }
}

traverse(tokens);

const cssContent = `:root {
${cssVariables.join('\n')}
}
`;

fs.writeFileSync(outputFile, cssContent);
console.log(`Successfully converted design tokens to ${outputFile}`);
