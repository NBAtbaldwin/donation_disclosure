const receiveData = (res) => {
    return res.json();
  }

export const fetchNext100 = (num) => {
    return new Promise((resolve, reject) => {
        fetch(`http://198.199.101.51/?page=${num}`)
            .then(res => receiveData(res))
            .then((res) => resolve(res))
    });
}

export const fetchAll = () => {
    return new Promise((resolve, reject) => {
        fetch(`http://198.199.101.51`)
            .then(res => receiveData(res))
            .then(res => resolve(res))
    });
}

export const filterAll = (term, records, category) => {
    term = term.toLowerCase();
    const output = new Set();
    records.forEach(rec => {
        if(category) {
            if(rec[category].toString().toLowerCase().includes(term)) output.add(rec);
        } else {
            Object.values(rec).forEach(val => {
                if (val.toString().toLowerCase().includes(term)) output.add(rec);
            })
        }
    });
    return Array.from(output);
}