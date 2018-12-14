import React from 'react';

const feedItem = (props) => {

    return(
        <div className="feeditem">
            <ul>
                <li><span>Amount: </span>{`$${parseInt(props.donation.amount).toLocaleString('USD')}`}</li>
                <li><span>Date: </span>{props.donation.contributionDate.split(' ').slice(1,4).join(" ")}</li>
                <li><span>Contributor: </span>{props.donation.contributor}</li>
                <li><span>Address: </span>{props.donation.contributorAddress}</li>
            </ul>
            <ul>
                <li><span>Employer: </span>{props.donation.employer}</li>
                <li><span>Occupation: </span>{props.donation.occupation}</li>
                <li><span>Office: </span>{props.donation.office}</li>
                <li><span>Recipient: </span>{props.donation.recipient}</li>
            </ul>
        </div>
    )
}

export default feedItem;

