import React from "react";

import Article from "../components/Article";

export default class Featured extends React.Component {
  render() {
    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article2",
      "Some Other Article2",
      "Yet Another Article2",
      "Still More2",
      "Some Article3",
      "Some Other Article3",
      "Yet Another Article3",
      "Still More3",
    ].map((title, i) => <Article key={i} title={title}/> );
    // return article component with key of index and 

    const adText = [
      "Ad spot #1",
      "Ad spot #2",
      "Ad spot #3",
      "Ad spot #4",
      "Ad spot #5",
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
    console.log("featured");
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>

        <div class="row">{Articles}</div>
      </div>
    );
  }
}