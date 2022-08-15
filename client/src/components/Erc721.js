import { Link } from "react-router-dom";
import { useEffect } from "react";
import { tokenActions } from '../redux/tokenSlice'
import { useSelector, useDispatch } from 'react-redux';


function Erc721({ tokenId }) {
    const tokenMetadata = useSelector((state) => state.token.tokens[tokenId]);
    // const tokenSymbol = useSelector((state) => state.token.tokenSymbol);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(tokenActions.fetchToken(tokenId));
    }, [])
    return tokenMetadata ? (
        <div className="erc721token">
            <Link to={`/explore/${tokenId}`}className="token-item">
                <img
                    src={tokenMetadata.image}
                    width={300}
                    className='token-thumb'/>
                {/* name ▼ */}
                <h4 className="name">{tokenMetadata.name}</h4>
                {/* <div className="price">Price: {tokenMetadata.price} ETH</div> */}
                {/* <span className="symbol">{tokenSymbol}</span> */}
                {/* id ▼ */}
                <div className="nft">id: {tokenMetadata.tokenId}</div>
            </Link>
        </div>
    ): null;
}

export default Erc721;
