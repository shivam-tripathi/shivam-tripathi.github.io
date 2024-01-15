import { getTree, getList } from "../../routes";
import './content-tree.css';

const ContentTree = () => {
	return <><h1>Index Tree</h1>{getList(getTree())}</>
}

export default ContentTree;
