import { useContext } from 'react';
import StateContext from './StateContext';
import StateProvider from './StateProvider';

export const useStateValue = () => useContext(StateContext);

export default StateProvider;
