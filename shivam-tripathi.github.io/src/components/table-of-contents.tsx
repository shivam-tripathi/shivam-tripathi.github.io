import './table-of-content.css';
import ListGroup from './list-group';

const TableOfContents = ({ contents }: { contents: JSX.Element[] }) => {
    return (
        <div className="toc-container">
            <h1 className="toc-title">Table of Contents</h1>
            <ListGroup items={contents} />
        </div>
    );
};

export default TableOfContents;
