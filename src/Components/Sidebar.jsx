import React from 'react';
import conversationIcon from '../assets/conversation.png';
import { ArrowLeft, ArrowRight, ArrowUp, Trash2 } from 'lucide-react'; // using lucide-react for trash icon

let cnt = 1;

const Sidebar = ({ setNodes, setEdges, selectedNode, clearSelection }) => {
  if (selectedNode) {
    return (
      <div className="border-l-[1px] border-l-gray-300 w-[30rem] p-4">
        {/* Back button */}
        <button
          onClick={clearSelection}
          className="flex items-center text-blue-600 mb-4 cursor-pointer"
        >
          <ArrowLeft className="mr-2" /> Back to Messages
        </button>

       
       

        {/* Text input for editing message */}
        <label className="block text-sm mb-2">Edit Message</label>
        <input
          type="text"
          value={selectedNode.data.message}
          onChange={(e) => {
            const newMsg = e.target.value;
            setNodes((nds) =>
              nds.map((n) =>
                n.id === selectedNode.id
                  ? { ...n, data: { ...n.data, message: newMsg } }
                  : n
              )
            );
          }}
          className="border p-2 rounded w-full"
        />
 {/* Delete node button */}

 <button
          onClick={() => {
            setNodes((nds) => nds.filter((n) => n.id !== selectedNode.id));
            setEdges((eds) =>
              eds.filter(
                (e) => e.source !== selectedNode.id && e.target !== selectedNode.id
              )
            );
            clearSelection();
          }}
          className="flex items-center text-red-600 mt-4 cursor-pointer"
        >
          <Trash2 className="mr-2" /> Delete Node
        </button>



      </div>
    );
  }

  // Default sidebar panel
  return (
    <div className="border-l-[1px] border-l-gray-300 w-[30rem]">
      <button
        className="border border-blue-600 p-3.5 w-40 m-2.5 flex flex-col justify-center items-center cursor-pointer"
        draggable
        onDragEnd={() => {
          setNodes((nds) => [
            ...nds,
            {
              id: `node-${cnt}`,
              type: 'textUpdater',
              position: { x: Math.random() * 250, y: Math.random() * 250 },
              data: { message: `test message ${cnt}` },
            },
          ]);
          cnt++;
        }}
      >
        <div>
          <img src={conversationIcon} alt="icon" className="w-6 text-blue-600" />
        </div>
        <div className="text-blue-600 mt-1">Messages</div>
      </button>
    </div>
  );
};

export default Sidebar;
