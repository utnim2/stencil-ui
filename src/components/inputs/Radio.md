

Radio buttons can be used to select one option out of a list of many.

Radio should be used in combination with the RadioGroup component as demonstrated in [these examples](#/Components/Inputs/RadioGroup).

### Props combinator

```jsx
import { useState, useCallback, useMemo } from 'react';
import { useTheme, Container, Row } from 'samagra-ui';
import { map } from 'lodash';

const [checked1, setChecked1] = useState(false);

const onClick1 = useCallback(() => setChecked1((c) => !c), []);

const sizeItems = [
	{
		label: 'small',
		value: 'small'
	},
	{
		label: 'medium',
		value: 'medium'
	}
];
const [selectedSize, setSelectedSize] = useState('medium');

const theme = useTheme();

const iconColorItems = useMemo(() => map(theme.palette, (value, key) => ({
	label: key,
	value: key
})), [theme]);

const [selectedIconColor, setSelectedIconColor] = useState('gray0');

<Container gap={'0.5rem'}>
	<Radio iconColor={selectedIconColor} size={selectedSize} checked={checked1} onClick={onClick1}
				 label={`size ${selectedSize}, not disabled, iconColor ${selectedIconColor}, checked ${checked1}`} />
	<Radio disabled iconColor={selectedIconColor} size={selectedSize} checked={checked1}
				 onClick={onClick1}
				 label={`size ${selectedSize}, disabled, iconColor ${selectedIconColor}, checked ${checked1}`} />
</Container>;
```


### Controlled

```jsx
import { useState, useCallback, useMemo, useRef } from 'react';
import {
	Button,
	RadioGroup,
	Row,
	Input,
	Text,
	Padding
} from 'samagra-ui';

const [activeValue, setActiveValue] = useState('salad');

const updateActiveValue = useCallback((value) => () => {
	setActiveValue((prevState) => value === prevState ? '' : value);
}, []);

<>
	<Radio label='Chicken' value='chicken' onClick={updateActiveValue('chicken')}
				 checked={activeValue === 'chicken'} />
	<Radio label='Salad' value='salad' onClick={updateActiveValue('salad')}
				 checked={activeValue === 'salad'} />
	<Radio label='Tomato' value='tomato' onClick={updateActiveValue('tomato')}
				 checked={activeValue === 'tomato'} />
	<Radio
		label={
			<Row takeAvailableSpace mainAlignment='flex-start' wrap='nowrap' gap={'0.25rem'}>
				<Text overflow='break-word'>Day</Text>
				<Input backgroundColor='gray5' label='Day' defaultValue='17' />
				<Text overflow='break-word'>of every</Text>
				<Input backgroundColor='gray5' label='Month' defaultValue='1' />
			</Row>
		}
		value='complex-1'
		onClick={updateActiveValue('complex-1')}
        checked={activeValue === 'complex-1'}
	/>
	
	<Radio label='Mayo' value='mayo' disabled={true}
				 onClick={updateActiveValue('mayo')} checked={activeValue === 'mayo'} />
</>;
```

### Uncontrolled

```jsx
import { RadioGroup, Button } from 'samagra-ui';

<>
    <Radio label="Chicken" value="chicken" />
    <Radio label="Salad" value="salad" />
    <Radio label="Tomato" value="tomato" />
    <Radio
        label={
            <Button
                type="outlined"
                label="Click me"
                color="info"
                onClick={() => {
                    console.log('I got clicked!!');
                }}
            />
        }
        value="click-me"
    />
    <Radio label="Mayo" value="mayo" disabled />
</>;
```

