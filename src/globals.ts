
import React from 'react';

interface DSWindow {
	draggedItem?: {
		event: React.DragEvent<HTMLDivElement>;
		data: Record<string, unknown>;
		type: string;
	};
}

declare global {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface Window extends DSWindow {}
}

export { DSWindow };
