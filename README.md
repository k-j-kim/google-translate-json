# google-translate-json

Wrapper around [google-translate-api](https://github.com/vitalets/google-translate-api) to translate JSON label maps.

## Instruction

1. Add your target languages and label map into `input.json`

```
{
  "languages": ["es", "it", "ko", "zh-CN", "zh-TW", "ja", "el", "de"],
  "labels": {
    "title": "Currently only the following groups of people are eligible to get vaccinated. Check all that apply to you.",
    "option1": "People ages 65 and older",
    "option2": "Healthcare workers in ambulatory care settings not affiliated with a hospital",
    "option3": "Funeral workers with direct contact with infectious materials and bodily fluids"
    // ...
  }
}

```

2. Build

```
yarn && yarn build
```

3. See `output.json` for your translations
