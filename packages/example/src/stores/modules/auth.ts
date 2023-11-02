import { atom } from 'jotai';

const session = atom('auth');
const token = atom(null);

export default { session, token };
