

This component is used to create a shimmering effect on the element that is passed in as a prop.

## BASIC

#### Skeleton.Avatar

```jsx
import { Shimmer } from 'samagra-ui';
import { Padding } from '../layout/Padding';
import { Container } from '../layout/Container';

<Container orientation="horizontal" mainAlignment="flex-start" width="100%">
    <Shimmer.Avatar size="large" />
    <Padding left="large" />
    <Shimmer.Avatar size="medium" />
    <Padding left="large" />
    <Shimmer.Avatar size="small" />
    <Padding left="large" />
    <Shimmer.Avatar size="large" radius="0.625rem" />
    <Padding left="large" />
    <Shimmer.Avatar size="medium" radius="0.3125rem" />
    <Padding left="large" />
    <Shimmer.Avatar size="small" radius="0.125rem" />
</Container>
```

#### Skeleton.Badge

```jsx
import { Shimmer } from 'samagra-ui';
import { Padding } from '../layout/Padding';
import { Container } from '../layout/Container';

<Container orientation="horizontal" mainAlignment="flex-start" width="fill">
    <Shimmer.Badge size="large" />
    <Padding left="large" />
    <Shimmer.Badge size="medium" />
</Container>
```

#### Skeleton.Button

```jsx
import { Shimmer } from 'samagra-ui';
import { Padding } from '../layout/Padding';
import { Container } from '../layout/Container';

<Container orientation="horizontal" mainAlignment="flex-start" width="fill">
    <Padding top="small" />
    <Shimmer.Button size="large" />
    <Padding left="large" />
    <Shimmer.Button />
    <Padding left="large" />
    <Shimmer.Button size="small" />
    <Padding left="large" />
    <Shimmer.Button size="large" radius="2em" />
    <Padding left="large" />
    <Shimmer.Button radius="2em" />
    <Padding left="large" />
    <Shimmer.Button size="small" radius="2em" />
</Container>
```

#### Skeleton.Icon

```jsx
import { Shimmer } from 'samagra-ui';
import { Padding } from '../layout/Padding';
import { Container } from '../layout/Container';

<Container orientation="horizontal" mainAlignment="flex-start" width="fill">
    <Shimmer.Icon size="large" />
    <Padding left="large" />
    <Shimmer.Icon />
</Container>
```

#### Skeleton.Logo

```jsx
import { Shimmer } from 'samagra-ui';
import { Padding } from '../layout/Padding';
import { Container } from '../layout/Container';

<Container orientation="horizontal" mainAlignment="flex-start" width="fill">
    <Shimmer.Logo size="large" />
    <Padding left="large" />
    <Shimmer.Logo />
    <Padding left="large" />
    <Shimmer.Logo size="small" />
    <Padding left="large" />
</Container>
```

#### Skeleton.Text

```jsx
import { Shimmer } from 'samagra-ui';
import { Padding } from '../layout/Padding';
import { Container } from '../layout/Container';

<Container orientation="vertical" mainAlignment="flex-start" width="fill">
    <Container orientation="horizontal" width="100%" mainAlignment="flex-start">
        <Shimmer.Text size="large" width="31.25rem" />
    </Container>
    <Padding top="medium" />
    <Container orientation="horizontal" width="100%" mainAlignment="flex-start">
        <Shimmer.Text />
    </Container>
    <Padding top="medium" />
    <Container orientation="horizontal" width="100%" mainAlignment="flex-start">
        <Shimmer.Text size="small" />
    </Container>
</Container>
```
## FORM

#### Skeleton.FormSection

```jsx
import { Shimmer } from 'samagra-ui';
<Shimmer.FormSection>
    <Shimmer.FormSubSection />
    <Shimmer.FormSubSection />
    <Shimmer.FormSubSection />
    <Shimmer.FormSubSection />
    <Shimmer.FormSubSection />
</Shimmer.FormSection>
```

#### Skeleton.Checkbox

```jsx
import { Shimmer } from 'samagra-ui';
<Shimmer.Checkbox />
```

#### Skeleton.Input

```jsx
import { Shimmer } from 'samagra-ui';
import { Padding } from '../layout/Padding';
import { Container } from '../layout/Container';

<Container orientation="horizontal" mainAlignment="flex-start" width="fill">
    <Shimmer.Input width="18.75rem" />
    <Padding left="large" />
    <Shimmer.Input width="23.125rem" checkbox />
</Container>
```

#### Skeleton.Searchbar

```jsx
import { Shimmer } from 'samagra-ui';
import { Padding } from '../layout/Padding';
import { Container } from '../layout/Container';

<Container orientation="horizontal" mainAlignment="flex-start" width="fill">
    <Padding top="medium" />
    <Shimmer.Searchbar width="18.75rem" />
</Container>
```

## NAVIGATION

