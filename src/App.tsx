import { useState, useMemo } from "react";
import nftjson from "./nft-lists.json";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNFTs = useMemo(() => {
    if (!searchQuery) {
      return Object.entries(nftjson);
    }

    return Object.entries(nftjson).filter(([key, value]) => {
      console.log(key)
      const lowerCaseSearch = searchQuery.toLowerCase();
      const nameMatches = value.name.toLowerCase().includes(lowerCaseSearch);
      return nameMatches;
    });
  }, [searchQuery]);

  return (
    <div className="container-fluid p-0">
      <div className="bg-light py-4 px-1 d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-center">🥐 <br/>NFT Lists</h1>
        <div className="col col-md-8 mx-auto text-center">
          <p>
          NFT Lists is an open-source initiative to improve discoverability for non-fungible tokens.
          <br/>
          <small>
            (À la <a className="text-dark" target="_blank" href="https://tokenlists.org">https://tokenlists.org</a>)
          </small>
          </p>

        </div>
        <div className="d-flex justify-content-center">
          <a className="btn btn-secondary mx-2" target="_blank" href="https://github.com/nftylabs/nft-lists">Github</a>
          <a className="btn btn-secondary mx-2" target="_blank" href="https://npmjs.com/@nftylabs/nft-lists">NPM</a>
          <a className="btn btn-secondary mx-2" target="_blank" href="http://nftylabs.io/tokenlist.schema.json">Schema</a>
        </div>
      </div>

      <hr />

      <div className="row g-4 px-3 justify-content-center mt-3">
        <div className="col-12">
          <div className="input-group mb-3">
            <span className="input-group-text">Search:</span>
            <input
              name="search"
              type="text"
              className="form-control"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

          {filteredNFTs.map(([key, value]) => (
            <div key={key} className="col-12 col-md-6 col-lg-4 col-xl-3 border p-3">
              <p><strong>Source:</strong> {value.name}</p>
              <p><strong>Homepage:</strong> {value.homepage}</p>
              <p className="text-truncate"><strong>Token List:</strong>   <a href={key} target="_blank" rel="noopener noreferrer">
                 {key}
              </a></p>
            </div>
          ))}
        </div>

      <footer className="fixed-bottom text-center p-3 bg-dark text-light">
        <small>
          Made by <a href="https://twitter.com/0xRizzo" target="_blank" className="text-light">0xRizzo</a>
        </small>
        <br/>
      </footer>
    </div>
  );
}

export default App;
