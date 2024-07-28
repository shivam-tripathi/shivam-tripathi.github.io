import { Tree, CollapsibleList } from "../../routes";
import './content-tree.css';

const ContentTree = ({ tree } : { tree: Tree }) => {
	return <div className="content-tree">
		<h1>Index Tree</h1>
		<CollapsibleList subTree={tree} />
	</div>;
}

export default ContentTree;
