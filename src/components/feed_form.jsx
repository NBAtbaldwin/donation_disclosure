import React from 'react';
import Feed from './feed';
import Table from './table';
import Tips from './tips';
import * as ApiUtil from './../api_util/api_util';


class FeedForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allRecords: [],
            filteredRecords: [],
            savedFilteredRecords: [],
            records: [],
            num: 0,
            searchTerm: "",
            hasMore: true,
            category: "",
            view: "table",
            // tableFilter: "",
            // tableCategory: "",
            // tableRecords: [],
        }
        this.loadFunc = this.loadFunc.bind(this);
        this.update = this.update.bind(this);
        this.hasMore = this.hasMore.bind(this);
        this.toggleView = this.toggleView.bind(this);
        this.categories = ['amount', 'contributionDate', 'contributor', 'contributorAddress', 'employer', 'occupation', 'office', 'recipient', ''];
    }

    componentDidMount() {
        ApiUtil.fetchAll()
        .then(res => {
            this.setState({allRecords: res});
        })
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value, num: 0, hasMore: true}, () => {
                let filtered = ApiUtil.filterAll(this.state.searchTerm, this.state.allRecords, this.state.category);
                this.setState({filteredRecords: filtered, records: filtered.slice(0, 100)});
            });
        }
    }

    toggleView() {
        this.state.view === 'table' ? this.setState({view: 'feed'}) : this.setState({view: 'table'})
    }

    loadFunc() {
        if(!this.state.searchTerm){
            ApiUtil.fetchNext100(this.state.num)
            .then(res => {
                let stateCopy = Array.from(this.state.records);
                stateCopy = stateCopy.concat(res);
                this.setState({records: stateCopy, num: this.state.num + 1});
                if (res.length < 100) this.setState({hasMore: false})
            });
        } else {
            let stateCopy = this.state.filteredRecords.slice(0, (this.state.num + 2) * 100);
            let bool = (this.state.num + 2) * 100 > this.state.filteredRecords.length ? false : true
            this.setState({records: stateCopy, num: this.state.num + 1, hasMore: bool})
        }
    }

    hasMore() {
        return this.state.hasMore ? true : false
    }

    render() {
        return(
            <main>
                <div className={'feedform'}>
                    <div>
                        <label>Search Records</label>
                        <input type='text' value={this.state.searchTerm} onChange={this.update('searchTerm')} />
                        <label>Filter Search by Category</label>
                        <select value={this.state.category} onChange={this.update('category')}>
                            {this.categories.map((cat, idx) => {
                                return <option value={cat} key={idx}>{cat ? cat : '--none--'}</option>;
                            })}
                        </select>
                        <label>Toggle Data View</label>
                        <div className={'viewToggle'} onClick={this.toggleView}>{this.state.view === 'table' ? 'Feed' : 'Table'}</div>
                    </div>
                    <Tips />
                </div>
                <div>
                    {this.state.view === 'table' && (
                        <Table records={this.state.searchTerm ? this.state.filteredRecords : this.state.allRecords} />
                    )}
                    {this.state.view === 'feed' && (
                        <Feed records={this.state.records} loadFunc={this.loadFunc} hasMore={this.hasMore() ? true : false} tableView={this.tableView} />
                    )}
                    
                </div>     
            </main>
        )
    }
}

export default FeedForm;

