import React from 'react';
import { Provider, useStore, useAtom, createStore } from 'jotai';
import '@jswork/next';

const JotaiApp = (props: JotaiStateTreeProps) => {
  const store = useStore();
  const { stores } = props;

  nx.$get = (key?: string) => {
    if (!key) return store;
    const nameAtom = nx.get(stores, key);
    return store.get(nameAtom);
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
