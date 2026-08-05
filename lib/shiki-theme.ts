/** compatible Shiki css-variables theme */
export const cssVariablesTheme = {
  "name": "css-variables",
  "type": "dark",
  "colors": {
    "editor.foreground": "var(--shiki-foreground)",
    "editor.background": "var(--shiki-background)",
    "terminal.ansiBlack": "var(--shiki-ansi-black)",
    "terminal.ansiRed": "var(--shiki-ansi-red)",
    "terminal.ansiGreen": "var(--shiki-ansi-green)",
    "terminal.ansiYellow": "var(--shiki-ansi-yellow)",
    "terminal.ansiBlue": "var(--shiki-ansi-blue)",
    "terminal.ansiMagenta": "var(--shiki-ansi-magenta)",
    "terminal.ansiCyan": "var(--shiki-ansi-cyan)",
    "terminal.ansiWhite": "var(--shiki-ansi-white)",
    "terminal.ansiBrightBlack": "var(--shiki-ansi-bright-black)",
    "terminal.ansiBrightRed": "var(--shiki-ansi-bright-red)",
    "terminal.ansiBrightGreen": "var(--shiki-ansi-bright-green)",
    "terminal.ansiBrightYellow": "var(--shiki-ansi-bright-yellow)",
    "terminal.ansiBrightBlue": "var(--shiki-ansi-bright-blue)",
    "terminal.ansiBrightMagenta": "var(--shiki-ansi-bright-magenta)",
    "terminal.ansiBrightCyan": "var(--shiki-ansi-bright-cyan)",
    "terminal.ansiBrightWhite": "var(--shiki-ansi-bright-white)"
  },
  "tokenColors": [
    {
      "scope": [
        "keyword.operator.accessor",
        "meta.group.braces.round.function.arguments",
        "meta.template.expression",
        "markup.fenced_code meta.embedded.block"
      ],
      "settings": {
        "foreground": "var(--shiki-foreground)"
      }
    },
    {
      "scope": "emphasis",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        "strong",
        "markup.heading.markdown",
        "markup.bold.markdown"
      ],
      "settings": {
        "fontStyle": "bold"
      }
    },
    {
      "scope": [
        "markup.italic.markdown"
      ],
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "scope": "meta.link.inline.markdown",
      "settings": {
        "fontStyle": "underline",
        "foreground": "var(--shiki-token-link)"
      }
    },
    {
      "scope": [
        "string",
        "markup.fenced_code",
        "markup.inline"
      ],
      "settings": {
        "foreground": "var(--shiki-token-string)"
      }
    },
    {
      "scope": [
        "comment",
        "string.quoted.docstring.multi"
      ],
      "settings": {
        "foreground": "var(--shiki-token-comment)"
      }
    },
    {
      "scope": [
        "constant.numeric",
        "constant.language",
        "constant.other.placeholder",
        "constant.character.format.placeholder",
        "variable.language.this",
        "variable.other.object",
        "variable.other.class",
        "variable.other.constant",
        "meta.property-name",
        "meta.property-value",
        "support"
      ],
      "settings": {
        "foreground": "var(--shiki-token-constant)"
      }
    },
    {
      "scope": [
        "keyword",
        "storage.modifier",
        "storage.type",
        "storage.control.clojure",
        "entity.name.function.clojure",
        "entity.name.tag.yaml",
        "support.function.node",
        "support.type.property-name.json",
        "punctuation.separator.key-value",
        "punctuation.definition.template-expression"
      ],
      "settings": {
        "foreground": "var(--shiki-token-keyword)"
      }
    },
    {
      "scope": "variable.parameter.function",
      "settings": {
        "foreground": "var(--shiki-token-parameter)"
      }
    },
    {
      "scope": [
        "support.function",
        "entity.name.type",
        "entity.other.inherited-class",
        "meta.function-call",
        "meta.instance.constructor",
        "entity.other.attribute-name",
        "entity.name.function",
        "constant.keyword.clojure"
      ],
      "settings": {
        "foreground": "var(--shiki-token-function)"
      }
    },
    {
      "scope": [
        "entity.name.tag",
        "string.quoted",
        "string.regexp",
        "string.interpolated",
        "string.template",
        "string.unquoted.plain.out.yaml",
        "keyword.other.template"
      ],
      "settings": {
        "foreground": "var(--shiki-token-string-expression)"
      }
    },
    {
      "scope": [
        "punctuation.definition.arguments",
        "punctuation.definition.dict",
        "punctuation.separator",
        "meta.function-call.arguments"
      ],
      "settings": {
        "foreground": "var(--shiki-token-punctuation)"
      }
    },
    {
      "scope": [
        "markup.underline.link",
        "punctuation.definition.metadata.markdown"
      ],
      "settings": {
        "foreground": "var(--shiki-token-link)"
      }
    },
    {
      "scope": [
        "beginning.punctuation.definition.list.markdown"
      ],
      "settings": {
        "foreground": "var(--shiki-token-string)"
      }
    },
    {
      "scope": [
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
        "string.other.link.title.markdown",
        "string.other.link.description.markdown"
      ],
      "settings": {
        "foreground": "var(--shiki-token-keyword)"
      }
    },
    {
      "scope": [
        "markup.inserted",
        "meta.diff.header.to-file",
        "punctuation.definition.inserted"
      ],
      "settings": {
        "foreground": "var(--shiki-token-inserted)"
      }
    },
    {
      "scope": [
        "markup.deleted",
        "meta.diff.header.from-file",
        "punctuation.definition.deleted"
      ],
      "settings": {
        "foreground": "var(--shiki-token-deleted)"
      }
    },
    {
      "scope": [
        "markup.changed",
        "punctuation.definition.changed"
      ],
      "settings": {
        "foreground": "var(--shiki-token-changed)"
      }
    }
  ]
} as const;

// Runtime theme object accepted by Shiki / Fumadocs (createCssVariablesTheme shape).
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- ThemeRegistrationAny isn't exportable without a direct shiki dep
export const cssVariablesThemeForShiki = cssVariablesTheme as any;

export const cssVariablesThemes = {
  light: cssVariablesThemeForShiki,
  dark: cssVariablesThemeForShiki,
} as const;
