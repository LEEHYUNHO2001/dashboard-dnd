import { useMemo } from 'react';

import { SubTotalContext } from '.';

interface Props extends SubTotalContext {
  children: JSX.Element;
}

export const SubTotalProvider = ({ sortNum, children }: Props) => {
  const providerValue = useMemo(() => ({ sortNum }), [sortNum]);
  return <SubTotalContext.Provider value={providerValue}>{children}</SubTotalContext.Provider>;
};
