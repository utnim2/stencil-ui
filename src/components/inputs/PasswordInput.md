

See [Input](#/Components/Inputs/Input) for details about Input component 

```jsx
import { useState } from 'react';
import { Container, Padding, Text, PasswordInput, Icon, Button } from 'samagra-ui';

const [value, setValue] = useState('Some Controlled value');

<Container orientation="horizontal" mainAlignment="center" background="gray5" height="fill" width="fill">
    <Container orientation="vertical" mainAlignment="space-around" height="18.75rem" width="50%">
        <PasswordInput hasError={true} label="Password"/>
        <PasswordInput disabled label="Disabled Password"/>
    </Container>
</Container>
```
