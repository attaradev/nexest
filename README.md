# Nexest

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Nexest is a starter project that simplifies the process of initiating a web development project using NestJS and Next.js. It comes pre-configured with essential tools like Husky, lint-staged, and Commitlint to streamline your development workflow.

## Features

- Integration of NestJS and Next.js for server-side rendering and API development.
- Husky setup for Git hooks to automate tasks like linting and testing.
- lint-staged configured to run linters on staged files.
- Commitlint for enforcing commit message conventions.

## Requirements

- Node.js (version >= 18.0.0)
- pnpm (version >= 8.0.0) package manager

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/attaradev/nexest.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nexest
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

## Usage

- Start the development server:

  ```bash
  pnpm run dev
  ```

## Configuration

- Husky: Customize Git hooks by editing the `.husky` directory.
- lint-staged: Configure linting rules in `lint-staged.config.js`.
- Commitlint: Adjust commit message conventions in `commitlint.config.js`.

## Contributing

Contributions are welcomed from the community. If you encounter any bugs or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Credits

Nexest is maintained by [Mike Attara](https://github.com/attaradev).

## Disclaimer

This starter project is provided as-is without any warranties. Use it at your own risk.

## Contact

For inquiries or support, you can reach out to me via [email](mailto:mpyebattara@gmail.com).
