import React, { Component, useRef, useState } from 'react';
import '../App.css';
import { GraphCanvas, useSelection} from 'reagraph';

export default function BubbleChart({data}) {

  const graphRef = useRef(null);

  const [collapsed, setCollapsed] = useState([]);

  const {
    selections,
    onNodeClick,
    onCanvasClick
  } = useSelection({
    ref: graphRef,
    nodes: data.nodes,
    edges: data.edges
  });

  return  <div className='flex justify-center'>
  <div className='relative w-full h-[800px] flex justify-center'>
    {/* <GraphCanvas
        nodes={data.nodes}
        edges={data.edges}
        // theme={theme}
        sizingType="centrality"
    /> */}

    <GraphCanvas
      draggable
      ref={graphRef}
      collapsedNodeIds={collapsed}
      nodes={data.nodes}
      edges={data.edges}
      selections={selections}
      onNodeClick={(node, props) => {
        console.log(node.id.toString())
        console.log(collapsed)
        if(collapsed.includes(node.id))
          setCollapsed(collapsed.filter(n => n !== node.id));
        else
          setCollapsed([...collapsed, node.id])

      }}
      onCanvasClick={onCanvasClick} />;
  </div>
</div>

};
