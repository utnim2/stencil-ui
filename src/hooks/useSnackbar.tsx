

import { useContext } from 'react';

import { CreateSnackbarFn, SnackbarManagerContext } from '../components/utilities/SnackbarManager';

function useSnackbar(): CreateSnackbarFn {
	return useContext(SnackbarManagerContext);
}

export { useSnackbar };
