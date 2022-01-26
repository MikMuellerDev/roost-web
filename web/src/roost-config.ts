export default {
    comments: {
        "lineComment": "//",
        "blockComment": [ "/|", "|/" ],
    },
    brackets: [
        ["{", "}"],
        ["(", ")"],
    ],
    autoClosingPairs: [
        { "open": "{",  "close":  "}" },
        { "open": "(",  "close":  ")" },
        { "open": "\"", "close": "\"" },
        { "open": "'",  "close":  "'" },
        { "open": "/|", "close": "|/" },
    ],
    surroundingPairs: [
        ["{", "}"],
        ["(", ")"],
        ["\"", "\""],
        ["'", "'"],
    ],
}
