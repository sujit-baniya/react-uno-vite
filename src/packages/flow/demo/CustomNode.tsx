import React, { memo } from 'react';
import { Handle, useReactFlow, useStoreApi } from '~/packages/flow';

const options = [
    {
        value: 'smoothstep',
        label: 'Smoothstep',
    },
    {
        value: 'step',
        label: 'Step',
    },
    {
        value: 'default',
        label: 'Bezier (default)',
    },
    {
        value: 'straight',
        label: 'Straight',
    },
];

function Select({ value, handleId, nodeId }) {
    const { setNodes } = useReactFlow();
    const store = useStoreApi();

    const onChange = (evt) => {
        const { nodeInternals } = store.getState();
        setNodes(
            Array.from(nodeInternals.values()).map((node) => {
                if (node.id === nodeId) {
                    node.data = {
                        ...node.data,
                        selects: {
                            ...node.data.selects,
                            [handleId]: evt.target.value,
                        },
                    };
                }

                return node;
            })
        );
    };

    return (
        <div className="custom-node__select">
            <div>Edge Type</div>
            <select className="nodrag" onChange={onChange} value={value}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

function CustomNode({ id, data }) {
    return (
        <>
            <div className="custom-node__header">
                This is a <strong>custom node</strong>
            </div>
            <div className="custom-node__body">
                <Handle type="source" position="right" className="!bg-[#15607a] !w-2 !h-4 !rounded-l-none -!right-2" />
                <Handle type="target" position="left" className="!bg-[#65e0ba] !w-2 !h-4 !rounded-r-none -!left-2" />
                <Handle type="target" position="top" className="!bg-[#65e0ba] !w-4 !h-2 !rounded-b-none -!top-2" />
                <Handle type="source" position="bottom" className="!bg-[#15607a] !w-4 !h-2 !rounded-t-none -!bottom-2" />
            </div>
        </>
    );
}

export default memo(CustomNode);
