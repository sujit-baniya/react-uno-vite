import { useEffect } from 'react';

import { useStoreApi } from './useStore';
import useKeyPress from './useKeyPress';
import type { KeyCode } from '../types';
import useReactFlow from './useReactFlow';
interface HookParams {
  deleteKeyCode: KeyCode | null;
  multiSelectionKeyCode: KeyCode | null;
}

export default ({ deleteKeyCode, multiSelectionKeyCode }: HookParams): void => {
  const store = useStoreApi();
  const { deleteElements } = useReactFlow();

  const deleteKeyPressed = useKeyPress(deleteKeyCode);
  const multiSelectionKeyPressed = useKeyPress(multiSelectionKeyCode);

  useEffect(() => {
    if (deleteKeyPressed) {
      const { nodeInternals, edges } = store.getState();
      const nodes = Array.from(nodeInternals.values());
      const selectedNodes = nodes.filter((node) => node.selected);
      const selectedEdges = edges.filter((edge) => edge.selected);
      deleteElements({nodes: selectedNodes, edges: selectedEdges});
      store.setState({ nodesSelectionActive: false });
    }
  }, [deleteKeyPressed]);

  useEffect(() => {
    store.setState({ multiSelectionActive: multiSelectionKeyPressed });
  }, [multiSelectionKeyPressed]);
};
