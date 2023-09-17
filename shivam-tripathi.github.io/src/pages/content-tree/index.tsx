import { getTree, getList } from "../../routes";
import './content-tree.css';

const ContentTree = () => {
	return <><h3>Index Tree</h3>{getList(getTree())}</>
}

export default ContentTree;
