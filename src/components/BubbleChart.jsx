import React, { Component, useRef, useState } from 'react';
import '../App.css';
import { GraphCanvas, RadialMenu, useSelection} from 'reagraph';

export default function BubbleChart({data}) {

  const graphRef = useRef(null);

  const [collapsed, setCollapsed] = useState([]);

  const {
    selections,
    onNodeClick,
    onCanvasClick,
  } = useSelection({
    ref: graphRef,
    nodes: data.nodes,
    edges: data.edges
  });

  return  (
    <div className="relative w-full h-full flex justify-center">
      <GraphCanvas
        draggable
        ref={graphRef}
        collapsedNodeIds={collapsed}
        nodes={data.nodes}
        edges={data.edges}
        selections={selections}
        // onNodePointerOver={(node) => alert(node.label)}
        // onNodeClick={(node, props) => {
        //   if(collapsed.includes(node.id))
        //     setCollapsed(collapsed.filter(n => n !== node.id));
        //   else
        //     setCollapsed([...collapsed, node.id])
        // }}
        contextMenu={({ data, additional, onClose }) => (
          <RadialMenu
            onClose={onClose}
            items={[
              {
                label: 'Add Node',
                onClick: () => {
                  alert('Add a node');
                  onClose();
                }
              },
              {
                label: 'Remove Node',
                onClick: () => {
                  alert('Remove the node');
                  onClose();
                }
              }
            ]}
          />
        )}
        onCanvasClick={onCanvasClick} />;
    </div>
    );

};
