function encodeInlineESM(code) {
  // Encode the JavaScript code
  const encodedCode = encodeURIComponent(code);

  // Create the inline ESM string
  const inlineESM = `data:text/javascript;charset=utf-8,${encodedCode}`;

  return inlineESM;
}

// Usage
const code = `
import * as container from '@my'
const requestedModule = await container.get('./remote');
 
export default requestedModule()
`;

const inlineESM = encodeInlineESM(code);

const importMap = {
  imports: {}
}


importMap.imports['@my'] = './remote.js';
importMap.imports['@my/remote'] = inlineESM;
importMap.imports['host'] = './host.js';
importShim.addImportMap(importMap);


document.body.appendChild(Object.assign(document.createElement('script'), {
  type: 'module-shim',
  src: './host.js',
}));



