

The IconButton is a button that contains just an Icon and no label.

#### Shape
```jsx
import { Container } from 'samagra-ui';

const click = () => console.log('click!');
<Container style={{ gap: '0.625rem' }} background="gray5" padding={{ all: 'small' }}>
    <Container orientation="horizontal" mainAlignment="space-around">
        <IconButton icon="Pricetags" iconColor="gray6" backgroundColor="primary" onClick={click}/>
        <IconButton iconColor="gray6" backgroundColor="gray1" icon="Plus" onClick={click}/>
        <IconButton icon="Activity" onClick={click}/>
        <IconButton icon="Activity" onClick={click} disabled />
    </Container>
	<Container orientation="horizontal" mainAlignment="space-around">
		<IconButton borderRadius="round" icon="Pricetags" iconColor="gray6" backgroundColor="primary" onClick={click}/>
		<IconButton borderRadius="round" iconColor="gray6" backgroundColor="gray1" icon="Plus" onClick={click}/>
		<IconButton borderRadius="round" icon="Activity" onClick={click}/>
		<IconButton borderRadius="round" icon="Activity" onClick={click} disabled />
	</Container>
</Container>
```

#### Size
```jsx
import { Container, Text } from 'samagra-ui';

const click = () => console.log('click!');
<Container orientation="horizontal" mainAlignment="space-around" background="gray5" crossAlignment="flex-start">
    <Container style={{ gap: '0.625rem' }} background="gray5" padding={{ all: 'small' }}>
        <Text>Extrasmall</Text>
        <IconButton size="extrasmall" icon="Pricetags" iconColor="gray6" backgroundColor="primary" onClick={click}/>
        <IconButton borderRadius="round" size="extrasmall" icon="Pricetags" iconColor="gray6" backgroundColor="primary" onClick={click}/>
    </Container>
    <Container style={{ gap: '0.625rem' }} background="gray5" padding={{ all: 'small' }}>
        <Text>Small</Text>
        <IconButton size="small" icon="Pricetags" iconColor="gray6" backgroundColor="primary" onClick={click}/>
        <IconButton borderRadius="round" size="small" icon="Pricetags" iconColor="gray6" backgroundColor="primary" onClick={click}/>
    </Container>
    <Container style={{ gap: '0.625rem' }} background="gray5" padding={{ all: 'small' }}>
        <Text>Medium</Text>
        <IconButton size="medium" icon="Pricetags" iconColor="gray6" backgroundColor="primary" onClick={click}/>
        <IconButton borderRadius="round" size="medium" icon="Pricetags" iconColor="gray6" backgroundColor="primary" onClick={click}/>
    </Container>
    <Container style={{ gap: '0.625rem' }} background="gray5" padding={{ all: 'small' }}>
        <Text>Large</Text>
        <IconButton size="large" icon="Pricetags" iconColor="gray6" backgroundColor="primary" onClick={click}/>
        <IconButton borderRadius="round" size="large" icon="Pricetags" iconColor="gray6" backgroundColor="primary" onClick={click}/>
    </Container>
	<Container style={{ gap: '0.625rem' }} background="gray5" padding={{ all: 'small' }}>
		<Text>Extralarge</Text>
		<IconButton size="extralarge" icon="Pricetags" iconColor="gray6" backgroundColor="primary" onClick={click}/>
		<IconButton borderRadius="round" size="extralarge" icon="Pricetags" iconColor="gray6" backgroundColor="primary" onClick={click}/>
	</Container>
</Container>
```

##### Custom size

A custom size object can be passed to IconButton. It has to contain
- **iconSize**: a valid css size or a key of the theme.sizes.icon object
- **paddingSize**: a valid css size or a key of the theme.sizes.padding object
```jsx
import { Container } from 'samagra-ui';
const click = () => console.log('click!');

<Container orientation="horizontal" mainAlignment="space-around" background="gray5" padding={{ all: 'small' }}>
    <IconButton icon="Pricetags" iconColor="gray6" backgroundColor="primary" onClick={click} customSize={{ iconSize: 'large', paddingSize: 'extrasmall' }} />
    <IconButton icon="Pricetags" iconColor="gray6" backgroundColor="primary" onClick={click} customSize={{ iconSize: 'medium', paddingSize: 0 }} />
    <IconButton icon="Pricetags" iconColor="gray6" backgroundColor="primary" onClick={click} customSize={{ iconSize: '1.25rem', paddingSize: '1rem' }} />
</Container>
```

