

RadioGroup can be used to select one option out of a list of many.

### Controlled

```jsx
import { useCallback, useState } from 'react';
import { Button, Radio, Row, Input, Text, Padding } from 'samagra-ui';

const [activeValue, setActiveValue] = useState('salad');
const changeActiveValue = useCallback((newValue) => {
	setActiveValue(newValue);
}, []);

<RadioGroup value={activeValue} onChange={changeActiveValue} name={'controlled-radio'}>
	<Radio label='Chicken' value='chicken' />
	<Radio label='Salad' value='salad' />
	<Radio label='Tomato' value='tomato' />
	<Radio
		label={
			<Row takeAvailableSpace mainAlignment='flex-start' wrap='nowrap'>
				<Text overflow='break-word'>Day</Text>
				<Padding horizontal='small'>
					<Input
						backgroundColor='gray5' label='Day'
						defaultValue='17'
					/>
				</Padding>
				<Text overflow='break-word'>of every</Text>
				<Padding left='small'>
					<Input
						backgroundColor='gray5' label='Month'
						defaultValue='1'
					/>
				</Padding>
			</Row>
		}
		value='complex-1'
	/>
	
	<Radio label='Mayo' value='mayo' disabled={true} />
</RadioGroup>;
```

### Uncontrolled

```jsx
import { Radio, Button } from 'samagra-ui';

<RadioGroup defaultValue={'chicken'}>
	<Radio label='Chicken' value='chicken' />
	<Radio label='Salad' value='salad' />
	<Radio label='Tomato' value='tomato' />
	<Radio
		label={
			<Button
				type='outlined'
				label='Click me'
				color='info'
				onClick={() => {
					console.log('I got clicked!!');
				}}
			/>
		}
		value='click-me'
	/>
	<Radio label='Mayo' value='mayo' disabled />
</RadioGroup>;

```

### Disabled
You can quickly disable all the radios by disabling the entire group

```jsx
import { Container, Radio,Button } from 'samagra-ui';
import { useCallback, useState } from 'react';

const [disabled, setDisabled] = useState(false);

const toggleDisabled = useCallback(() => {
	setDisabled((prevState) => !prevState);
}, []);

<Container crossAlignment={'flex-start'} gap={'1rem'}>
	<Button label={'Disable group'} onClick={toggleDisabled} />
	<RadioGroup disabled={disabled}>
		<Radio value={'r1'} label={'Radio 1'} />
		<Radio value={'r2'} label={'Radio 2'} disabled />
		<Radio value={'r3'} label={'Radio 3'} />
	</RadioGroup>
</Container>;

```

### Type-check
With the introduction of the generics,
the onChange callback assumes the newValue is of the same type of the one inferred from the value.

In order to have a full type-check also on the children,
it is possible to set the type of the value in the jsx radio element, as follows

```tsx static
import { useCallback, useState } from 'react';
import { RadioGroupProps } from './RadioGroup';

type ValueType = 'a' | 'b' | 'c';

const [selectedValue, setSelectedValue] = useState<ValueType>('a');

const changeSelectedValue = useCallback<NonNullable<RadioGroupProps<ValueType>['onChange']>>((newValue) => {
	if (newValue !== undefined) {
		setSelectedValue(newValue);
	}
}, []);

<RadioGroup value={selectedValue} onChange={changeSelectedValue}>
	<Radio<ValueType> value={'a'} label={'option a'} />
	<Radio<ValueType> value={'b'} label={'option b'} />
	<Radio<ValueType> value={'c'} label={'option c'} />
	{/* TS Error: Type '"d"' is not assignable to type 'ValueType | undefined' */}
	<Radio<ValueType> value={'d'} label={'option c'} />
</RadioGroup>;
```

