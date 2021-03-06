import InfiniteScroll from 'react-infinite-scroller';
import React from 'react';
import FeedItem from './feed_item';

const feed = (props) => {
    let scrollParentRef;
    console.log(props.hasMore)

    const style = {height: '556px', overflow: 'auto'}

    const loading = () => (
        <div className="loading">
            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )

    return(
        <section style={style} className='feed' ref={(ref) => scrollParentRef = ref}>
            <InfiniteScroll
                pageStart={0}
                useWindow={false}
                hasMore={props.hasMore}
                loadMore={props.loadFunc}
                loader={loading()}
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

