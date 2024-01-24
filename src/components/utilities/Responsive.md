

This utility components displays its childrens only when the specified screenMode is active.

The screenMode is determined by the useScreenMode hook.

In some instances it can be useful to provide a target Window to the useScreenmode to use as viewport reference, especially when the component is used within an iFrame.

```jsx
import { Icon, Text } from 'samagra-ui';

const condition = () => true;
<>
<Responsive mode="mobile">
    <Text>Mobile Mode!</Text>
    <div style={{ background: 'lightblue', width: '1.5rem', height: '1.5rem' }}/>   
    <div style={{ background: 'darkblue', width: '1.5rem', height: '1.5rem' }}/>
    <Icon icon="Activity" size="large"/>
    <div style={{ background: 'blue', width: '1.5rem', height: '1.5rem' }}/>
</Responsive>

<Responsive mode="desktop">
    <Text>Desktop Mode!</Text>
    <div style={{ background: 'lightblue', width: '1.5rem', height: '1.5rem' }}/>   
    <div style={{ background: 'darkblue', width: '1.5rem', height: '1.5rem' }}/>
    <Icon icon="Activity" size="large"/>
    <div style={{ background: 'blue', width: '1.5rem', height: '1.5rem' }}/>
</Responsive>
</>
```

