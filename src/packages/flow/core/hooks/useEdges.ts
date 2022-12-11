import { useStore } from './useStore';
import type { Edge, ReactFlowState } from '../types';

const edgesSelector = (state: ReactFlowState) => state.edges;

function useEdges<EdgeData>(): Edge<EdgeData>[] {
  const edges = useStore(edgesSelector);

  return edges;
}

export default useEdges;