#### Skeleton.Accordion

```jsx
import { Shimmer } from 'samagra-ui';
import { Padding } from '../layout/Padding';
import { Container } from '../layout/Container';

<Container orientation="vertical" mainAlignment="flex-start" width="100%">
    <Padding top="medium" />
    <Container orientation="horizontal" width="100%" mainAlignment="flex-start">
        <Shimmer.Accordion width="11.375rem" />
    </Container>
    <Padding top="medium" />
    <Container orientation="horizontal" width="100%" mainAlignment="flex-start">
        <Shimmer.Accordion width="12.875rem" iconStart />
    </Container>
    <Padding top="medium" />
    <Container orientation="horizontal" width="100%" mainAlignment="flex-start">
        <Shimmer.Accordion width="15.75rem" iconStart badge />
    </Container>
    <Padding top="medium" />
    <Container orientation="horizontal" width="100%" mainAlignment="flex-start">
        <Shimmer.Accordion width="17.25rem" iconStart badge iconEnd />
    </Container>
</Container>
```

#### Skeleton.Stepper

```jsx
import { Shimmer } from 'samagra-ui';
import { Padding } from '../layout/Padding';
import { Container } from '../layout/Container';

<Container orientation="vertical" mainAlignment="flex-start" width="100%">
    <Shimmer.Stepper size="medium" steppersNumber="5" />
    <Padding top="medium" />
    <Shimmer.Stepper size="medium" steppersNumber="4" />
    <Padding top="medium" />
    <Shimmer.Stepper size="medium" steppersNumber="3" />
</Container>
```

## DATA DISPLAY

#### Skeleton.EmailChip

```jsx
import { Shimmer } from 'samagra-ui';
import { Padding } from '../layout/Padding';
import { Container } from '../layout/Container';

<Container orientation="vertical" mainAlignment="flex-start" width="100%">
    <Padding top="medium" />
    <Container orientation="horizontal" width="100%" mainAlignment="flex-start">
        <Shimmer.EmailChip width="5.5625rem" />
    </Container>
    <Padding top="medium" />
    <Container orientation="horizontal" width="100%" mainAlignment="flex-start">
        <Shimmer.EmailChip width="6.5625rem" iconStart />
    </Container>
    <Padding top="medium" />
    <Container orientation="horizontal" width="100%" mainAlignment="flex-start">
        <Shimmer.EmailChip width="7.5625rem" iconStart iconEnd />
    </Container>
    <Padding top="medium" />
    <Container orientation="horizontal" width="100%" mainAlignment="flex-start">
        <Shimmer.EmailChip width="8.8125rem" iconStart iconEnd iconEndAdditional />
    </Container>
</Container>
```

## FEEDBACK

#### Skeleton.Quota

```jsx
import { Shimmer } from 'samagra-ui';
<Shimmer.Quota height="0.5rem" width="80%" />
```

#### Skeleton.Snackbar

```jsx
import { Shimmer } from 'samagra-ui';
import { Padding } from '../layout/Padding';
import { Container } from '../layout/Container';

<Container orientation="vertical" mainAlignment="flex-start" width="100%">
    <Padding top="medium" />
    <Container orientation="horizontal" width="100%" mainAlignment="flex-start">
        <Shimmer.Snackbar width="12.375rem" />
    </Container>
    <Padding top="medium" />
    <Container orientation="horizontal" width="100%" mainAlignment="flex-start">
        <Shimmer.Snackbar width="16.5rem" elementStart />
    </Container>
    <Padding top="medium" />
    <Container orientation="horizontal" width="100%" mainAlignment="flex-start">
        <Shimmer.Snackbar width="22.375rem" elementStart elementEnd />
    </Container>
</Container>
```

## COMPOSITE COMPONENTS

#### List Item

```jsx
import { Shimmer } from 'samagra-ui';
import { Padding } from '../layout/Padding';
<>
    <Shimmer.ListItem width="28.4375rem" type={1} />
    <Padding top="extralarge" />
    <Shimmer.ListItem width="28.4375rem" type={2} />
    <Padding top="extralarge" />
    <Shimmer.ListItem width="28.4375rem" type={3} />
    <Padding top="extralarge" />
    <Shimmer.ListItem width="28.4375rem" type={4} />
    <Padding top="extralarge" />
    <Shimmer.ListItem width="28.4375rem" type={5} />
</>
```

#### Table List Item

```jsx
import { Shimmer } from 'samagra-ui';
import { Padding } from '../layout/Padding';

<>
    <Shimmer.TableListItem width="28.4375rem" type={1} />
    <Padding top="extralarge" />
    <Shimmer.TableListItem width="28.4375rem" type={2} />
    <Padding top="extralarge" />
    <Shimmer.TableListItem width="28.4375rem" type={3} />
</>
```

