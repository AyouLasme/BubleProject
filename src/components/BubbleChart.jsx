import React, { Component, useRef, useState } from 'react';
import '../App.css';
import { GraphCanvas, RadialMenu, useSelection} from 'reagraph';

export default function BubbleChart({data}) {

  const graphRef = useRef(null);

  const [collapsed, setCollapsed] = useState([]);

  const [selectedNode, setSelectedNode] = useState(null);
  const [newLabel, setNewLabel] = useState('');

  const {
    selections,
    onNodeClick,
    onCanvasClick,
  } = useSelection({
    ref: graphRef,
    nodes: data.nodes,
    edges: data.edges
  });

  const inputClassName = 'border rounded h-8 w-full mt-4 text-xs'

  return  (
    <div className="relative w-full h-full flex items-center justify-center">

      {
        selectedNode && (
          <div
            className="group-hover:inline-block text-sm font-semibold border w-52 h-72 custom-backdrop-2 p-2 rounded flex flex-col items-center justify-center"
            style={{
              position: 'fixed',
              right: 15,
              top: 100,
              zIndex: 9999
            }}>

            <svg
              onClick={(e) => {setSelectedNode(null); setNewLabel(null)}}
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>


            <div className='flex flex-col items-center justify-center w-44'>
              <input
                type="text" name="" id=""
                value={newLabel}
                onChange={e => setNewLabel(e.target.value)}
                className={inputClassName} />
              <div
                className="w-full h-8 mx-auto mt-1 flex justify-center items-center rounded text-center bg-[#20344E] text-white"
                onClick={(e) => {
                  const x = data.nodes.filter((node) => parseInt(node.id) === parseInt(selectedNode.id))
                  console.log(x)
                }}
              >
                Modifier
              </div>
            </div>

            <div className='flex flex-col items-center justify-center w-44 mt-2'>
              <input
                type="text" name="" id=""
                placeholder='Ajouter un enfant...'
                className={inputClassName} />
              <div className="w-full h-8 mx-auto mt-1 flex justify-center items-center rounded text-center bg-[#20344E] text-white">
                Ajouter
              </div>
            </div>

            <div
              className="w-40 h-8 mx-auto mt-4 flex justify-center items-center rounded bg-[#20344E] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                </svg>
                <span  className="ml-2">
                    Collapser
                </span>
            </div>
          </div>
        )
      }


      <GraphCanvas
        draggable
        ref={graphRef}
        collapsedNodeIds={collapsed}
        nodes={data.nodes}
        edges={data.edges}
        selections={selections}
        // onNodePointerOver={(node) => alert(node.label)}
        onNodeClick={(node, props) => {
          setSelectedNode(node)
          setNewLabel(node.label)
        }}
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
