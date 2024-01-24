

Vertical Padding
```jsx
<div style={{ border: '0.0625rem solid black' }}>
    <Padding vertical="small">
        <div style={{ backgroundColor: 'grey', height: '0.625rem', width: '0.625rem' }}/>
    </Padding>
</div>
```

Horizontal Padding
```jsx
<div style={{ border: '0.0625rem solid black' }}>
    <Padding horizontal="small">
        <div style={{ backgroundColor: 'grey', height: '0.625rem', width: '0.625rem' }}/>
    </Padding>
</div>
```

Selective Padding
```jsx
<div style={{ border: '0.0625rem solid black' }}>
    <Padding top="extrasmall" right="small" bottom="small" left="extrasmall">
        <div style={{ backgroundColor: 'grey', height: '0.625rem', width: '0.625rem' }}/>
    </Padding>
</div>
```

Padding through value
```jsx
<div style={{ border: '0.0625rem solid black' }}>
    <Padding value="0.625rem small extralarge">
        <div style={{ backgroundColor: 'grey', height: '0.625rem', width: '0.625rem' }}/>
    </Padding>
</div>
```
