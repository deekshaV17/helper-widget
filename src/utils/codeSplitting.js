import React from 'react';
import Loadable from 'react-loadable';

import { Loading } from 'components';

export default function createSplitPoint(path) {
  return Loadable({
    loader: () => import(`../${path}`), // FIXME: Fix this path
    loading: () => <Loading />,
  });
}
