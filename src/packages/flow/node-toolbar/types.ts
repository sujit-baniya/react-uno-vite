import { Position } from '~/packages/flow/core';
import type { HTMLAttributes } from 'react';

export type NodeToolbarProps = HTMLAttributes<HTMLDivElement> & {
  nodeId?: string | string[];
  isVisible?: boolean;
  position?: Position;
  offset?: number;
};
