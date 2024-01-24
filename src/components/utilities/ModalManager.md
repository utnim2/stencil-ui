

Context created to create modals using javascript functions.

It exposes the `createModal` function to create an element and accept as argument an object with all
props as the Modal component.

The createModal function returns a callback, that MUST be manually invoked to close the modal.

Overlapping modals are allowed and handled properly.

```jsx
import { Button, Container, useModal, ModalManager, Text } from 'samagra-ui';

function App() {
	const createModal = useModal();
	return (
		<Container orientation="horizontal" mainAlignment="space-between" width="25rem">
			<Button
				type="outlined"
				color="success"
				label="Success"
				onClick={() => {
					let closeModal = createModal({
						title: 'Title title title',
						confirmLabel: 'Second Modal',
						onConfirm: () => {
							console.log('confirm');
							let closeSecondModal = createModal({
								title: 'Title 2',
								cofirmLabel: 'Close Both',
								onConfirm: () => {
									console.log('confirm 2');
									closeSecondModal();
									closeModal();
									},
								onSecondaryAction: () => {
									console.log('cancel 2');
									closeSecondModal();
									},
								onClose: () => {
									console.log('close 2');
									closeSecondModal();
								},
								dismissLabel: 'Cancel',
								children: <Text overflow="break-word">Lorem impsum</Text>
							});
						},
						onSecondaryAction: () => {
							console.log('cancel');
							closeModal();
						},
						onClose: () => {
							console.log('close');
							closeModal();
						},
						dismissLabel: 'Cancel',
						children:
						<>
							<Text overflow="break-word">Lorem impsum</Text>
							<Text overflow="break-word">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
						</>
					});
				}}
			/>
		</Container>
	);
}

<>
	<ModalManager>
		<App />
	</ModalManager>
</>
```

