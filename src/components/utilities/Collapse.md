

This is a component that simplifies the control of components that should appear or disappear.

```jsx
import { Icon, Button, Padding } from 'samagra-ui';
import { useState } from 'react';
let [open, setOpen] = useState(true);
const toggle = () => {
	setOpen(!open);
};

<>
    <Button onClick={toggle} label="Click Me!"/>
    <Padding all="large">
        <Collapse orientation="vertical" open={open} maxSize="6.25rem">
            <div style={{ background: 'lightblue', width: '1.5rem', height: '1.5rem' }}/>
            <div style={{ background: 'darkblue', width: '1.5rem', height: '1.5rem' }}/>
            <Icon icon="Activity" size="large"/>
            <div style={{ background: 'blue', width: '1.5rem', height: '1.5rem' }}/>
        </Collapse>
    </Padding>
    <Padding all="large">
        <Collapse orientation="horizontal" open={open} maxSize="3.125rem">
            <div style={{ background: 'lightblue', width: '1.5rem', height: '1.5rem' }}/>
            <div style={{ background: 'darkblue', width: '1.5rem', height: '1.5rem' }}/>
            <Icon icon="Activity" size="large"/>
            <div style={{ background: 'blue', width: '1.5rem', height: '1.5rem' }}/>
        </Collapse>
    </Padding>
</>
```
