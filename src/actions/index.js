// TODO: add and export your own actions
export function fetchMessages(channel) {
  console.log('babies');
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
                  .then(response => response.json());
  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  }
}
