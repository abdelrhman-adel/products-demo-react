import axios from "axios";

/**
 * a ready get request function that handles auto dispatching on success and fail
 * @param url - http url to use
 * @param mapper - a function that maps the result
 * @param action - the action to dispatch on status change
 * @returns {function(*): Promise}
 */
const getRequest = (url, mapper, action) => dispatch =>
  axios
    .get(url)
    .then(({ data }) => mapper(data))
    .then(data => dispatch(action("Success", data)))
    .catch(({ response: { status } }) => dispatch(action("Fail", status)));

export default getRequest;
