import { Fragment, useEffect } from "react";
import { Link, useParams, Route, useRouteMatch } from "react-router-dom";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getSingleQuote } from "../lib/api";

import HighlightedQuote from "../components/quotes/HighlightedQuote";

import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return <div className='centered'>
      <LoadingSpinner />
    </div>
  }

  if (error) {
    return <p className="centered focused">{error}</p>
  }

  if (status === 'completed' && !loadedQuote.text) {
    return <p>No Quote Found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
