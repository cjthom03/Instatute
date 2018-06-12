

// {search : {query: "search text", limit: 10}}
//     OR
// {search : {path: "/search?q=search+text"}}

export const fetchSearchResults = search => (
  $.ajax({
    method: 'GET',
    url: 'api/search',
    data: { search }
  })
);
