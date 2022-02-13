import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { store } from 'store/store';

export type RootState = ReturnType<typeof store.getState>
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector