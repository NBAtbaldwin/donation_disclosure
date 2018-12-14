import InfiniteScroll from 'react-infinite-scroller';
import React from 'react';
import FeedItem from './feed_item';

const feed = (props) => {
    let scrollParentRef;
    console.log(props.hasMore)

    const style = {height: '556px', overflow: 'auto'}

    return(
        <section style={style} className='feed' ref={(ref) => scrollParentRef = ref}>
            <InfiniteScroll
                pageStart={0}
                useWindow={false}
                hasMore={props.hasMore}
                loadMore={props.loadFunc}
                loader={<div className="loader" key={0}>Loading ...</div>}
                getScrollParent={() => scrollParentRef}
            >
                {props.records.map((rec, idx) => {
                    return <FeedItem donation={rec} key={idx} tableView={props.tableView} />
                })}
            </InfiniteScroll>
        </section>
    )

}

export default feed;

