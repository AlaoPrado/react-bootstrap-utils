import React from 'react';
import PropTypes from 'prop-types';

import { getValueByPath } from '../utils';

export function TreeView({ childrenPath, draggable, nodes, template }) {
  return (
    <div className="rbu-treeview">
      <ul className="list-group">
        <TreeNodes depth={0} nodes={nodes} template={template} childrenPath={childrenPath} draggable={draggable} />
      </ul>
    </div>
  );
}
TreeView.propTypes = {
  childrenPath: PropTypes.string.isRequired,
  draggable: PropTypes.bool,
  nodes: PropTypes.array.isRequired,
  template: PropTypes.func.isRequired,
};

function TreeNodes({ childrenPath, depth, draggable, nodes, parentNode, template }) {
  return (
    <>
      {nodes.map((node, index) => (
        <TreeNode
          key={index}
          node={node}
          parentNode={parentNode}
          index={index}
          template={template}
          childrenPath={childrenPath}
          depth={depth}
          draggable={draggable}
        />
      ))}
    </>
  );
}

TreeNodes.propTypes = {
  childrenPath: PropTypes.string,
  depth: PropTypes.number,
  draggable: PropTypes.bool,
  nodes: PropTypes.array,
  parentNode: PropTypes.object,
  template: PropTypes.func,
};

function TreeNode({ node, parentNode, index, template, childrenPath, depth, draggable }) {
  const childrenNodes = getValueByPath(node, childrenPath);

  return (
    <div draggable={draggable}>
      <li className="list-group-item" style={{ marginLeft: `${depth * 20}px`, borderTopWidth: '1px' }}>
        {template(node, index, parentNode)}
      </li>

      {childrenNodes && (
        <TreeNodes
          nodes={childrenNodes}
          parentNode={node}
          template={template}
          childrenPath={childrenPath}
          depth={depth + 1}
        />
      )}
    </div>
  );
}
TreeNode.propTypes = {
  node: PropTypes.object,
  parentNode: PropTypes.object,
  index: PropTypes.number,
  template: PropTypes.func,
  childrenPath: PropTypes.string,
  depth: PropTypes.number,
  draggable: PropTypes.bool,
};
