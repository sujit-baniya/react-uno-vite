import Panel from '../Panel';
import type { PanelPosition, ProOptions } from '../../types';

type AttributionProps = {
  proOptions?: ProOptions;
  position?: PanelPosition;
};

function Attribution({ proOptions, position = 'bottom-right' }: AttributionProps) {
  if (proOptions?.hideAttribution) {
    return null;
  }

  return (
    <Panel
      position={position}
      className="react-flow__attribution"
      data-message=""
    >

    </Panel>
  );
}

export default Attribution;
