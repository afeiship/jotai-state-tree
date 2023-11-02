import React from 'react';
import { Provider, useStore, useAtom, createStore } from 'jotai';
import '@jswork/next';

const getv = (inTarget, inSuperKey?: string) => {
  const keys = Object.keys(inTarget);
  const result = {};
  keys.forEach((key) => {
    const k = inSuperKey ? `${inSuperKey}.${key}` : key;
    nx.set(result, key, nx.$get(k));
  });
  return result;
};

const JotaiApp = (props: JotaiStateTreeProps) => {
  const store = useStore();
  const { stores } = props;

  nx.$get = (key?: string) => {
    if (!key) return getv(stores);
    const nameAtom = nx.get(stores, key);
    try {
      return store.get(nameAtom);
    } catch {
      return getv(nameAtom, key);
    }
  };

  nx.$set = (key: string, value: any) => {
    const nameAtom = nx.get(stores, key);
    return store.set(nameAtom, value);
  };

  nx.$use = (key: string, options?) => {
    const nameAtom = nx.get(stores, key);
    if (!nameAtom) {
      throw new Error(`[nx] store atom not found: ${key}`);
    }
    return useAtom(nameAtom, options);
  };

  return props.children;
};

export default class extends React.Component<JotaiStateTreeProps> {
  render() {
    return (
      <Provider store={createStore()}>
        <JotaiApp {...this.props} />
      </Provider>
    );
  }
}
