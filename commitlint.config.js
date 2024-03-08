module.exports = {
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "chore",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "revert",
      ],
    ],
    "scope-enum": [2, "always", ["web", "server"]],
  },
  plugins: [
    {
      rules: {
        "scope-enum": () => [2, "always", ["web", "server"]],
        "scope-empty": [2, "never"],
        "type-enum": ({ subject }) => {
          console.log(subject);
          return [
            2,
            "always",
            [
              "feat",
              "fix",
              "chore",
              "docs",
              "style",
              "refactor",
              "perf",
              "test",
              "revert",
            ],
          ];
        },
      },
    },
  ],
};
