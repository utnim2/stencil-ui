**Samagra UI - README**

![SamagraUI](https://static.thenounproject.com/png/27953-200.png)

## Description

Samagra UI is an awseome Component Library built using javascript, styled components and react-styleguidist to use with React/NextJs Application. 

## Installation

```bash
$ npm install --save samagra-ui
$ yarn add samagra-ui
$ pnpm add samagra-ui
```

## Demo
   You can find the working demo [here]()

## Usage

### Theme Provider

Wrap your application with the `ThemeProvider` component to access the theme.

#### For ReactJS Project
```jsx
import { ThemeProvider } from 'samagra-ui';
const App = () => {
  // Your application components and logic
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  rootElement
);
```

#### For NextJS Project
```jsx
// _.app.
import { ThemeProvider } from 'samagra-ui';
const App = () => {
  return (
    <ThemeProvider>
     <App />
   </ThemeProvider>
  )
};
```

### Using Button Component
```jsx
import { Button,Text } from 'samagra-ui';
const App = () => {
  return (
    <>
     <Text> This is a simple Button</Text>
     <Button label="Click Me" onClick={()=>console.log('Hello')}/>
   </>
  )
};
```

## Roadmaps

 * 

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Issues and Contributions

If you encounter any issues or have suggestions for improvement, please [submit an issue](). Contributions are welcome! Please fork the repository and create a pull request.

---

Thank you for using the Samagra UI!. If you have any questions or need further assistance, feel free to reach out to us. Happy coding!
