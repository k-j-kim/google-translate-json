const translate = require('@vitalets/google-translate-api');

async function translateAsync(input, languages) {
    var output = {};
    for (var i = 0; i < languages.length; i++) {
        var lang = langs[i];
        output[lang] = {};
        var entries = Object.entries(input);
        for (var j = 0; j < entries.length; j++) {
            var [key, value] = entries[j];
            var response = await translate(value, { to: lang });
            output[lang][key] = response.text;
        }
        output['en'] = {};
        entries.forEach(([key, value]) => {
            output['en'][key] = value;
        });
    }
    console.log(output);
    return output;
}

async function translateParallel(input, languages) {
    var configs = [];
    var output = {};
    var entries = Object.entries(input);
    languages.forEach(lang => {
        entries.forEach(entry => {
            configs.push({
                lang,
                entry
            })
        });
    });
    output['en'] = {};
    entries.forEach(([key, value]) => {
        output['en'][key] = value;
    });

    await Promise.all(configs.map(async (config) => {
        var { lang, entry } = config;
        var [key, value] = entry;
        const res = await translate(value, { to: lang });
        output[lang] = output[lang] || {};
        output[lang][key] = res.text;
    }));
    console.log(output);
    return output;
}

module.exports = { translateAsync, translateParallel };