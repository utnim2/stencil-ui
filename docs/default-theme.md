

### Colors

```jsx noeditor
import Palette from './components/Palette';
import { useTheme } from 'samagra-ui';

const theme = useTheme();

<Palette palette={theme.palette} />;

```

## Sizes

### Font

```jsx noeditor
import { map } from 'lodash';
import { useTheme, Container, Text } from 'samagra-ui';

const theme = useTheme();

<Container orientation="vertical" padding={{ all: 'large' }}>
	{
		map(
			theme.sizes.font,
			(size, key) => (
				<Text key={key} size={key}>This text is {size}</Text>
			)
		)
	}
</Container>;
```

## Default theme object

```jsx noeditor
import ThemePrinter from './components/ThemePrinter';

<ThemePrinter />
```
