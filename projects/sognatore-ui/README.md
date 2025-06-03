# 🧩 Sognatore UI

Sognatore UI is a modern Angular component library built using standalone components. It is designed for productivity, consistent design, and seamless integration.

`Made with ❤️ by the Sognatore team.`

---

## 📦 Installation

```bash
npm install sognatore-ui
```

`Make sure your Angular project is using version 17 or newer.`

## 🚀 Usage

### Import a Standalone Component

#### For example, using the button component:

```bash
import { Component } from '@angular/core';
import { SognatoreButton, SognatoreInput } from '@sognatore-ui';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [SognatoreButton, SognatoreInput],
  template: `
    <sog-input [formControl]="fullName" name="fullName" placeholder="Full Name"></sog-input>
    <sog-button>Submit</sog-button>
  `,
})
export class HomeComponent {}
```

## 🧪 Development

### Run the Project

```bash
ng serve
```

`Open http://localhost:4200`

## 🧱 Available Components

| Component                  | Selector       | Description                       |
| -------------------------- | -------------- | --------------------------------- |
| `SognatoreButtonComponent` | `<sog-button>` | Basic button with default styling |
| `SognatoreInputComponent`  | `<sog-input>`  | Basic input with default styling  |

## 🤝 Contributing

Contributions are welcome! Fork the repository, create a new branch, and submit a pull request.

## 📬 Contact

If you have any questions, open an issue on GitHub or contact our team directly.
