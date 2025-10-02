
# React Flow Editable Nodes App

A **React-based visual flow editor** using `@xyflow/react`, where users can **drag-and-drop nodes**, **edit text via a sidebar**, **connect nodes with arrows**, and validate connections before saving.

---

## **Features**

1. **Drag & Drop Nodes**

   * Add message nodes from the sidebar.
   * Each node has a **Send Message label** and editable content.

2. **Editable Node Content**

   * Click on a node to edit its message in the **settings panel**.
   * Updates are synced with the node in real-time.

3. **Connections**

   * Nodes can be connected using **edges with arrows**.
   * Each source handle allows **only one outgoing edge**.
   * Target handles allow **multiple incoming edges**.

4. **Save Validation**

   * Save button in the navbar checks flow connections.
   * Shows **light red error message** if **isolated nodes** exist.
   * Only allows saving if all nodes are connected to at least one other node.

5. **Custom Node Styling**

   * Nodes have a **rounded white card** with **soft outward shadow**, like a human-like floating effect.
   * Shadow is visible on all four sides.

6. **Delete Nodes**

   * Sidebar provides a **trash button** to remove the selected node and its connected edges.

---

## **Tech Stack**

* **React** – UI library
* **@xyflow/react** – React Flow rendering
* **TailwindCSS** – Styling
* **React Router** – Routing
* **Lucide React** – Icons for trash and arrow

---

## **Project Structure**

```
src/
├─ Components/
│  ├─ Flow.jsx            # ReactFlow wrapper with arrow edges
│  ├─ Sidebar.jsx         # Node creation & settings panel
│  ├─ TextUpdaterNode.jsx # Custom node component
│  └─ Navbar.jsx          # Save button & error message
├─ Pages/
│  └─ Home.jsx            # Main page with flow
├─ App.jsx                
├─ index.js
└─ app.css
```

---

## **Installation**

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

---

## **Usage**

1. Open the app in the browser (`http://localhost:3000`).
2. Drag **Messages** from the sidebar to create nodes.
3. Click a node to **edit its message** in the settings panel.
4. Connect nodes by dragging from the **source handle (left)** to the **target handle (right)**.
5. Delete a node using the **trash button** in the settings panel.
6. Press **Save Changes** in the navbar:

   * Shows an error if there are **isolated nodes**.
   * Otherwise, saves successfully.

---



