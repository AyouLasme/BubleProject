import React, { Component, useRef, useState } from 'react';
import '../App.css';
import { GraphCanvas, useSelection} from 'reagraph';
import data from '../data.json';

export default function BubbleChart() {

  const graphRef = useRef(null);


  const [collapsed, setCollapsed] = useState(['2']);

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
        if(collapsed.includes(node.id.toString()))
          setCollapsed(collapsed.filter(n => n !== node.id.toString()));
        else
          setCollapsed([...collapsed, node.id])

      }}
      onCanvasClick={onCanvasClick} />;
  </div>
</div>

};
