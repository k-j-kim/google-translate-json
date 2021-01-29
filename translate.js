var fs = require('fs');
var { translateParallel } = require('./src/translate');

async function writeTranslationOutput() {
    var json = fs.readFileSync('input.json');
    var parsed = JSON.parse(json);
    var translated = await translateParallel(parsed.labels, parsed.languages);
    fs.writeFileSync('output.json', JSON.stringify(translated, null, 2));
}

writeTranslationOutput();